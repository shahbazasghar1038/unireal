import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollButton(window.scrollY > 1080);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  return (
    <>
      <AnimatePresence>
        {showScrollButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 100 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-[9999999] flex cursor-pointer"
          >
            <motion.img
              src="/arr.svg"
              className="floating"
              alt="Scroll to top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative flex w-full flex-col items-center justify-center pt-[100px]">
        <div className="relative flex w-full max-w-[100%] items-center justify-center overflow-hidden sm:overflow-visible">
          <img
            src="/footer-gb-img.png"
            alt=""
            className="pointer-events-none absolute left-0 z-[-1] h-auto w-full max-w-[99vw] scale-[2] md:scale-[1] lg:top-0 lg:h-[105%]"
          />
          <div className="w-full max-w-[1250px] px-5 2xl:max-w-[1452px] 2xl:px-0">
            <div className="flex w-full flex-col items-start justify-between gap-[50px] pb-[28px] pt-[37px] md:flex-row lg:gap-0 xl:h-[460px] 2xl:h-[550px]">
              {/* left  */}
              <div className="flex h-full flex-col items-start justify-between gap-[50px] md:gap-[230px] xl:gap-0">
                <img
                  src="/footer-logo.png"
                  className="w-full max-w-[145px] md:max-w-[186px]"
                  alt=""
                />
                <div className="flex items-center justify-center gap-2.5">
                  {/* linkedin  */}
                  <div className="div-bg-gradient aspect-square h-[41px] cursor-pointer rounded-full p-[3px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#13111A]">
                      <img
                        src="/linledin.svg"
                        alt=""
                        className="w-full max-w-[18px] translate-y-[-2px]"
                      />
                    </div>
                  </div>
                  {/* instagram  */}
                  <div className="div-bg-gradient aspect-square h-[41px] cursor-pointer rounded-full p-[3px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#13111A]">
                      <img
                        src="/insta.svg"
                        alt=""
                        className="w-full max-w-[18px]"
                      />
                    </div>
                  </div>
                  {/* x  */}
                  <div className="div-bg-gradient aspect-square h-[41px] cursor-pointer rounded-full p-[3px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#13111A]">
                      <img
                        src="/x.svg"
                        alt=""
                        className="w-full max-w-[16px]"
                      />
                    </div>
                  </div>
                  {/* tiktok  */}
                  <div className="div-bg-gradient aspect-square h-[41px] cursor-pointer rounded-full p-[3px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#13111A]">
                      <img
                        src="/tiktok.svg"
                        alt=""
                        className="w-full max-w-[14px]"
                      />
                    </div>
                  </div>
                  {/* yt  */}
                  <div className="div-bg-gradient aspect-square h-[41px] cursor-pointer rounded-full p-[3px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#13111A]">
                      <img
                        src="/yt.svg"
                        alt=""
                        className="w-full max-w-[19px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* right  */}
              <div className="flex h-full w-full flex-col items-start justify-between gap-[30px] md:w-auto xl:gap-0">
                <div className="ld:justify-center flex w-full items-start justify-between md:w-auto md:gap-[200px]">
                  <div className="flex-col">
                    <h2 className="text-[20px] font-[500] leading-[1] text-[#FFFFFF]/80">
                      Navigation
                    </h2>
                    <div className="div-bg-gradient my-[25px] h-[2px] w-[99px] xl:my-[30px]"></div>
                    <div className="flex flex-col items-start gap-[25px] text-[#FFFFFF]/80 xl:gap-[29px]">
                      <Link
                        to="/"
                        className="font-[300] leading-[1] transition-all hover:opacity-50"
                      >
                        Home
                      </Link>
                      <Link
                        to="/company"
                        className="font-[300] leading-[1] transition-all hover:opacity-50"
                      >
                        Company
                      </Link>
                      <Link
                        to="/services"
                        className="font-[300] leading-[1] transition-all hover:opacity-50"
                      >
                        Services
                      </Link>
                      <Link
                        to="/products"
                        className="font-[300] leading-[1] transition-all hover:opacity-50"
                      >
                        Products
                      </Link>
                      <Link
                        to="/career"
                        className="font-[300] leading-[1] transition-all hover:opacity-50"
                      >
                        Career
                      </Link>
                    </div>
                  </div>
                  <div className="flex-col">
                    <h2 className="text-[20px] font-[500] leading-[1] text-[#FFFFFF]/80">
                      Others
                    </h2>
                    <div className="div-bg-gradient my-[25px] h-[2px] w-[99px] xl:my-[30px]"></div>
                    <div className="flex flex-col items-start gap-[25px] text-[#FFFFFF]/80 xl:gap-[29px]">
                      <Link
                        to="/contact"
                        className="font-[300] leading-[1] transition-all hover:opacity-50"
                      >
                        Contact
                      </Link>
                      <Link
                        to="#"
                        className="font-[300] leading-[1] transition-all hover:opacity-50"
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1250px] px-5 2xl:max-w-[1452px] 2xl:px-0">
          <div className="flex h-[140px] w-full items-start justify-center border-t border-t-[#FFFFFF66] md:h-[220px] 2xl:h-[263px]">
            <p className="mt-2.5 text-center text-[15px] font-[500] text-[#FFFFFFCC]">
              &#9400; 2024 - Unireal. all rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
