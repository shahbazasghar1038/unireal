import { useScroll, motion, useTransform } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.2, 1],
    ["0", "0", "1", "1", "1"]
  );

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 z-[9999999] flex h-[100dvh] w-[300px] items-center justify-center duration-500 bg-black transition-all ${
          open ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div
          className="fixed right-6 top-6 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <X />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-[40px] text-white">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-lg font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Home
          </Link>
          <Link
            to="/company"
            onClick={() => setOpen(false)}
            className="text-lg font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Company
          </Link>

          {/* Dropdown for Services */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-lg font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
            >
              Services
              <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 rounded-md border border-[white]/30 bg-black p-2 shadow-lg">
                <Link
                  to="/esl"
                  onClick={() => {
                    setOpen(false);
                    setDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-lg text-white hover:bg-gray-700"
                >
                  ESL
                </Link>
                <Link
                  to="/gemini"
                  onClick={() => {
                    setOpen(false);
                    setDropdownOpen(false);
                  }}
                  className="block px-4 py-2 text-lg text-white hover:bg-gray-700"
                >
                  Gemini
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className="text-lg font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Products
          </Link>
          <Link
            to="/career"
            onClick={() => setOpen(false)}
            className="text-lg font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Career
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-lg font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <motion.div
        style={{ opacity }}
        className={`fixed left-0 top-0 z-[9999] flex w-full items-center justify-center bg-[#16161799] backdrop-blur-[20px] ${
          location.pathname !== "/" &&
          location.pathname.startsWith("/?") === false &&
          "!opacity-100"
        }`}
      >
        <div className="flex h-[70px] w-full items-center justify-between px-[5.3%]">
          <Link
            to="/"
            className="gradient-hover-effect2 relative translate-y-[1.5px] before:right-[-75px] sm:translate-y-[2px] 2xl:before:right-[-100px]"
          >
            <img
              src="/logo.png"
              className="w-full max-w-[36px] sm:max-w-[46px] sm:translate-x-[-8px] 2xl:translate-x-0"
              alt="Logo"
            />
            {location.pathname !== "/" &&
              location.pathname.startsWith("/?") === false && (
                <img
                  src="/unireal.png"
                  className="absolute left-[120%] top-0 w-[99px] max-w-[65px] translate-y-[-5px] sm:left-[100%] sm:-translate-y-[6px] 2xl:left-[120%] 2xl:max-w-[84px]"
                  alt=""
                />
              )}
          </Link>
          <div className="flex items-center gap-2 lg:gap-[50px]">
            <div className="hidden items-center justify-center gap-[39px] lg:flex">
              <Link
                to="/"
                className="text-base font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Home
              </Link>
              <Link
                to="/company"
                className="text-base font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Company
              </Link>

              {/* Dropdown for Services */}
              <div className="group relative">
                <button className="items-cen0ter flex h-[40px] items-center justify-center gap-1 text-base font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70">
                  Services
                  <ChevronDown size={16} />
                </button>

                <div className="absolute left-0 mt-0 hidden w-40 rounded-md bg-black p-2 shadow-lg group-hover:block">
                  <Link
                    to="/esl"
                    className="block px-4 py-2 text-base text-white hover:bg-gray-700"
                  >
                    ESL
                  </Link>
                  <Link
                    to="/gemini"
                    className="block px-4 py-2 text-base text-white hover:bg-gray-700"
                  >
                    Gemini
                  </Link>
                </div>
              </div>

              <Link
                to="/products"
                className="text-base font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Products
              </Link>
              <Link
                to="/career"
                className="text-base font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Career
              </Link>
              <Link
                to="/contact"
                className="text-base font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Contact
              </Link>
            </div>

            {/* Search & Mobile Menu Icon */}

            <div
              className="cursor-pointer hover:opacity-70 lg:hidden"
              onClick={() => setOpen(true)}
            >
              {/* <MenuIcon className="size-[36px]" strokeWidth={1.5} /> */}
              <img
                src="/menu-icon.svg"
                className="w-full max-w-[24px] shrink-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
