import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="h-full w-full lg:flex">
      <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:px-12 xl:px-32">
        <h1 className="text-2xl font-semibold capitalize text-sky-200 dark:text-white lg:text-3xl">contact me.</h1>

        <p className="mt-4 text-sky-100 dark:text-gray-400">Ask me everything and I would love to hear from you</p>

        <div className="mt-6 md:mt-8">
          <h3 className="font-medium text-gray-100 dark:text-gray-300">Follow me</h3>

          <div className="-mx-1.5 mt-4 flex">
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
                placeholder="Marco Escaleira"
                className="mt-2 block w-full rounded-md border border-gray-200 bg-gray-100 px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
              />
            </div>

            <div className="mt-4 flex-1 px-2 md:mt-0">
              <label className="mb-2 block text-sm text-gray-200">Email address</label>
              <input
                type="email"
                placeholder="marco@gmail.com"
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

          <button className="mt-4 w-full transform rounded-md bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            get in touch
          </button>
        </form>
      </div>
    </section>
  );
}
