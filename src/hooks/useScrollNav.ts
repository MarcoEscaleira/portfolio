import { useEffect, useState } from "react";
import { subscribeToScroll } from "@/components/SmoothScroll";
import { SECTIONS, type SectionId } from "@/data/sections";

/** Sticky header height — keep in sync with scroll-padding / compact header. */
const HEADER_PX = 80;

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
