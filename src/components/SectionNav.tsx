import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { scrollToSection } from "@/components/SmoothScroll";
import { SECTIONS, type SectionId } from "@/data/sections";

type Props = {
  visible: boolean;
  activeSection: SectionId;
};

export const SectionNav = ({ visible, activeSection }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {visible ? (
        <motion.nav
          key="section-nav"
          aria-label="Page sections"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -8, y: "-50%" }}
          animate={{ opacity: 1, x: 0, y: "-50%" }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, x: -8, y: "-50%" }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none fixed left-4 top-1/2 z-30 hidden lg:block"
        >
          <div className="pointer-events-auto relative flex flex-col items-center gap-3">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-border"
            />
            {SECTIONS.map(({ id, label }) => {
              const isActive = activeSection === id;

              return (
                <Link
                  key={id}
                  href={`/#${id}`}
                  aria-label={label}
                  aria-current={isActive ? "true" : undefined}
                  title={label}
                  onClick={e => {
                    if (document.getElementById(id)) {
                      e.preventDefault();
                      scrollToSection(id);
                    }
                  }}
                  className="group relative z-10 flex size-9 items-center justify-center rounded-full"
                >
                  <span
                    className={`block rounded-full border transition-[width,height,background-color,border-color,transform] duration-200 ${
                      isActive
                        ? "size-3 scale-100 border-accent bg-accent"
                        : "size-2.5 border-border bg-bg group-hover:scale-125 group-hover:border-accent group-hover:bg-accent/40"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
};
