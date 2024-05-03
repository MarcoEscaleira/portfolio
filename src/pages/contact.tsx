import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full h-full lg:flex">
      <div className="flex flex-col justify-center w-full p-8 lg:px-12 xl:px-32 lg:w-1/2">
        <h1 className="text-2xl font-semibold text-sky-200 capitalize dark:text-white lg:text-3xl">contact me.</h1>

        <p className="mt-4 text-sky-100 dark:text-gray-400">Ask me everything and I would love to hear from you</p>

        <div className="mt-6 md:mt-8">
          <h3 className="font-medium text-gray-100 dark:text-gray-300">Follow me</h3>

          <div className="flex mt-4 -mx-1.5">
            <Link
              className="mx-1.5 dark:hover:text-blue-400 text-blue-200 transition-colors duration-300 transform hover:text-blue-500"
              href="https://www.linkedin.com/in/marco-escaleira00/"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
        <form>
          <div className="-mx-2 md:items-center md:flex">
            <div className="flex-1 px-2">
              <label className="block mb-2 text-sm text-gray-200">Full Name</label>
              <input
                type="text"
                placeholder="Marco Escaleira"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 px-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm text-gray-200">Email address</label>
              <input
                type="email"
                placeholder="marco@gmail.com"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm text-gray-200">Message</label>
            <textarea
              className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            get in touch
          </button>
        </form>
      </div>
    </section>
  );
}
