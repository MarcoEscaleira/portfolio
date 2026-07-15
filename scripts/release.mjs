#!/usr/bin/env node
/**
 * Interactive release: bump tag (patch|minor|major), generate notes with git-cliff,
 * optionally push tag to trigger Deploy Prod + create GitHub Release.
 *
 * Usage: yarn release
 *
 * Requires: clean git tree, on main, gh CLI authenticated.
 */

import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";
import { stdin as input, stdout as output } from "node:process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TAG_PREFIX = "v";

/** Prefer keyring/`gh auth login` over a possibly stale GITHUB_TOKEN in the shell. */
function ghEnv() {
  const env = { ...process.env, NO_COLOR: "1" };
  delete env.GITHUB_TOKEN;
  delete env.GH_TOKEN;
  return env;
}

function run(cmd, args, { capture = false, allowFail = false, env } = {}) {
  const result = spawnSync(cmd, args, {
    cwd: ROOT,
    encoding: "utf8",
    stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
    env: env ?? { ...process.env, NO_COLOR: "1" },
  });

  if (result.status !== 0 && !allowFail) {
    const detail = capture
      ? (result.stderr || result.stdout || "").trim()
      : "";
    throw new Error(
      detail
        ? `\`${cmd} ${args.join(" ")}\` failed:\n${detail}`
        : `\`${cmd} ${args.join(" ")}\` failed (exit ${result.status})`,
    );
  }

  return {
    status: result.status ?? 1,
    stdout: (result.stdout || "").trim(),
    stderr: (result.stderr || "").trim(),
  };
}

function git(...args) {
  return run("git", args, { capture: true }).stdout;
}

function gitOk(...args) {
  return run("git", args, { capture: true, allowFail: true }).status === 0;
}

function parseSemverTag(tag) {
  const match = /^v(\d+)\.(\d+)\.(\d+)$/.exec(tag);
  if (!match) return null;
  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
  };
}

function formatTag({ major, minor, patch }) {
  return `${TAG_PREFIX}${major}.${minor}.${patch}`;
}

function bumpVersion(version, kind) {
  switch (kind) {
    case "major":
      return { major: version.major + 1, minor: 0, patch: 0 };
    case "minor":
      return { major: version.major, minor: version.minor + 1, patch: 0 };
    case "patch":
      return {
        major: version.major,
        minor: version.minor,
        patch: version.patch + 1,
      };
    default:
      throw new Error(`Unknown bump kind: ${kind}`);
  }
}

function latestSemverTag() {
  const tags = git("tag", "-l", "v*")
    .split("\n")
    .map((t) => t.trim())
    .filter(Boolean)
    .map((tag) => ({ tag, version: parseSemverTag(tag) }))
    .filter((entry) => entry.version);

  if (tags.length === 0) return null;

  tags.sort((a, b) => {
    const av = a.version;
    const bv = b.version;
    if (av.major !== bv.major) return av.major - bv.major;
    if (av.minor !== bv.minor) return av.minor - bv.minor;
    return av.patch - bv.patch;
  });

  return tags[tags.length - 1];
}

function assertPreconditions() {
  const branch = git("rev-parse", "--abbrev-ref", "HEAD");
  if (branch !== "main") {
    throw new Error(`Must be on main (currently on ${branch}).`);
  }

  const status = git("status", "--porcelain");
  if (status) {
    throw new Error("Working tree dirty. Commit or stash changes first.");
  }

  run("git", ["pull", "--ff-only"]);

  const gh = spawnSync("gh", ["auth", "status"], {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    env: ghEnv(),
  });
  if (gh.status !== 0) {
    throw new Error(
      "GitHub CLI not authenticated. Run `gh auth login` and retry.",
    );
  }
}

