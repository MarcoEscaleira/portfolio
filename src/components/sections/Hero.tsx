import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { EASE_OUT_EXPO } from "@/components/sections/SectionHeading";
import { scrollToSection } from "@/components/SmoothScroll";

const ROLE_WORDS = ["Software Engineer", "Fullstack Engineer"];

const SOCIAL_LINKS = [
  { href: "https://github.com/MarcoEscaleira", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/marco-escaleira00/", label: "LinkedIn", icon: Linkedin },
];

const openCommandPalette = () => {
  window.dispatchEvent(new CustomEvent("open-command-palette"));
};

const useIsMac = () => {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(typeof navigator !== "undefined" && /mac/i.test(navigator.platform));
  }, []);

  return isMac;
};

const RoleCycle = () => {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      const next = indexRef.current + 1;
      indexRef.current = Math.min(next, ROLE_WORDS.length - 1);
      setIndex(indexRef.current);

      if (next >= ROLE_WORDS.length - 1) {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className="text-accent">{ROLE_WORDS[0]}</span>;
  }

  // Size to the active word so the surrounding sentence stays tightly spaced.
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={ROLE_WORDS[index]}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
        className="inline-block text-accent"
      >
        {ROLE_WORDS[index]}
      </motion.span>
    </AnimatePresence>
  );
};

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const isMac = useIsMac();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <section id="home" className="relative w-full overflow-hidden section-pad">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fg/5 blur-3xl dark:bg-accent/5"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-xl px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-lg"
      >
        <div className="order-2 md:order-1">
          <motion.p variants={item} className="mb-sm font-mono text-sm text-fg-muted">
            hi — I&apos;m
          </motion.p>

          <motion.h1 variants={item} className="text-balance font-display text-display-lg font-semibold text-fg">
            Marco Escaleira
          </motion.h1>

          <motion.p variants={item} className="mt-md max-w-prose text-lg text-fg-muted sm:text-xl">
            Full-stack software engineer with 7+ years shipping scalable web and mobile products end to end —
            React, React Native, Node.js, and AWS — from architecture to production.
          </motion.p>

          <motion.p variants={item} className="mt-xs max-w-prose text-base text-fg-muted">
            Right now: <RoleCycle /> at{" "}
            <Link
              href="https://yetipay.me"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-fg underline decoration-border decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
            >
              yetipay
            </Link>{" "}
            in London.
          </motion.p>

          <motion.div variants={item} className="mt-xl flex flex-wrap items-center gap-sm">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-display text-base font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" aria-hidden />
              Let&apos;s talk
            </button>

            <button
              type="button"
              onClick={openCommandPalette}
              aria-label="Open command palette"
              className="group flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2.5 font-mono text-xs text-fg-muted transition-colors hover:border-accent hover:text-fg"
            >
              <span className="rounded border border-border bg-bg px-1.5 py-0.5 text-fg group-hover:border-accent">
                {isMac ? "⌘" : "Ctrl"}
              </span>
              <span className="rounded border border-border bg-bg px-1.5 py-0.5 text-fg group-hover:border-accent">
                K
              </span>
              <span>explore</span>
            </button>

            <div className="flex items-center gap-1">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-md p-2 text-fg-muted transition-colors duration-200 hover:text-accent"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full border border-accent/35"
              style={{ borderStyle: "dashed" }}
            />
            <Image
              src="/marco.jpg"
              alt="Portrait of Marco Escaleira"
              width={220}
              height={220}
              priority
              className="relative h-[200px] w-[200px] rounded-full border-4 border-surface object-cover sm:h-[220px] sm:w-[220px]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
