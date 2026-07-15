import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO, SectionHeading } from "@/components/sections/SectionHeading";
import { skills } from "@/data/skills";

export const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const group = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };

  const chip = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
  };

  return (
    <section id="skills" className="w-full section-pad">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          index="04."
          title="Skills"
          eyebrow="The stack I reach for when shipping production software — not a laundry list."
        />

        <div className="space-y-lg">
          {skills.map(({ label, skills: items }) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={group}
            >
              <h3 className="mb-sm font-mono text-xs uppercase tracking-wide text-fg-muted">{label}</h3>
              <div className="flex flex-wrap gap-2xs">
                {items.map(skill => (
                  <motion.span
                    key={skill}
                    variants={chip}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-fg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
