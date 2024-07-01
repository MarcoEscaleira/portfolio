import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "src/components/ThemeSwitcher";

export const Header: FC = () => {
  return (
    <header className="flex w-full">
      <div className="container mx-auto flex items-center justify-between py-2 pl-4 sm:flex-row sm:p-6">
        <section className="flex items-center">
          <Image src="/logo-white.svg" alt="logo-marco" height={60} width={60} loading="lazy" />
          <nav className="ml-8 flex gap-4 md:ml-12">
            {[
              ["Home", "landing"],
              ["Contact", "contact"],
            ].map(([title, path]) => {
              return (
                <Link
                  key={path}
                  href={`#${path}`}
                  className="hover:text-slate-200 px-3 py-2 font-medium hover:border-b hover:border-b-white"
                  onClick={e => {
                    e.preventDefault();
                    // @ts-ignore
                    window?.document?.getElementById(path).scrollIntoView({ behavior: "smooth" });
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
