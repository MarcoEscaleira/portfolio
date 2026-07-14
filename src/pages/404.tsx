import { motion, useReducedMotion } from "motion/react";
import Head from "next/head";
import Link from "next/link";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const openCommandPalette = () => {
  window.dispatchEvent(new CustomEvent("open-command-palette"));
};

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
  };

  return (
    <>
      <Head>
        <title>404 — Marco Escaleira</title>
      </Head>

      <div className="flex w-full flex-1 items-center justify-center px-6 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-lg rounded-lg border border-border bg-surface font-mono shadow-lg"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="ml-2 text-xs text-fg-muted">marco@portfolio: ~</span>
          </div>

          <div className="space-y-3 px-5 py-6 text-sm">
            <motion.p variants={reveal} className="text-fg-muted">
              <span className="text-accent">❯</span> cd /this-page
            </motion.p>
            <motion.p variants={reveal} className="text-fg">
              cd: no such file or directory: /this-page
            </motion.p>
            <motion.p variants={reveal} className="pt-2 text-fg-muted">
              <span className="text-accent">❯</span> ls -la
            </motion.p>
            <motion.p variants={reveal} className="text-fg">
              404 — page not found
            </motion.p>

            <motion.div variants={reveal} className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/"
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
              >
                cd ~
              </Link>

              <button
                type="button"
                onClick={openCommandPalette}
                className="group flex items-center gap-2 rounded-md border border-border bg-bg px-3 py-2 text-xs text-fg-muted transition-colors hover:border-accent hover:text-fg"
              >
                <span className="rounded border border-border bg-surface px-1.5 py-0.5 text-fg group-hover:border-accent">
                  ⌘
                </span>
                <span className="rounded border border-border bg-surface px-1.5 py-0.5 text-fg group-hover:border-accent">
                  K
                </span>
                <span>try the command palette</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
