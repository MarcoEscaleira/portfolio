import { FC } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { NextFont } from "@next/font/dist/types";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

interface IHeaderProps {
  font: NextFont;
}

const Header: FC<IHeaderProps> = ({ font }) => {
  const router = useRouter();

  return (
    <header className={font.className}>
      <div className="w-full h-16 flex items-center justify-between px-4">
        <section className='flex items-center'>
          <HomeIcon className="w-8 accent-blue-500" />
          <nav className="flex gap-4 ml-4">
            {[
              ["Home", "/"],
              ["Portfolio", "/portfolio"],
              ["Contact", "/contact"],
            ].map(([title, path]) => {
              const isActiveClass = router.pathname === path ? "bg-white text-slate-900" : "";
              return (
                <Link
                  key={path}
                  href={path}
                  className={`rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 ${isActiveClass}`}
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

export default Header;
