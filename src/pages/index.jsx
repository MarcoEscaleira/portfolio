import React from "react";
import Helmet from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import tw, { css } from "twin.macro";
import WavesSvg from "../assets/waves.svg";
import Layout from "../components/Layout";
import SocialList from "../components/SocialList";

const Home = () => (
  <Layout>
    <Helmet>
      <title>Escaleira - Mini Developer</title>
    </Helmet>

    <WavesSvg className="h-screen w-screen absolute top-0 left-0 z-0" />

    <section className="h-screen flex flex-col items-center justify-center z-10">
      <div className="flex items-center max-w-2xl flex-col md:flex-row">
        <div className="relative">
          <StaticImage
            src="https://res.cloudinary.com/dtmrbsbm6/image/upload/v1632345003/selfie1_fdffew.jpg"
            alt="Marco Escaleira"
            css={[
              tw`w-full rounded-full shadow-xl mb-4 sm:mb-10 md:mb-0 md:mr-6`,
              css`
                max-width: 200px;
                max-height: 200px;
                @media (min-width: 768px) {
                  min-width: 200px;
                  min-height: 200px;
                }
              `,
            ]}
          />
          <SocialList />
        </div>
        <div className="flex flex-col px-4 md:px-0">
          <h2 className="text-3xl text-gray-800 flex flex-col sm:block">
            Hi 👋, <span>I am Marco Escaleira!</span>
          </h2>
          <span className="text-sm font-light">
            More known as &quot;<b>Mini Marco</b>&quot;
          </span>
          <p className="text-base mt-4">
            I love the web, javascript, and learn new things! Challenges and
            hard problems? Great, they will bring a lot of learning and teamwork
            and in the end will fulfill with more solutions and one less problem
            :)
          </p>
          <SocialList isMobile />
        </div>
      </div>
    </section>
    <section
      id="portfolio"
      className="hidden h-96 bg-gray-200 flex flex-col justify-center items-center"
    >
      <h2>Portfolio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab animi
        atque commodi dicta dignissimos dolor error eveniet magnam, maxime minus
        nostrum odio quasi qui, quia quidem repellat repudiandae veritatis.
      </p>
    </section>
    <section
      id="contact"
      className="hidden h-96 bg-gray-400 flex flex-col justify-center items-center"
    >
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab animi
        atque commodi dicta dignissimos dolor error eveniet magnam, maxime minus
        nostrum odio quasi qui, quia quidem repellat repudiandae veritatis.
      </p>
    </section>
  </Layout>
);

export default Home;
