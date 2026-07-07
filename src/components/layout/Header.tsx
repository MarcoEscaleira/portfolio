import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/components/SmoothScroll";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const NAV_LINKS: [string, string][] = [
  ["Home", "home"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export const Header: FC = () => {
  return (
    <header className="flex w-full border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-2 pl-4 sm:flex-row sm:p-6">
        <section className="flex items-center">
          <Image
            src="/logo-white.svg"
            alt="logo-marco"
            height={60}
            width={60}
            loading="lazy"
            className="h-10 w-10 invert dark:invert-0 sm:h-[60px] sm:w-[60px]"
          />
          <nav className="ml-2 flex sm:ml-8 sm:gap-4 md:ml-12">
            {NAV_LINKS.map(([title, id]) => {
              return (
                <Link
                  key={id}
                  href={`/#${id}`}
                  className="px-1.5 py-2 text-sm font-medium text-fg hover:border-b hover:border-b-accent sm:px-3 sm:text-base"
                  onClick={e => {
                    // Off the home page (e.g. 404) the section doesn't exist —
                    // let Link navigate to /#id instead of smooth-scrolling.
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
