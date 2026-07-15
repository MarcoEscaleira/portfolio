import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO } from "@/components/sections/SectionHeading";
import { metrics } from "@/data/metrics";

export const Metrics = () => {
  const shouldReduceMotion = useReducedMotion();

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06 } },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT_EXPO } },
  };

  return (
    <section aria-label="Key metrics" className="w-full bg-surface/60 py-lg">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={list}
          className="grid grid-cols-2 gap-sm sm:grid-cols-3 lg:grid-cols-7 lg:gap-md"
        >
          {metrics.map(({ value, label }) => (
            <motion.li key={label} variants={item} className="min-w-0">
              <p className="font-display text-xl font-semibold text-fg sm:text-2xl">{value}</p>
              <p className="mt-3xs font-mono text-xs text-fg-muted">{label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
