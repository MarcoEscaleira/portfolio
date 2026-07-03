import { motion, useReducedMotion } from "motion/react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FUN_FACTS = [
  "Started out writing PHP + jQuery, and I'm not ashamed of it.",
  "Taught humans before teaching computers was even a job title.",
  "On-call survivor: the pager and I have an understanding.",
  "Went from a Faculty of Medicine to Tap to Pay — long story.",
];

export const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
  };

  return (
    <section id="about" className="w-full py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mb-10 flex items-baseline gap-3"
        >
          <span className="font-mono text-sm text-accent">01.</span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">About</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="space-y-4 text-fg-muted"
          >
            <p>
              I grew up in Portugal and studied Computer Science, graduating with a First-class degree. I took my first
              steps as a developer at the Faculty of Medicine in Porto, then taught at Mindera Academy before making the
              move from Porto to London.
            </p>
            <p>
              These days I build payment products at yetipay — most recently Tap to Pay on iPhone and Android — and I
              carry the on-call pager for a live payments platform, which is its own kind of education.
            </p>
            <p className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-sm text-fg">
              <span className="text-accent">Currently:</span> building the yetipay merchant app in React Native, with
              Tap to Pay on both iOS and Android.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
            }}
            className="space-y-3"
          >
            {FUN_FACTS.map((fact, i) => (
              <motion.li
                key={fact}
                variants={reveal}
                className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-fg-muted"
                style={{ transform: i % 2 === 0 ? "rotate(-0.6deg)" : "rotate(0.6deg)" }}
              >
                {fact}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
