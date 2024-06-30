import { Typography } from "@material-tailwind/react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center md:flex-row">
      <Image src="/marco.jpg" alt="Marco's face" width={250} height={250} className="rounded-[50%] shadow" />
      <div className="p-4 md:ml-10 md:p-0">
        <Typography variant="h1" className="mb-2">
          Hi, I&apos;m Marco Escaleira.
        </Typography>
        <Typography variant="lead" className="mb-6">
          You landed in the right place!
        </Typography>
        <Typography variant="paragraph" className="mb-8 max-w-[580px]">
          I am passionate about working in an industry that I deeply appreciate and that drives me daily. With over five
          years of experience, I am constantly motivated by the pursuit of technological and personal growth. My
          enthusiasm for teamwork and my proactive communication style enhance our collective success.
        </Typography>

        <div className="hidden justify-center md:flex">
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
    </div>
  );
}
