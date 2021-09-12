import { useEffect, useRef } from "react";
import "normalize.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const progressBarRef = useRef(null);
  const scrollPathRef = useRef(null);

  useEffect(() => {
    if (progressBarRef.current && scrollPathRef.current) {
      const progress = progressBarRef.current;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      window.onscroll = () => {
        const progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = `${progressHeight}%`;
      };
    }
  }, [progressBarRef, scrollPathRef]);

  return (
    <>
      <div id="progressbar" ref={progressBarRef} />
      <div id="scrollPath" ref={scrollPathRef} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
