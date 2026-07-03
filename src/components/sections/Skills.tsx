import { motion, useReducedMotion } from "motion/react";
import { skills } from "@/data/skills";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
  };

  const group = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } },
  };

  const chip = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
  };

  return (
    <section id="skills" className="w-full py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mb-10 flex items-baseline gap-3"
        >
          <span className="font-mono text-sm text-accent">04.</span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Skills</h2>
        </motion.div>

        <div className="space-y-8">
          {skills.map(({ label, skills: items }) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={group}
            >
              <h3 className="mb-3 font-display text-sm uppercase tracking-wide text-fg-muted">{label}</h3>
              <div className="flex flex-wrap gap-2">
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
