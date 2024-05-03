import { FC } from "react";
import { NextFont } from "next/dist/compiled/@next/font";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Header, Footer } from "@/components/layout";

type LayoutProps = {
  children: React.ReactNode;
  font: NextFont;
};

export const Layout: FC<LayoutProps> = ({ children, font }) => {
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
          <Header font={font} />

          <main className={`${font.className} flex-1 flex justify-center`}>{children}</main>

          <Footer font={font} />
        </div>
      </ThemeProvider>
    </>
  );
};
