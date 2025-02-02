import { useScroll, useTransform, motion } from "framer-motion";

const ScrollingText = () => {
  const { scrollYProgress } = useScroll({ layoutEffect: false }); // Get scroll position
  const width = useTransform(scrollYProgress, [0, 0.12], ["100%", "5%"]);
  const top = useTransform(scrollYProgress, [0, 0.12], ["280px", "20px"]);
  const top2 = useTransform(scrollYProgress, [0, 0.12], ["200px", "20px"]);
  const translateX = useTransform(scrollYProgress, [0, 0.12], ["0vw", "7.9vw"]);
  const translateX2 = useTransform(scrollYProgress, [0, 0.12], ["0vw", "18vw"]);
  return (
    <>
      <motion.div
        style={{ width, top, x: translateX }}
        className="fixed top-[280px] z-[9999] hidden w-full min-w-[80px] max-w-[99vw] sm:flex"
      >
        <img src="/unireal.png" className="mx-auto w-full max-w-[90%]" alt="" />
      </motion.div>
      <motion.div
        style={{ width, top: top2, x: translateX2 }}
        className="fixed top-[280px] z-[9999] w-full min-w-[80px] max-w-[99vw] sm:hidden"
      >
        <img src="/unireal.png" className="mx-auto w-full max-w-[90%]" alt="" />
      </motion.div>
    </>
  );
};

export default ScrollingText;
