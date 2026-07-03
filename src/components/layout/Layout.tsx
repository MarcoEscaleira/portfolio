import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Header, Footer } from "@/components/layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Marco Escaleira</title>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div
          className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} flex h-full min-h-screen w-full flex-col bg-bg text-fg`}
        >
          <Header />

          <main className="flex flex-1 justify-center font-sans">{children}</main>

          <Footer />
        </div>
      </ThemeProvider>

      <Analytics />
    </>
  );
};
