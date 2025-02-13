import { ChevronRight } from "lucide-react";

const ZeroPaper = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-5 pb-[50px] pt-[40px] sm:pb-[95px] sm:pt-[70px]">
      <img
        src="/vector-bg-1.svg"
        className="absolute right-0 top-[10%] z-[-1] max-w-[100px] blur-[50px] sm:max-w-[240px] sm:blur-[140px] 2xl:top-[8%] 2xl:max-w-[290px] 2xl:blur-[140px]"
        alt=""
      />
      <img
        src="/vector-bg-1.svg"
        style={{ transform: "scaleX(-1)" }}
        className="absolute left-0 top-[50%] z-[-1] max-w-[100px] blur-[40px] sm:max-w-[240px] sm:blur-[140px] 2xl:max-w-[280px]"
        alt=""
      />
      <img
        src="/vector-bg-2.svg"
        className="absolute right-0 top-[30%] z-[-1] max-w-[100px] blur-[50px] sm:max-w-[180px] sm:blur-[200px] 2xl:top-[30%] 2xl:max-w-[280px] 2xl:blur-[200px]"
        alt=""
      />
      <img
        src="/vector-bg-2.svg"
        style={{ transform: "scaleX(-1)" }}
        className="absolute left-0 top-[65%] z-[-1] max-w-[100px] blur-[40px] sm:max-w-[200px] sm:blur-[180px] 2xl:max-w-[270px]"
        alt=""
      />
      <div className="flex w-full max-w-[650px] flex-col items-center justify-center 2xl:max-w-[783px]">
        <h1 className="text-center text-[20px] font-[700] leading-[1.4] sm:text-[35px] 2xl:text-[40px]">
          Dynamic Pricing, Instant Updates
          <br />{" "}
          <span className="gradient-heading text-[28px] sm:text-[44px] 2xl:text-[50px]">
            Zero Paper Waste
          </span>
        </h1>
        <div className="mt-[40px] aspect-[783/746] w-full rounded-[14px] p-1 sm:mt-[54px] sm:rounded-[30px] sm:p-1.5">
          <div className="relative h-full w-full overflow-hidden rounded-[11px] bg-[black] sm:rounded-[27px]">
            <div className="h-full w-full bg-gray-800">
              <video
                className="h-full w-full object-cover"
                src="/V3.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
        <div className="mt-[30px] flex w-full items-center justify-center md:mt-[55px]">
          <a href="#" className="flex items-center justify-center gap-1">
            <p className="text-[18px] leading-[1] sm:text-[20px]">Learn more</p>
            <ChevronRight className="size-[20px] text-white sm:size-[25px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ZeroPaper;
