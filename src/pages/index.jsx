import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";

const Home = () => (
  <>
    <Helmet>
      <title>Home - Marco Escaleira</title>
    </Helmet>

    <Header />

    <main className="min-h-full flex justify-center items-center bg-blue-100 mb-48">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-blue-800">Marco Escaleira - FE Developer</h1>
        <span className="text-lg text-blue-400 font-light">Work in progress...</span>
      </div>
    </main>
  </>
);

export default Home;
