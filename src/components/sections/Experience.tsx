import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { EASE_OUT_EXPO, SectionHeading } from "@/components/sections/SectionHeading";
import { experience } from "@/data/experience";

export const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  const entry = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
  };

  return (
    <section id="experience" className="w-full section-pad">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          index="02."
          title="Experience"
          eyebrow="Where I've shipped, mentored, and learned — from faculty web work to live payments."
        />

        <ol className="relative space-y-xl border-l border-border pl-8 sm:pl-10">
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

              <div className="flex flex-wrap items-baseline gap-x-sm gap-y-2xs">
                <h3 className="font-display text-display-sm font-semibold">
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

              <p className="mt-3xs text-sm text-fg-muted">
                {role}
                {location && <span> · {location}</span>}
              </p>

              {highlights.length > 0 && (
                <ul className="mt-sm space-y-2xs">
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
