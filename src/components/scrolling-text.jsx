import { useScroll, useTransform, motion } from "framer-motion";

const ScrollingText = () => {
  const { scrollYProgress } = useScroll(); // Get scroll position
  const width = useTransform(scrollYProgress, [0, 0.1], ["100%", "5%"]);
  const top = useTransform(scrollYProgress, [0, 0.1], ["280px", "20px"]);
  const top2 = useTransform(scrollYProgress, [0, 0.1], ["200px", "20px"]);
  const translateX = useTransform(scrollYProgress, [0, 0.1], ["0vw", "5.3vw"]);
  return (
    <>
      <motion.div
        style={{ width, top, x: translateX }}
        className="fixed top-[280px] z-[9999] hidden w-full min-w-[150px] max-w-[99vw] sm:flex"
      >
        <img src="/unireal.png" className="mx-auto w-full max-w-[90%]" alt="" />
      </motion.div>
      <motion.div
        style={{ width, top: top2, x: translateX }}
        className="fixed top-[280px] z-[9999] w-full min-w-[150px] max-w-[99vw] sm:hidden"
      >
        <img src="/unireal.png" className="mx-auto w-full max-w-[90%]" alt="" />
      </motion.div>
    </>
  );
};

export default ScrollingText;
