import { useEffect } from "react";
import Lenis from "lenis";

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

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    const stop = () => {
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = undefined;
      rafId = undefined;
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
