import { FC } from "react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex items-center justify-between p-4 sm:flex-row sm:p-6">
        <Link href="/">
          <Image src="/logo-white.svg" alt="logo-marco" height={60} width={60} className="invert dark:invert-0" />
        </Link>

        <div className="-mx-2 flex">
          <Link
            href="https://www.linkedin.com/in/marco-escaleira00/"
            target="_blank"
            className="mx-2 text-fg-muted transition-colors duration-300 hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </Link>

          <Link
            href="https://github.com/MarcoEscaleira"
            target="_blank"
            className="mx-2 text-fg-muted transition-colors duration-300 hover:text-accent"
            aria-label="Github"
          >
            <Github />
          </Link>
        </div>
      </div>

      <p className="pb-4 text-center font-mono text-xs text-fg-muted sm:pb-6">Built with Next.js</p>
    </footer>
  );
};
