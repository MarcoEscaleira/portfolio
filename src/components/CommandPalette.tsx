import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, useCommandState } from "cmdk";
import { scrollToSection } from "@/components/SmoothScroll";
import { projects } from "@/data/projects";

const GITHUB_URL = "https://github.com/MarcoEscaleira";
const LINKEDIN_URL = "https://www.linkedin.com/in/marco-escaleira00/";
const EMAIL = "marcoescaleira2000@gmail.com";
const CV_PATH = "/Marco-Escaleira-CV.pdf";

const SECTION_COMMANDS: { id: string; label: string; description: string }[] = [
  { id: "home", label: "home", description: "back to the top" },
  { id: "about", label: "about", description: "who I am" },
  { id: "experience", label: "experience", description: "where I've worked" },
  { id: "projects", label: "projects", description: "things I've built" },
  { id: "skills", label: "skills", description: "tools of the trade" },
  { id: "contact", label: "contact", description: "say hello" },
];

const openInNewTab = (href: string) => {
  window.open(href, "_blank", "noreferrer");
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type PaletteInputProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onUnknownSubmit: (value: string) => void;
  exactCommands: Record<string, () => void>;
};

/**
 * Wraps CommandInput so we can read cmdk's live filtered-item count via
 * useCommandState (only available inside the Command root) and fire the
 * "command not found" output when Enter is pressed with zero matches.
 *
 * Exact hidden-command matches (sudo/konami/motojoy) are resolved here
 * directly rather than relying on cmdk's fuzzy ranking + auto-selected item:
 * a full, exact match like "sudo" can otherwise lose the highlighted/Enter
 * slot to an unrelated visible item whose letters fuzzy-match the same
 * sequence (e.g. "shouldYouDoIt" contains s-u-d-o in order).
 */
const PaletteInput = ({ search, onSearchChange, onUnknownSubmit, exactCommands }: PaletteInputProps) => {
  const filteredCount = useCommandState(state => state.filtered.count);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    const value = search.trim();
    if (!value) return;

    const exactMatch = exactCommands[value.toLowerCase()];
    if (exactMatch) {
      event.preventDefault();
      exactMatch();
      return;
    }

    if (filteredCount > 0) return;
    onUnknownSubmit(value);
  };

  return (
    <CommandInput
      value={search}
      onValueChange={onSearchChange}
      onKeyDown={handleKeyDown}
      placeholder="type a command… (try 'help')"
      className="w-full bg-transparent text-sm text-fg placeholder:text-fg-muted focus:outline-none"
    />
  );
};

