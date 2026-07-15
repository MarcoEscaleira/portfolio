import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { EASE_OUT_EXPO, SectionHeading } from "@/components/sections/SectionHeading";

const EMAIL = "marcoescaleira2000@gmail.com";

const SECONDARY_LINKS = [
  { href: "https://www.linkedin.com/in/marco-escaleira00/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/MarcoEscaleira", label: "GitHub", icon: Github },
];

export const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
  };

  return (
    <section id="contact" className="w-full section-pad">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading
          index="05."
          title="Contact"
          eyebrow="Hiring for full-stack, payments, or production engineering work? My inbox is open."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="rounded-lg border border-border bg-surface px-6 py-10 sm:px-10"
        >
          <p className="max-w-prose text-fg-muted">
            If you&apos;re hiring or building something across web, mobile, or backend — full-stack work with real
            production ownership — I&apos;d like to hear from you.
          </p>

          <Link
            href={`mailto:${EMAIL}`}
            className="mt-lg inline-flex min-h-11 items-center gap-3 rounded-md bg-accent px-6 py-3 font-display text-lg font-semibold text-accent-fg transition-opacity hover:opacity-90"
          >
            <Mail className="size-5" aria-hidden />
            Say hello
          </Link>

          <p className="mt-sm font-mono text-sm text-fg-muted">{EMAIL}</p>

          <div className="mt-xl flex flex-wrap items-center gap-md border-t border-border pt-lg">
            {SECONDARY_LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
              >
                <Icon className="size-4" aria-hidden />
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
