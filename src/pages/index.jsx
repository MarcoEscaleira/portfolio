import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

const Home = () => (
  <Layout>
    <Helmet>
      <title>Escaleira - Mini Developer</title>
    </Helmet>

    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-blue-800">Hi, I am Marco Escaleira!</h1>
    </section>

    <section
      id="about-me"
      className="h-96 bg-gray-300 flex flex-col justify-center items-center"
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
      className="h-96 bg-gray-200 flex flex-col justify-center items-center"
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
      className="h-96 bg-gray-400 flex flex-col justify-center items-center"
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
