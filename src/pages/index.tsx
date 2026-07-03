import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col">
      <section
        id="home"
        className="flex h-full flex-col items-center pt-8 sm:h-[calc(100vh-92px)] sm:justify-center sm:pt-0 md:flex-row"
      >
        <Image src="/marco.jpg" alt="Marco's face" width={200} height={200} className="rounded-[100%] shadow" />
        <div className="p-4 md:ml-10 md:p-0">
          <h1 className="mb-2 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">Hello there!</h1>
          <p className="mb-6 text-lg text-fg-muted">You landed in the right place!</p>
          <p className="mb-8 max-w-[580px] text-fg-muted">
            I am passionate about working in an industry that I deeply appreciate and that drives me daily. With over
            five years of experience, I am constantly motivated by the pursuit of technological and personal growth. My
            enthusiasm for teamwork and my proactive communication style enhance our collective success.
          </p>

          <div className="hidden justify-center md:flex">
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
      </section>

      <section id="contact" className="h-[calc(100vh-92px)] w-full lg:flex">
        <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:px-12 xl:px-32">
          <h2 className="font-display text-2xl font-semibold capitalize lg:text-3xl">contact me.</h2>

          <p className="mt-4 text-fg-muted">
            Feel free to reach out with any questions or thoughts. I&apos;m all ears and eager to connect!
          </p>

          <div className="mt-6 flex items-center gap-1 md:mt-8">
            <h3 className="font-medium text-fg">Follow me on</h3>

            <div className="flex">
              <Link
                className="mx-1.5 text-fg-muted transition-colors duration-300 hover:text-accent"
                href="https://www.linkedin.com/in/marco-escaleira00/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24">
          <button
            type="button"
            className="mt-4 w-full rounded-md bg-accent px-4 py-2 font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
}
