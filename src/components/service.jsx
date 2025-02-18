import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="grid w-full gap-3 px-4 pb-[40px] pt-[20px] sm:pb-[60px] sm:pt-[60px] md:grid-cols-2 lg:pb-[80px] lg:pt-[95px]">
      <div className="group relative aspect-[939/684] w-full overflow-hidden rounded-[15px] lg:rounded-[31px]">
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end gap-[20px] bg-grid-custom-gradient pb-[20px] transition-all group-hover:opacity-[1] sm:pb-[30px] sm:opacity-0 2xl:gap-[22px] 2xl:pb-[40px]">
          <h2 className="max-w-[500px] px-4 text-center text-[18px] font-[700] leading-[1.4] sm:text-[20px] md:px-0 lg:text-[30px] xl:text-[30px] 2xl:max-w-[600px] 2xl:text-[35px]">
            AI That Sees, Understands, and Helps You Engage Smarter.
          </h2>
          <Link
            to={"/gemini#ai"}
            className="rounded-full bg-[#F5F5F7] px-4 py-[4px] text-black transition-all hover:bg-[white]/70 sm:px-[19px] sm:py-[9px] sm:text-[16.5px] 2xl:px-[22px] 2xl:py-[12px]"
          >
            Learn more
          </Link>
        </div>
        <img src="/ai-1.1.png" className="h-full w-full object-cover" alt="" />
      </div>
      <div className="group relative aspect-[939/684] w-full overflow-hidden rounded-[15px] lg:rounded-[31px]">
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end gap-[20px] bg-grid-custom-gradient pb-[20px] transition-all group-hover:opacity-[1] sm:pb-[30px] sm:opacity-0 2xl:gap-[22px] 2xl:pb-[40px]">
          <h2 className="max-w-[500px] px-4 text-center text-[18px] font-[700] leading-[1.4] sm:text-[20px] md:px-0 lg:text-[30px] xl:text-[30px] 2xl:max-w-[600px] 2xl:text-[35px]">
            Gamification That Captivate and Keep Them Coming Back for More
          </h2>
          <Link
            to={"/gemini#promo"}
            className="rounded-full bg-[#F5F5F7] px-4 py-[4px] text-black transition-all hover:bg-[white]/70 sm:px-[19px] sm:py-[9px] sm:text-[16.5px] 2xl:px-[22px] 2xl:py-[12px]"
          >
            Learn more
          </Link>
        </div>
        <img
          src="/promo-image.jpeg"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};
// grid-custom-gradient
export default Service;
