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

// import { useEffect, useState } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";

// const ScrollingText = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const { scrollYProgress } = useScroll({ layoutEffect: false });

//   const width = useTransform(
//     scrollYProgress,
//     [0, 0.12],
//     isMobile ? ["100%", "5%"] : ["100%", "5%"]
//   );
//   const top = useTransform(
//     scrollYProgress,
//     [0, 0.12],
//     isMobile ? ["200px", "20px"] : ["280px", "20px"]
//   );
//   const translateX = useTransform(
//     scrollYProgress,
//     [0, 0.12],
//     isMobile ? ["0vw", "18vw"] : ["0vw", "7.9vw"]
//   );

//   return (
//     <>
//       <motion.div
//         style={{
//           width,
//           top,
//           x: translateX,
//           willChange: "transform, width, top",
//         }}
//         className={`fixed top-[280px] z-[9999] w-full min-w-[80px] max-w-[99vw] ${
//           isMobile ? "sm:hidden" : "hidden sm:flex"
//         }`}
//       >
//         <img src="/unireal.png" className="mx-auto w-full max-w-[90%]" alt="" />
//       </motion.div>
//     </>
//   );
// };

// export default ScrollingText;

// import { useScroll, useTransform, motion } from "framer-motion";

// const ScrollingText = () => {
//   const { scrollYProgress } = useScroll({ layoutEffect: false });
//   const width = useTransform(scrollYProgress, [0, 0.12], ["100%", "5%"]);
//   const top = useTransform(scrollYProgress, [0, 0.12], ["280px", "20px"]);
//   const top2 = useTransform(scrollYProgress, [0, 0.12], ["200px", "20px"]);
//   const translateX = useTransform(scrollYProgress, [0, 0.12], ["0vw", "7.9vw"]);
//   const translateX2 = useTransform(scrollYProgress, [0, 0.12], ["0vw", "18vw"]);
//   return (
//     <>
//       <motion.div
//         style={{ width, top, x: translateX }}
//         className="fixed top-[280px] z-[9999] hidden w-full min-w-[80px] max-w-[99vw] bg-red-500 sm:flex"
//       >
//         <img src="/unireal.png" className="mx-auto w-full max-w-[90%]" alt="" />
//       </motion.div>
//       <motion.div
//         style={{ width, top: top2, x: translateX2 }}
//         className="fixed top-[280px] z-[9999] w-full min-w-[80px] max-w-[99vw] sm:hidden"
//       >
//         <img src="/unireal.png" className="mx-auto w-full max-w-[90%]" alt="" />
//       </motion.div>
//     </>
//   );
// };

// export default ScrollingText;
