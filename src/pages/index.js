import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marco Escaleira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Marco Escaleira - Front End Developer</h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: "#ff6d6d" }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <p>To be continued</p>
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
}
