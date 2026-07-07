import { PropsWithChildren, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { CommandPalette } from "@/components/CommandPalette";
import { EasterEggs } from "@/components/EasterEggs";
import { Header, Footer } from "@/components/layout";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

const FONT_VARIABLES = `${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`;

export const Layout = ({ children }: PropsWithChildren) => {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    // Radix (used by cmdk's Command.Dialog) portals into document.body,
    // outside the font-variable scope below, so font-mono/font-sans/font-display
    // would silently fail inside the palette without this.
    const classes = FONT_VARIABLES.split(" ").filter(Boolean);
    document.body.classList.add(...classes);
    return () => {
      document.body.classList.remove(...classes);
    };
  }, []);

  useEffect(() => {
    const openPalette = () => setPaletteOpen(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setPaletteOpen(current => !current);
      }
    };

    window.addEventListener("open-command-palette", openPalette);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-command-palette", openPalette);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
        <div className={`${FONT_VARIABLES} flex h-full min-h-screen w-full flex-col bg-bg text-fg`}>
          <Header />

          <main className="flex flex-1 justify-center font-sans">{children}</main>

          <Footer />
        </div>

        <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
        <EasterEggs />
        <SmoothScroll />
      </ThemeProvider>

      <Analytics />
    </>
  );
};
