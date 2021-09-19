import React from "react";

const Header = () => (
  <header className="w-full h-20 fixed top-0 left-0 bg-transparent flex justify-around items-center">
    <a href="#home" className="text-5xl flex-1 flex justify-center">
      ESCALEIRA QA
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
);

export default Header;
