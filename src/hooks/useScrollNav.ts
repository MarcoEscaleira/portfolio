import { useEffect, useState } from "react";
import { subscribeToScroll } from "@/components/SmoothScroll";
import { SECTIONS, type SectionId } from "@/data/sections";

/** Sticky header height — keep in sync with scroll-padding / compact header. */
const HEADER_PX = 80;

const visibleRatio = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  return rect.height > 0 ? Math.max(0, visible) / rect.height : 0;
};

export const useScrollNav = (enabled = true) => {
  const [pastHero, setPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    if (!enabled) {
      setPastHero(false);
      setActiveSection("home");
      return;
    }

    const update = () => {
      const hero = document.getElementById("home");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const ratio = rect.height > 0 ? Math.max(0, visibleHeight) / rect.height : 0;
        setPastHero(ratio < 0.35);
      }

      // Activation line ~25% down the viewport (never above the sticky header).
      // Last section whose top has crossed that line is active — so at scrollY≈0
      // only Home has crossed; About peeking at the bottom does not steal focus.
      const activationLine = Math.max(HEADER_PX + 16, window.innerHeight * 0.25);

      let current: SectionId = "home";
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= activationLine) {
          current = id;
        }
      }

      // Tail section: top may stay below activation line when user reaches page end.
      const last = SECTIONS[SECTIONS.length - 1];
      const lastEl = document.getElementById(last.id);
      if (lastEl && current !== last.id) {
        const lastRatio = visibleRatio(lastEl);
        const currentEl = document.getElementById(current);
        const currentRatio = currentEl ? visibleRatio(currentEl) : 0;

        if (lastRatio >= 0.35 && lastRatio > currentRatio) {
          current = last.id;
        }
      }

      setActiveSection(current);
    };

    update();
    const unsubscribe = subscribeToScroll(update);
    window.addEventListener("resize", update);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", update);
    };
  }, [enabled]);

  return { pastHero, activeSection };
};
