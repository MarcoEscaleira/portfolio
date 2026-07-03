import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { experience } from "@/data/experience";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
  };

  const entry = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
  };

  return (
    <section id="experience" className="w-full py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mb-10 flex items-baseline gap-3"
        >
          <span className="font-mono text-sm text-accent">03.</span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Experience</h2>
        </motion.div>

        <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
          {experience.map(({ company, role, location, period, highlights, url }) => (
            <motion.li
              key={company}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={entry}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute -left-[2.35rem] top-1.5 size-3 rounded-full border-2 border-accent bg-bg sm:-left-[2.85rem]"
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold sm:text-xl">
                  {url ? (
                    <Link
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-border decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      {company}
                    </Link>
                  ) : (
                    company
                  )}
                </h3>
                {period && (
                  <span
                    className={
                      period === "Current"
                        ? "rounded-full bg-accent px-2.5 py-0.5 font-mono text-xs font-medium text-accent-fg"
                        : "font-mono text-xs text-fg-muted"
                    }
                  >
                    {period}
                  </span>
                )}
              </div>

              <p className="mt-0.5 text-sm text-fg-muted">
                {role}
                {location && <span className="text-fg-muted/70"> · {location}</span>}
              </p>

              {highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {highlights.map(highlight => (
                    <li key={highlight} className="flex gap-2 text-sm text-fg-muted">
                      <span aria-hidden className="mt-2 size-1 flex-none rounded-full bg-fg-muted" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
