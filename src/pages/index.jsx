import React from "react";
import Helmet from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import tw, { css } from "twin.macro";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <Helmet>
      <title>Escaleira - Mini Developer</title>
    </Helmet>

    <section className="h-screen flex flex-col items-center justify-center">
      <div className="flex items-center max-w-2xl flex-col md:flex-row">
        <StaticImage
          src="https://res.cloudinary.com/dtmrbsbm6/image/upload/v1632345003/selfie1_fdffew.jpg"
          alt="Marco Escaleira"
          css={[
            tw`w-full rounded-full shadow-xl mb-10 md:mb-0 md:mr-6`,
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
        <div className="flex flex-col px-4 md:px-0">
          <h2 className="text-3xl text-gray-800 mb-4">
            Hi 👋, I am Marco Escaleira!
          </h2>
          <p className="text-base">
            I love the web, I love javascript, I love to learn! Challenges and
            hard problems? Great, they will bring a lot of learning and teamwork
            and in the end will fulfil with more solutions and one less problem
            :)
          </p>
        </div>
      </div>
    </section>

    <section
      id="about-me"
      className="hidden h-96 bg-gray-300 flex flex-col justify-center items-center"
    >
      <h2 className="text-center">About me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab animi
        atque commodi dicta dignissimos dolor error eveniet magnam, maxime minus
        nostrum odio quasi qui, quia quidem repellat repudiandae veritatis.
      </p>
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
