import { FC } from "react";
import { NextFont } from "@next/font/dist/types";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

interface IHeaderProps {
  font: NextFont;
}

export const Header: FC<IHeaderProps> = ({ font }) => {
  const router = useRouter();

  return (
    <header className={`${font.className} w-full h-16`}>
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <section className="flex items-center">
          <Image src="/logo-white.svg" alt="logo-marco" height={60} width={60} />
          <nav className="flex gap-4 ml-8">
            {[
              ["Home", "/"],
              ["Portfolio", "/portfolio"],
              ["Contact", "/contact"],
            ].map(([title, path]) => {
              const isActiveClass = router.pathname === path ? "border-b border-b-white text-slate-200" : "";
              return (
                <Link
                  key={path}
                  href={path}
                  className={`px-3 py-2 font-medium hover:border-b hover:border-b-white hover:text-slate-200 ${isActiveClass}`}
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
