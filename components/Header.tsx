import { FC } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { NextFont } from "@next/font/dist/types";
import { useRouter } from "next/router";
import Link from "next/link";

interface IHeaderProps {
  font: NextFont;
}

const Header: FC<IHeaderProps> = ({ font }) => {
  const router = useRouter();

  return (
    <header className={font.className}>
      <div className="w-full h-16 flex items-center px-4 bg-amber-400">
        <HomeIcon className="w-8 accent-blue-500" />
        <nav className="flex gap-4 ml-4">
          {[
            ["Home", "/"],
            ["Portfolio", "/portfolio"],
            ["About", "/about"],
          ].map(([title, path]) => {
            const isActiveClass = router.pathname === path ? "bg-slate-100" : "";
            return (
              <Link
                key={path}
                href={path}
                className={`rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 ${isActiveClass}`}
              >
                {title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
