import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="col flex w-full items-center justify-center px-5">
      <div className="flex w-full max-w-[1100px] flex-col items-center justify-center gap-[30px] pb-[80px] pt-[80px] md:gap-[54px] md:pb-[140px] md:pt-[110px] 2xl:pb-[167px] 2xl:pt-[129px]">
        <h1 className="bg-custom-text-gradient bg-clip-text text-center text-[40px] font-[500] text-transparent md:text-[50px] 2xl:text-[55px]">
          Start playing content in minutes
        </h1>
        <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:gap-[33px]">
          <button className="animated-gradient-bg-div gradient-hover-effect h-[50px] w-[246px] rounded-full p-[2px] sm:h-[55px] md:p-[3px] lg:h-[66px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-transparent text-[20px] font-[500] lg:text-[25px]">
              Start Free Trial
            </div>
          </button>
          <Link
            to={"/contact"}
            className="animated-gradient-bg-div gradient-hover-effect h-[50px] w-[246px] rounded-full p-[2px] sm:h-[55px] md:p-[3px] lg:h-[66px]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-[20px] font-[500] lg:text-[25px]">
              Get Demo
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
