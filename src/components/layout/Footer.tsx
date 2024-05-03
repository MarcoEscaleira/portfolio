import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { NextFont } from "next/dist/compiled/@next/font";
import { Github, Linkedin } from "lucide-react";

interface IFooterProps {
  font: NextFont;
}

export const Footer: FC<IFooterProps> = ({ font }) => {
  return (
    <footer className={`${font.className} bg-transparent dark:bg-gray-900`}>
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Link href="/">
          <Image src="/logo-white.svg" alt="logo-marco" height={60} width={60} className="text-black" />
        </Link>

        <p className="text-sm text-gray-100 dark:text-gray-300">© Copyright 2023. All Rights Reserved.</p>

        <div className="flex -mx-2">
          <Link
            href="https://www.linkedin.com/in/marco-escaleira00/"
            target="_blank"
            className="mx-2 text-gray-200 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </Link>

          <Link
            href="https://github.com/MarcoEscaleira"
            target="_blank"
            className="mx-2 text-gray-200 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Github"
          >
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  );
};
