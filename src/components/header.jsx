import { useScroll, motion, useTransform } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.2, 1],
    ["0", "0", "1", "1", "1"]
  );
  console.log(open);
  return (
    <>
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
            className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Home
          </Link>
          <Link
            to="/company"
            onClick={() => setOpen(false)}
            className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Company
          </Link>
          <Link
            to="/ecl"
            onClick={() => setOpen(false)}
            className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Services
          </Link>
          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            products
          </Link>
          <Link
            to="/career"
            onClick={() => setOpen(false)}
            className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Career
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
          >
            Contact
          </Link>
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className={`fixed left-0 top-0 z-[100] flex w-full items-center justify-center bg-[#16161799] backdrop-blur-[20px] ${
          location.pathname !== "/" &&
          location.pathname.startsWith("/?") === false &&
          "!opacity-100"
        }`}
      >
        {/* <div className="flex h-[80px] w-full max-w-[1250px] items-center justify-between 2xl:max-w-[1452px]"> */}
        <div className="flex h-[80px] w-full items-center justify-between px-[5.3%]">
          <Link to="/">
            {location.pathname !== "/" &&
              location.pathname.startsWith("/?") === false && (
                <img src="/logo.png" className="w-full max-w-[46px]" alt="" />
              )}
          </Link>
          <div className="flex items-center gap-2 md:gap-[50px]">
            <div className="hidden items-center justify-center gap-[39px] md:flex">
              <Link
                to="/"
                className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Home
              </Link>
              <Link
                to="/company"
                className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Company
              </Link>
              <Link
                to="/ecl"
                className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Products
              </Link>
              <Link
                to="/career"
                className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Career
              </Link>
              <Link
                to="/contact"
                className="text-sm font-[500] text-[#FFFFFFCC] transition-all hover:opacity-70"
              >
                Contact
              </Link>
            </div>
            <div>
              {/* Search  */}
              <img
                src="/search-icon.svg"
                className="aspect-square w-full max-w-[26px] cursor-pointer transition-all hover:opacity-70"
                alt=""
              />
            </div>
            <div
              className="cursor-pointer hover:opacity-70 md:hidden"
              onClick={() => setOpen(true)}
            >
              <MenuIcon className="size-[36px]" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
