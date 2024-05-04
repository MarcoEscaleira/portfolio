import { Button } from "@material-tailwind/react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="container h-full w-full lg:flex">
      <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:px-12 xl:px-32">
        <h1 className="text-2xl font-semibold capitalize text-sky-200 dark:text-white lg:text-3xl">contact me.</h1>

        <p className="mt-4 text-sky-100 dark:text-gray-400">
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
        <form>
          <div className="-mx-2 md:flex md:items-center">
            <div className="flex-1 px-2">
              <label className="mb-2 block text-sm text-gray-200">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 block w-full rounded-md border border-gray-200 bg-gray-100 px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>

            <div className="mt-4 flex-1 px-2 md:mt-0">
              <label className="mb-2 block text-sm text-gray-200">Email address</label>
              <input
                type="email"
                placeholder="name@gmail.com"
                className="mt-2 block w-full rounded-md border border-gray-200 bg-gray-100 px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>
          </div>

          <div className="mt-4 w-full">
            <label className="mb-2 block text-sm text-gray-200">Message</label>
            <textarea
              className="mt-2 block h-32 w-full rounded-md border border-gray-200 bg-gray-100 px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400 md:h-56"
              placeholder="Your message..."
            ></textarea>
          </div>

          <Button fullWidth color="blue" className="mt-4">
            Get in touch
          </Button>
        </form>
      </div>
    </section>
  );
}
