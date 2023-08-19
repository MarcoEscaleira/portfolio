import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { NextFont } from "@next/font/dist/types";
import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
  font: NextFont;
};

export default function Layout({ children, font }: LayoutProps) {
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
        <div className="w-full h-screen bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-100 dark:text-white">
          <Header font={font} />

          <main className={font.className}>{children}</main>

          <footer className={font.className}>
            <p>Powered by Marco Escaleira</p>
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
}
