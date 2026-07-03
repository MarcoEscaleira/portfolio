import { useId, useState } from "react";
import { ChevronDown, ExternalLink, Github, Globe, Server, Smartphone, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const LINK_META: Record<
  keyof Project["links"],
  { label: string; icon: typeof ExternalLink }
> = {
  live: { label: "Live site", icon: Globe },
  repo: { label: "Repo", icon: Github },
  repoBackend: { label: "Backend repo", icon: Server },
  repoMobile: { label: "Mobile repo", icon: Smartphone },
  company: { label: "Company", icon: ExternalLink },
};

const LINK_ORDER: Array<keyof Project["links"]> = ["live", "company", "repo", "repoBackend", "repoMobile"];

interface ProjectCardProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

const ProjectCard = ({ project, isOpen, onToggle }: ProjectCardProps) => {
  const shouldReduceMotion = useReducedMotion();
  const panelId = useId();
  const availableLinks = LINK_ORDER.filter(key => project.links[key]);

  return (
    <div
      className={`rounded-lg border bg-surface transition-colors ${
        project.flagship ? "border-accent/60" : "border-border"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={isOpen ? panelId : undefined}
        className="group flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {project.flagship && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 font-mono text-xs font-medium text-accent-fg">
                <Sparkles className="size-3" />
                Flagship
              </span>
            )}
            <h3
              className={`font-display font-semibold ${
                project.flagship ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              }`}
            >
              {project.title}
            </h3>
            {project.year && <span className="font-mono text-xs text-fg-muted">{project.year}</span>}
          </div>
          <p className="mt-1.5 text-fg-muted">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-xs text-fg-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <span
          aria-hidden
          className="mt-1 flex size-8 flex-none items-center justify-center rounded-full border border-border text-fg-muted transition-colors group-hover:text-accent"
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: EASE_OUT_EXPO }}
            className="flex"
          >
            <ChevronDown className="size-4" />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            key="content"
            initial={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: EASE_OUT_EXPO }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-border px-5 pb-6 pt-5 sm:px-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-accent">Problem</h4>
                <p className="mt-1.5 text-sm text-fg-muted">{project.problem}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-accent">What I built</h4>
                <p className="mt-1.5 text-sm text-fg-muted">{project.built}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-accent">Outcome</h4>
                <p className="mt-1.5 text-sm text-fg-muted">{project.outcome}</p>
              </div>

              {availableLinks.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  {availableLinks.map(key => {
                    const { label, icon: Icon } = LINK_META[key];
                    return (
                      <Link
                        key={key}
                        href={project.links[key] as string}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                      >
                        <Icon className="size-4" />
                        {label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  const [openSlug, setOpenSlug] = useState<string | null>(projects.find(p => p.flagship)?.slug ?? null);

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
  };

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };

  return (
    <section id="projects" className="w-full py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mb-10 flex items-baseline gap-3"
        >
          <span className="font-mono text-sm text-accent">02.</span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Projects</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={list}
          className="space-y-4"
        >
          {projects.map(project => (
            <motion.div key={project.slug} variants={reveal}>
              <ProjectCard
                project={project}
                isOpen={openSlug === project.slug}
                onToggle={() => setOpenSlug(current => (current === project.slug ? null : project.slug))}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
