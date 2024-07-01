import { Button, Typography } from "@material-tailwind/react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col">
      <section
        id="landing"
        className="flex h-full flex-col items-center pt-8 sm:h-[calc(100vh-92px)] sm:justify-center sm:pt-0 md:flex-row"
      >
        <Image src="/marco.jpg" alt="Marco's face" width={200} height={200} className="rounded-[100%] shadow" />
        <div className="p-4 md:ml-10 md:p-0">
          <Typography variant="h1" className="mb-2">
            Hi, I&apos;m Marco Escaleira.
          </Typography>
          <Typography variant="lead" className="mb-6">
            You landed in the right place!
          </Typography>
          <Typography variant="paragraph" className="mb-8 max-w-[580px]">
            I am passionate about working in an industry that I deeply appreciate and that drives me daily. With over
            five years of experience, I am constantly motivated by the pursuit of technological and personal growth. My
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
      </section>

      <section id="contact" className="h-[calc(100vh-92px)] w-full lg:flex">
        <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:px-12 xl:px-32">
          <Typography
            variant="h2"
            className="text-sky-200 text-2xl font-semibold capitalize dark:text-white lg:text-3xl"
          >
            contact me.
          </Typography>

          <p className="text-sky-100 mt-4 dark:text-gray-400">
            Feel free to reach out with any questions or thoughts. I&apos;m all ears and eager to connect!
          </p>

          <div className="mt-6 flex items-center gap-1 md:mt-8">
            <h3 className="font-medium text-gray-100 dark:text-gray-300">Follow me on</h3>

            <div className="flex">
              <Link
                className="mx-1.5 transform text-blue-200 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
                href="https://www.linkedin.com/in/marco-escaleira00/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
          <Button fullWidth color="blue" className="mt-4">
            Get in touch
          </Button>
        </div>
      </section>
    </div>
  );
}
