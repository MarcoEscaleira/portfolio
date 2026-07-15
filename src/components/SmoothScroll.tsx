import { useEffect } from "react";
import Lenis from "lenis";

// Tracks the currently-mounted Lenis instance (if any) so that JS-driven
// navigation elsewhere in the app (Header links, command palette) can hand
// scrolling off to Lenis instead of fighting it with native scrollIntoView.
// See scrollToSection below.
let lenisInstance: Lenis | null = null;

type ScrollListener = () => void;
const scrollListeners = new Set<ScrollListener>();

const notifyScrollListeners = () => {
  scrollListeners.forEach(listener => listener());
};

/**
 * Subscribe to scroll position changes (native + Lenis). Always also listens
 * on `window` so reduced-motion / pre-Lenis mount still work.
 */
export const subscribeToScroll = (listener: ScrollListener): (() => void) => {
  scrollListeners.add(listener);
  window.addEventListener("scroll", listener, { passive: true });
  return () => {
    scrollListeners.delete(listener);
    window.removeEventListener("scroll", listener);
  };
};

/**
 * Mounts a Lenis smooth-scroll instance on the document for the lifetime of
 * the component. Renders nothing. Fully skipped (Lenis is never instantiated)
 * when the user prefers reduced motion, and torn down again if the
 * preference changes mid-session.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let lenis: Lenis | undefined;
    let rafId: number | undefined;

    const start = () => {
      lenis = new Lenis({ anchors: true });
      lenisInstance = lenis;
      lenis.on("scroll", notifyScrollListeners);

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    const stop = () => {
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      lenis?.off("scroll", notifyScrollListeners);
      lenis?.destroy();
      lenis = undefined;
      rafId = undefined;
      lenisInstance = null;
    };

    if (!mediaQuery.matches) {
      start();
    }

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        stop();
      } else {
        start();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      stop();
    };
  }, []);

  return null;
};

/**
 * Navigates to a section by id, preferring the live Lenis instance (so the
 * scroll stays virtualized/animated consistently with user-driven scrolling)
 * and falling back to native scrollIntoView when Lenis isn't mounted (e.g.
 * reduced-motion preference). Safe to call from anywhere; no-ops if the
 * target element doesn't exist.
 */
export const scrollToSection = (id: string): void => {
  if (typeof document === "undefined") return;

  const el = document.getElementById(id);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el);
    return;
  }

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
};
