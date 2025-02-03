const Service = () => {
  return (
    <div className="grid w-full gap-3 px-4 pb-[40px] pt-[20px] sm:pb-[60px] sm:pt-[60px] md:grid-cols-2 lg:pb-[80px] lg:pt-[95px]">
      <div className="group relative aspect-[939/684] w-full overflow-hidden rounded-[15px] lg:rounded-[31px]">
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end gap-[20px] bg-grid-custom-gradient pb-[30px] opacity-0 transition-all group-hover:opacity-[1] 2xl:gap-[27px] 2xl:pb-[40px]">
          <h2 className="max-w-[550px] px-4 text-center text-[20px] font-[700] leading-[1.4] md:px-0 lg:text-[30px] xl:text-[35px] 2xl:max-w-[650px] 2xl:text-[40px]">
            AI That Sees, Understands, and Helps You Engage Smarter.
          </h2>
          <button className="rounded-full bg-[#F5F5F7] px-[19px] py-[9px] text-[16.5px] text-black 2xl:px-[22px] 2xl:py-[12px]">
            Learn more
          </button>
        </div>
        <img src="/ai-1.png" className="h-full w-full object-cover" alt="" />
      </div>
      <div className="group relative aspect-[939/684] w-full overflow-hidden rounded-[15px] lg:rounded-[31px]">
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-end gap-[20px] bg-grid-custom-gradient pb-[30px] opacity-0 transition-all group-hover:opacity-[1] 2xl:gap-[27px] 2xl:pb-[40px]">
          <h2 className="max-w-[600px] px-4 text-center text-[20px] font-[700] leading-[1.4] md:px-0 lg:text-[30px] xl:text-[35px] 2xl:max-w-[700px] 2xl:text-[40px]">
            Promos That Captivate and Keep Them Coming Back for More
          </h2>
          <button className="rounded-full bg-[#F5F5F7] px-[19px] py-[9px] text-[16.5px] text-black 2xl:px-[22px] 2xl:py-[12px]">
            Learn more
          </button>
        </div>
        <img src="/ai-1.png" className="h-full w-full object-cover" alt="" />
      </div>
    </div>
  );
};
// grid-custom-gradient
export default Service;