export const CommandPalette = ({ open, onOpenChange }: Props) => {
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      // cmdk's Dialog doesn't expose a Trigger, so capture whatever had
      // focus (hotkey target or the Hero/404 chip) ourselves and restore it
      // when the palette closes.
      triggerRef.current = document.activeElement as HTMLElement | null;
      return undefined;
    }

    setSearch("");
    setOutput(null);
    triggerRef.current?.focus?.();
    triggerRef.current = null;
    return undefined;
  }, [open]);

  const close = () => onOpenChange(false);

  const runNavigate = (id: string) => {
    scrollToSection(id);
    close();
  };

  const runWhoami = () => {
    setOutput("Marco Escaleira — full-stack engineer, London");
  };

  const runHelp = () => {
    const commandNames = SECTION_COMMANDS.map(c => c.label)
      .concat(["whoami", "cv", "github", "linkedin", "email", "help"])
      .join(", ");
    setOutput(`available commands: ${commandNames}`);
  };

  const runSudo = () => {
    setOutput("permission denied: nice try, you are not root here");
  };

  const runKonami = () => {
    setOutput("hint: ↑ ↑ ↓ ↓ ← → ← → B A — try it on the page, not in here");
  };

  const runMotojoy = () => {
    setOutput("MotoJoy: PHP, jQuery, and Bootstrap — my e-commerce origin story. See it in the projects section.");
  };

  const runUnknown = (value: string) => {
    setOutput(`command not found: ${value} — try 'help'`);
  };

  const exactCommands: Record<string, () => void> = {
    sudo: runSudo,
    konami: runKonami,
    motojoy: runMotojoy,
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command palette"
      shouldFilter
      vimBindings={false}
      contentClassName="fixed left-1/2 top-24 z-[101] w-full max-w-xl -translate-x-1/2 overflow-hidden rounded-lg border border-border bg-surface font-mono shadow-2xl shadow-black/20"
      overlayClassName="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="text-accent">❯</span>
        <PaletteInput
          search={search}
          onSearchChange={setSearch}
          onUnknownSubmit={runUnknown}
          exactCommands={exactCommands}
        />
      </div>

      <CommandList className="max-h-80 overflow-y-auto p-2">
        <CommandEmpty className="px-3 py-6 text-sm text-fg-muted">
          command not found: {search || "?"} — try &lsquo;help&rsquo; (press Enter)
        </CommandEmpty>

        <CommandGroup
          heading="navigate"
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-fg-muted"
        >
          {SECTION_COMMANDS.map(({ id, label, description }) => (
            <CommandItem
              key={id}
              value={label}
              onSelect={() => runNavigate(id)}
              className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-fg data-[selected=true]:bg-bg data-[selected=true]:text-accent"
            >
              <span>{label}</span>
              <span className="text-xs text-fg-muted">{description}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup
          heading="actions"
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-fg-muted"
        >
          <CommandItem
            value="whoami"
            onSelect={runWhoami}
            className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-fg data-[selected=true]:bg-bg data-[selected=true]:text-accent"
          >
            <span>whoami</span>
            <span className="text-xs text-fg-muted">who is this, anyway</span>
          </CommandItem>
          <CommandItem
            value="cv"
            onSelect={() => {
              openInNewTab(CV_PATH);
              close();
            }}
            className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-fg data-[selected=true]:bg-bg data-[selected=true]:text-accent"
          >
            <span>cv</span>
            <span className="text-xs text-fg-muted">open my CV</span>
          </CommandItem>
          <CommandItem
            value="github"
            onSelect={() => {
              openInNewTab(GITHUB_URL);
              close();
            }}
            className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-fg data-[selected=true]:bg-bg data-[selected=true]:text-accent"
          >
            <span>github</span>
            <span className="text-xs text-fg-muted">github.com/MarcoEscaleira</span>
          </CommandItem>
          <CommandItem
            value="linkedin"
            onSelect={() => {
              openInNewTab(LINKEDIN_URL);
              close();
            }}
            className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-fg data-[selected=true]:bg-bg data-[selected=true]:text-accent"
          >
            <span>linkedin</span>
            <span className="text-xs text-fg-muted">connect on LinkedIn</span>
          </CommandItem>
          <CommandItem
            value="email"
            onSelect={() => {
              window.location.href = `mailto:${EMAIL}`;
              close();
            }}
            className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-fg data-[selected=true]:bg-bg data-[selected=true]:text-accent"
          >
            <span>email</span>
            <span className="text-xs text-fg-muted">{EMAIL}</span>
          </CommandItem>
          <CommandItem
            value="help"
            onSelect={runHelp}
            className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-fg data-[selected=true]:bg-bg data-[selected=true]:text-accent"
          >
            <span>help</span>
            <span className="text-xs text-fg-muted">list available commands</span>
          </CommandItem>
        </CommandGroup>

        {projects.length > 0 && (
          <CommandGroup
            heading="projects"
            className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-fg-muted"
          >
            {projects.map(project => (
              <CommandItem
                key={project.slug}
                value={project.title}
                onSelect={() => runNavigate("projects")}
                className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-fg data-[selected=true]:bg-bg data-[selected=true]:text-accent"
              >
                <span>{project.title}</span>
                <span className="truncate pl-4 text-xs text-fg-muted">{project.tagline}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>

      {output && (
        <div className="border-t border-border bg-bg px-4 py-3 text-sm text-fg-muted">
          <span className="mr-2 text-accent">$</span>
          {output}
        </div>
      )}
    </CommandDialog>
  );
};
