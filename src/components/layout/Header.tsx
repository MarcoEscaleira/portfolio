import { FC } from "react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/components/SmoothScroll";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SECTIONS, type SectionId } from "@/data/sections";

type Props = {
  pastHero?: boolean;
  activeSection?: SectionId;
};

export const Header: FC<Props> = ({ pastHero = false, activeSection }) => {
  const shouldReduceMotion = useReducedMotion();
  const transitionClass = shouldReduceMotion ? "" : "transition-[padding] duration-300 ease-out";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/85 font-sans backdrop-blur-md">
      <div
        className={`container mx-auto flex items-center justify-between pl-4 sm:flex-row ${transitionClass} ${
          pastHero ? "py-2 sm:px-6 sm:py-3" : "py-2 sm:p-6"
        }`}
      >
        <section className="flex items-center">
          <Link
            href="/#home"
            aria-label="Marco Escaleira — home"
            className="shrink-0"
            onClick={e => {
              if (document.getElementById("home")) {
                e.preventDefault();
                scrollToSection("home");
              }
            }}
          >
            <Image
              src="/logo-white.svg"
              alt=""
              height={60}
              width={60}
              loading="lazy"
              className={`invert dark:invert-0 ${
                shouldReduceMotion ? "" : "transition-[width,height] duration-300 ease-out"
              } ${pastHero ? "h-8 w-8 sm:h-10 sm:w-10" : "h-10 w-10 sm:h-[60px] sm:w-[60px]"}`}
            />
          </Link>
          <nav aria-label="Primary" className="ml-2 flex sm:ml-8 sm:gap-1 md:ml-12">
            {SECTIONS.map(({ id, label }) => {
              const isActive = activeSection === id;

              return (
                <Link
                  key={id}
                  href={`/#${id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-1.5 py-2 text-sm font-medium transition-colors hover:text-accent sm:px-3 sm:text-base ${
                    id === "home" ? "hidden sm:inline" : ""
                  } ${isActive ? "text-accent" : "text-fg"}`}
                  onClick={e => {
                    if (document.getElementById(id)) {
                      e.preventDefault();
                      scrollToSection(id);
                    }
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </section>
        <section>
          <ThemeSwitcher />
        </section>
      </div>
    </header>
  );
};
