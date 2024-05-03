import "@/styles/global.css";
import "normalize.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Layout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout font={inter}>
      <Component {...pageProps} />
    </Layout>
  );
}
