import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const EMAIL = "marcoescaleira2000@gmail.com";

const SECONDARY_LINKS = [
  { href: "https://www.linkedin.com/in/marco-escaleira00/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/MarcoEscaleira", label: "GitHub", icon: Github },
  { href: "/Marco-Escaleira-CV.pdf", label: "Download CV", icon: Download, download: true },
];

export const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
  };

  return (
    <section id="contact" className="w-full py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mb-10 flex items-baseline gap-3"
        >
          <span className="font-mono text-sm text-accent">05.</span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Contact</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="rounded-lg border border-border bg-surface px-6 py-10 sm:px-10"
        >
          <p className="max-w-lg text-fg-muted">
            Got a role, a project, or just want to talk shop about payments and React Native? My inbox is open.
          </p>

          <Link
            href={`mailto:${EMAIL}`}
            className="mt-6 inline-flex items-center gap-3 rounded-md bg-accent px-6 py-3 font-display text-lg font-semibold text-accent-fg transition-opacity hover:opacity-90"
          >
            <Mail className="size-5" />
            Say hello
          </Link>

          <p className="mt-3 font-mono text-sm text-fg-muted">{EMAIL}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
            {SECONDARY_LINKS.map(({ href, label, icon: Icon, download }) => (
              <Link
                key={label}
                href={href}
                target={download ? undefined : "_blank"}
                rel={download ? undefined : "noreferrer"}
                download={download}
                className="flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
              >
                <Icon className="size-4" />
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
