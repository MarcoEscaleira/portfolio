import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ThemeSwitcher } from "src/components/ThemeSwitcher";

export const Header: FC = () => {
  const router = useRouter();

  return (
    <header className={`h-16 w-full`}>
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 p-6 sm:flex-row sm:space-y-0">
        <section className="flex items-center">
          <Image src="/logo-white.svg" alt="logo-marco" height={60} width={60} loading="lazy" />
          {/*<nav className="ml-8 flex gap-4">*/}
          {/*  {[*/}
          {/*    ["Home", "/"],*/}
          {/*    ["Portfolio", "/portfolio"],*/}
          {/*    ["Contact", "/contact"],*/}
          {/*  ].map(([title, path]) => {*/}
          {/*    const isActiveClass = router.pathname === path ? "border-b border-b-white text-slate-200" : "";*/}
          {/*    return (*/}
          {/*      <Link*/}
          {/*        key={path}*/}
          {/*        href={path}*/}
          {/*        className={`hover:text-slate-200 px-3 py-2 font-medium hover:border-b hover:border-b-white ${isActiveClass}`}*/}
          {/*      >*/}
          {/*        {title}*/}
          {/*      </Link>*/}
          {/*    );*/}
          {/*  })}*/}
          {/*</nav>*/}
        </section>
        <section>
          <ThemeSwitcher />
        </section>
      </div>
    </header>
  );
};
