import Head from "next/head";
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
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header font={font} />

      <main className={font.className}>{children}</main>

      <footer className={font.className}>
        <p>Powered by Marco Escaleira</p>
      </footer>
    </>
  );
}
