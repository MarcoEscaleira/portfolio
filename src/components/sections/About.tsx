import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO, SectionHeading } from "@/components/sections/SectionHeading";

const FUN_FACTS = [
  "Started out writing PHP + jQuery — and I'm not ashamed of it.",
  "Taught humans before teaching computers was even a job title.",
  "On-call survivor: the pager and I have an understanding.",
  "Faculty of Medicine → Tap to Pay. Long story, worth asking.",
];

export const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
  };

  return (
    <section id="about" className="w-full section-pad">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          index="01."
          title="About"
          eyebrow="Portugal roots, London base — still curious about how products actually land in people's hands."
        />

        <div className="grid grid-cols-1 gap-xl md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="max-w-prose space-y-md text-fg-muted"
          >
            <p>
              I grew up in Portugal, studied Computer Science (First-class), and took my first steps as a developer at
              the Faculty of Medicine in Porto. I taught at Mindera Academy, then moved from Porto to London.
            </p>
            <p>
              These days I build payment products at yetipay — most recently Tap to Pay on iPhone and Android — and I
              carry the on-call pager for a live payments platform. That part is its own kind of education.
            </p>
            <p className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-sm text-fg">
              <span className="text-accent">Currently:</span> shipping the yetipay merchant app in React Native, with
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
            className="space-y-sm"
            aria-label="Fun facts"
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
