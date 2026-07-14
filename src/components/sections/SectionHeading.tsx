import { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

type SectionHeadingProps = PropsWithChildren<{
  index: string;
  title: string;
  eyebrow?: string;
}>;

export const SectionHeading = ({ index, title, eyebrow, children }: SectionHeadingProps) => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={reveal}
      className="mb-xl flex flex-col gap-xs"
    >
      <div className="flex items-baseline gap-xs">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h2 className="font-display text-display-md font-semibold text-fg">{title}</h2>
      </div>
      {eyebrow && <p className="max-w-prose text-fg-muted">{eyebrow}</p>}
      {children}
    </motion.div>
  );
};

export { EASE_OUT_EXPO };
