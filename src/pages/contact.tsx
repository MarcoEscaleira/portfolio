import { Button } from "@material-tailwind/react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="container h-full w-full lg:flex">
      <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:px-12 xl:px-32">
        <h1 className="text-sky-200 text-2xl font-semibold capitalize dark:text-white lg:text-3xl">contact me.</h1>

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
  );
}
