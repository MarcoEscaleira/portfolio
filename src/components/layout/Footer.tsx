import { FC } from "react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex items-center justify-between p-4 sm:flex-row sm:p-6">
        <Link href="/" aria-label="Marco Escaleira — home">
          <Image
            src="/logo-white.svg"
            alt=""
            height={60}
            width={60}
            className="h-[60px] w-[60px] invert dark:invert-0"
          />
        </Link>

        <div className="flex gap-2xs">
          <Link
            href="https://www.linkedin.com/in/marco-escaleira00/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-fg-muted transition-colors duration-300 hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </Link>

          <Link
            href="https://github.com/MarcoEscaleira"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 text-fg-muted transition-colors duration-300 hover:text-accent"
            aria-label="GitHub"
          >
            <Github />
          </Link>
        </div>
      </div>

      <p className="pb-4 text-center font-mono text-xs text-fg-muted sm:pb-6">Built with care in London · Next.js</p>
    </footer>
  );
};
