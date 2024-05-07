import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Header, Footer } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Escaleira&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex h-screen w-full flex-col bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 text-gray-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white">
          <Header />

          <main className={`${inter.className} flex flex-1 justify-center`}>{children}</main>

          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};
