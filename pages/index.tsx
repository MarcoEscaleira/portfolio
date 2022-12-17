import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-red-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
