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
            className="invert dark:invert-0"
          />
          <nav className="ml-8 flex gap-4 md:ml-12">
            {NAV_LINKS.map(([title, id]) => {
              return (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="px-3 py-2 font-medium text-fg hover:border-b hover:border-b-accent"
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(id);
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
