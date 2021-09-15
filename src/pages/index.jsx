import React from "react";
import Helmet from "react-helmet";

const Home = () => (
  <>
    <Helmet>
      <title>Marco Escaleira</title>
    </Helmet>

    <header className="w-full h-20 fixed top-0 left-0 bg-transparent flex justify-around items-center">
      <a href="#home" className="text-5xl flex-1 flex justify-center">
        ESCALEIRA
      </a>
      <nav className="flex flex-1 justify-center">
        <a href="#about-me" className="px-8">
          About Me
        </a>
        <a href="#portfolio" className="px-8">
          Portfolio
        </a>
        <a href="#contact" className="px-8">
          Contact
        </a>
      </nav>
    </header>

    <main className="min-h-full flex justify-center items-center bg-blue-100">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-blue-800">Marco Escaleira - FE Developer</h1>
        <span className="text-lg text-blue-400 font-light">Work in progress...</span>
      </div>
    </main>
  </>
);

export default Home;
