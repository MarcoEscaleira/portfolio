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
          eyebrow="Portugal roots, London base — building products people actually use."
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
              I grew up in Portugal and took my first steps as a developer at the Faculty of Medicine in Porto. I
              moved from Porto to England while already at Mindera — kept shipping software and completed my Honours BSc
              in Computer Science (First-class) along the way. I later taught at Mindera Academy; these days I&apos;m
              based in London.
            </p>
            <p>
              I build production-ready products from frontend to backend — owning architecture, infrastructure,
              developer experience, and customer-facing features. I enjoy shipping scalable software while improving
              engineering velocity through automation, testing, and reusable systems.
            </p>
            <p className="rounded-md border border-border bg-surface px-4 py-3 font-mono text-sm text-fg">
              <span className="text-accent">Currently:</span> shipping payments products at yetipay end to end —
              merchant app, APIs, AWS, and on-call for a live platform.
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
