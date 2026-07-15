import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { scrollToSection } from "@/components/SmoothScroll";

type Props = {
  visible: boolean;
};

export const GoToTop = ({ visible }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="go-to-top"
          type="button"
          aria-label="Back to top"
          onClick={() => scrollToSection("home")}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-full bg-accent text-accent-fg shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          <ArrowUp className="size-5" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};
