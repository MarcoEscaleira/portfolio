import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/components/SmoothScroll";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const NAV_LINKS: [string, string][] = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/85 font-sans backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-2 pl-4 sm:flex-row sm:p-6">
        <section className="flex items-center">
          <Link href="/#home" aria-label="Marco Escaleira — home" className="shrink-0">
            <Image
              src="/logo-white.svg"
              alt=""
              height={60}
              width={60}
              loading="lazy"
              className="h-10 w-10 invert dark:invert-0 sm:h-[60px] sm:w-[60px]"
            />
          </Link>
          <nav aria-label="Primary" className="ml-2 flex sm:ml-8 sm:gap-1 md:ml-12">
            {NAV_LINKS.map(([title, id]) => {
              return (
                <Link
                  key={id}
                  href={`/#${id}`}
                  className={`px-1.5 py-2 text-sm font-medium text-fg transition-colors hover:text-accent sm:px-3 sm:text-base ${
                    id === "home" ? "hidden sm:inline" : ""
                  }`}
                  onClick={e => {
                    if (document.getElementById(id)) {
                      e.preventDefault();
                      scrollToSection(id);
                    }
                  }}
                >
                  {title}
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
