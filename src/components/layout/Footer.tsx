import { FC } from "react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className={`bg-transparent`}>
      <div className="container mx-auto flex items-center justify-between p-4 sm:flex-row sm:p-6">
        <Link href="/">
          <Image src="/logo-white.svg" alt="logo-marco" height={60} width={60} className="text-black" />
        </Link>

        <div className="-mx-2 flex">
          <Link
            href="https://www.linkedin.com/in/marco-escaleira00/"
            target="_blank"
            className="mx-2 text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </Link>

          <Link
            href="https://github.com/MarcoEscaleira"
            target="_blank"
            className="mx-2 text-gray-200 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            aria-label="Github"
          >
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  );
};
