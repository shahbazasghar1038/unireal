import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;

    gsap.fromTo(
      imgRef.current,
      {
        width: "100%",
        top: isMobile ? "200px" : "280px",
        x: "0vw",
      },
      {
        width: "5%",
        top: "20px",
        x: isMobile ? "18vw" : "7.9vw",
        scrollTrigger: {
          trigger: document?.documentElement,
          start: "top top",
          end: "10% top",
          scrub: 0.6,
        },
      }
    );
  }, [isMobile]);

  return (
    <div
      ref={imgRef}
      className={`fixed top-[280px] z-[9999] w-full min-w-[80px] max-w-[99vw] ${
        isMobile ? "sm:hidden" : "hidden sm:flex"
      }`}
    >
      <img src="/unireal.png" className="mx-auto w-full max-w-[90%]" alt="" />
    </div>
  );
};

export default ScrollingText;