function generateNotes(previousTag, nextTag) {
  const args = ["git-cliff"];
  if (previousTag) {
    args.push(`${previousTag}..HEAD`);
  } else {
    args.push("--unreleased");
  }
  args.push("--tag", nextTag, "-o", "-");

  const viaYarn = spawnSync("yarn", args, {
    cwd: ROOT,
    encoding: "utf8",
    env: { ...process.env, NO_COLOR: "1" },
  });

  if (viaYarn.status !== 0) {
    throw new Error(
      `git-cliff failed:\n${(viaYarn.stderr || viaYarn.stdout || "").trim()}`,
    );
  }

  return viaYarn.stdout.replace(/\u001b\[[0-9;]*m/g, "").trim();
}

async function promptChoice(rl, question, choices) {
  const labels = choices.map((c) => c.label).join(" / ");
  for (;;) {
    const answer = (await rl.question(`${question} [${labels}]: `))
      .trim()
      .toLowerCase();
    const match = choices.find(
      (c) =>
        c.value === answer ||
        c.label.toLowerCase() === answer ||
        c.aliases?.includes(answer),
    );
    if (match) return match.value;
    console.log(`Please choose: ${labels}`);
  }
}

async function promptYesNo(rl, question, defaultYes = false) {
  const hint = defaultYes ? "Y/n" : "y/N";
  for (;;) {
    const answer = (await rl.question(`${question} [${hint}]: `))
      .trim()
      .toLowerCase();
    if (!answer) return defaultYes;
    if (["y", "yes"].includes(answer)) return true;
    if (["n", "no"].includes(answer)) return false;
    console.log("Please answer y or n.");
  }
}

async function main() {
  assertPreconditions();

  const latest = latestSemverTag();
  const current = latest?.version ?? { major: 0, minor: 0, patch: 0 };
  const previousTag = latest?.tag ?? null;

  console.log(
    previousTag
      ? `Latest tag: ${previousTag}`
      : "No v* tags found — next version derived from 0.0.0.",
  );

  const rl = createInterface({ input, output });

  try {
    const bump = await promptChoice(rl, "Bump type", [
      { value: "patch", label: "patch", aliases: ["p", "1"] },
      { value: "minor", label: "minor", aliases: ["mi", "2"] },
      { value: "major", label: "major", aliases: ["ma", "3"] },
    ]);

    const nextTag = formatTag(bumpVersion(current, bump));

    if (gitOk("rev-parse", nextTag)) {
      throw new Error(`Tag ${nextTag} already exists locally.`);
    }

    const notes = generateNotes(previousTag, nextTag);
    if (!notes) {
      throw new Error(
        "git-cliff produced empty notes. Nothing to release since last tag?",
      );
    }

    console.log("\n--- Release notes preview ---\n");
    console.log(notes);
    console.log("\n-----------------------------\n");
    console.log(`Next tag: ${nextTag} (${bump})`);

    const confirm = await promptYesNo(
      rl,
      `Create local annotated tag ${nextTag}?`,
      true,
    );
    if (!confirm) {
      console.log("Aborted.");
      return;
    }

    const notesDir = mkdtempSync(join(tmpdir(), "portfolio-release-"));
    const notesFile = join(notesDir, "notes.md");
    writeFileSync(notesFile, `${notes}\n`, "utf8");

    run("git", ["tag", "-a", nextTag, "-m", nextTag]);
    console.log(`Created local tag ${nextTag}`);

    const deploy = await promptYesNo(
      rl,
      "Deploy to production? (pushes tag → Deploy Prod + creates GitHub Release)",
      true,
    );

    if (!deploy) {
      console.log(`\nTag ${nextTag} kept local only — no prod deploy.`);
      console.log(`Notes saved at: ${notesFile}`);
      console.log("When ready:");
      console.log(`  git push origin ${nextTag}`);
      console.log(
        `  gh release create ${nextTag} --title ${nextTag} --notes-file ${notesFile}`,
      );
      return;
    }

    try {
      run("git", ["push", "origin", nextTag]);
      console.log(`Pushed ${nextTag} → Deploy Prod workflow should start.`);

      run("gh", [
        "release",
        "create",
        nextTag,
        "--title",
        nextTag,
        "--notes-file",
        notesFile,
      ], { env: ghEnv() });
      console.log(`GitHub Release ${nextTag} created.`);
    } finally {
      rmSync(notesDir, { recursive: true, force: true });
    }
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  console.error(`\nRelease failed: ${error.message}`);
  process.exit(1);
});
