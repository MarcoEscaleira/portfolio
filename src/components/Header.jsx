import React, { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import "../styles/animations.css";

const Header = () => {
  const headerRef = useRef(null);
  const [hasDefinedListener, setHasDefinedListener] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (headerRef && headerRef.current && !hasDefinedListener) {
      const navTop = headerRef.current.offsetTop + 50;

      const checkHeaderScroll = () => {
        if (window.scrollY > navTop) {
          setIsCollapsed(true);
        } else {
          setIsCollapsed(false);
        }
      };

      window.addEventListener("scroll", checkHeaderScroll);

      setHasDefinedListener(true);
    }
  }, [headerRef, hasDefinedListener]);

  return (
    <header
      ref={headerRef}
      css={[
        tw`transition-all w-full h-20 fixed top-0 left-0 bg-transparent flex justify-around items-center z-50`,
        isCollapsed && tw`h-14`,
      ]}
    >
      <div className="flex-1 flex justify-center">
        <a
          href="#home"
          css={[
            tw`transition-all text-5xl font-light border-l border-gray-700 pl-2`,
            isCollapsed && tw`text-3xl`,
          ]}
        >
          <h1 className="focus-in-expand">
            ESCALEIRA.
            <b>DEV</b>
          </h1>
        </a>
      </div>
      <nav className="hidden flex flex-1 justify-center">
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
};

export default Header;
