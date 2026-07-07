import { useEffect, useRef, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ROLE_WORDS = ["React Native", "payments", "design systems", "Node & AWS"];

const LONGEST_ROLE_WORD = ROLE_WORDS.reduce((longest, word) => (word.length > longest.length ? word : longest));

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

  return (
    <span className="relative inline-block h-[1.2em] align-bottom">
      <span className="invisible" aria-hidden="true">
        {LONGEST_ROLE_WORD}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLE_WORDS[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          className="absolute left-0 top-0 whitespace-nowrap text-accent"
        >
          {ROLE_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
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
    <section id="home" className="relative w-full overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:gap-8"
      >
        <div className="order-2 md:order-1">
          <motion.p variants={item} className="mb-4 font-mono text-sm text-fg-muted">
            hello world, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Marco Escaleira
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg text-fg-muted sm:text-xl">
            Full-stack engineer — React, React Native, Node, AWS
          </motion.p>

          <motion.p variants={item} className="mt-2 text-base text-fg-muted">
            Building <RoleCycle /> at{" "}
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

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openCommandPalette}
              aria-label="Open command palette"
              className="group flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-fg-muted transition-colors hover:border-accent hover:text-fg"
            >
              <span className="rounded border border-border bg-bg px-1.5 py-0.5 text-fg group-hover:border-accent">
                {isMac ? "⌘" : "Ctrl"}
              </span>
              <span className="rounded border border-border bg-bg px-1.5 py-0.5 text-fg group-hover:border-accent">
                K
              </span>
              <span>to explore</span>
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
              className="absolute -inset-3 rounded-full border border-accent/40"
              style={{ borderStyle: "dashed" }}
            />
            <Image
              src="/marco.jpg"
              alt="Portrait of Marco Escaleira"
              width={220}
              height={220}
              priority
              className="relative h-[220px] w-[220px] rounded-full border-4 border-surface object-cover shadow-lg shadow-accent/10"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
