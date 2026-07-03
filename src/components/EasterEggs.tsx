import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const AWAY_TITLE = "👋 come back soon — marco";

const fireConfetti = () => {
  const accent = getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim();
  const colorFromRgbTriplet = accent ? `rgb(${accent.replace(/\s+/g, ", ")})` : undefined;

  confetti({
    particleCount: 140,
    spread: 80,
    origin: { y: 0.6 },
    colors: colorFromRgbTriplet ? [colorFromRgbTriplet, "#ffffff"] : undefined,
  });
};

/**
 * Renders nothing by default. Listens for the Konami code (fires confetti +
 * a toast, or a text-only toast under reduced motion) and swaps the tab
 * title to a playful message while the tab is hidden.
 */
export const EasterEggs = () => {
  const shouldReduceMotion = useReducedMotion();
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    let progress = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[progress];
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (key === expected) {
        progress += 1;
        if (progress === KONAMI_SEQUENCE.length) {
          progress = 0;
          if (shouldReduceMotion) {
            setToast("30 lives added. (confetti skipped — reduced motion)");
          } else {
            fireConfetti();
            setToast("Konami code accepted. Enjoy the confetti.");
          }
        }
      } else {
        progress = key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!toast) return undefined;

    const timeout = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    let titleBeforeHide: string | null = null;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        titleBeforeHide = document.title;
        document.title = AWAY_TITLE;
      } else if (titleBeforeHide !== null) {
        document.title = titleBeforeHide;
        titleBeforeHide = null;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (titleBeforeHide !== null) {
        document.title = titleBeforeHide;
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          role="status"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-md border border-border bg-surface px-4 py-2 font-mono text-sm text-fg shadow-lg"
        >
          <span className="mr-2 text-accent">❯</span>
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
