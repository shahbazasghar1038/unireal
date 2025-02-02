const Service = () => {
  return (
    <div className="px-4 grid md:grid-cols-2 w-full gap-3 pt-[20px] sm:pt-[60px] lg:pt-[95px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
      <div className="w-full aspect-[939/684] rounded-[15px] lg:rounded-[31px] overflow-hidden group relative">
        <div className="absolute top-0 left-0 w-full h-full pb-[30px] 2xl:pb-[40px] bg-grid-custom-gradient transition-all opacity-0 group-hover:opacity-[1] flex gap-[20px] 2xl:gap-[27px] items-center justify-end flex-col">
          <h2 className="text-[20px] lg:text-[30px] md:px-0 px-4 xl:text-[35px] 2xl:text-[40px] text-center max-w-[550px] 2xl:max-w-[650px] leading-[1.4] font-[700]">
            AI That Sees, Understands, and Helps You Engage Smarter.
          </h2>
          <button className="px-[19px] 2xl:px-[22px] py-[9px] 2xl:py-[12px] text-[16.5px] text-black bg-[#F5F5F7] rounded-full">
            Learn more
          </button>
        </div>
        <img src="/grid-1.png" className="w-full h-full object-cover" alt="" />
      </div>
      <div className="w-full aspect-[939/684] rounded-[15px] lg:rounded-[31px] overflow-hidden group relative">
        <div className="absolute top-0 left-0 w-full h-full pb-[30px] 2xl:pb-[40px] bg-grid-custom-gradient transition-all opacity-0 group-hover:opacity-[1] flex gap-[20px] 2xl:gap-[27px] items-center justify-end flex-col">
          <h2 className="text-[20px] lg:text-[30px] md:px-0 px-4 xl:text-[35px] 2xl:text-[40px] text-center max-w-[600px] 2xl:max-w-[700px] leading-[1.4] font-[700]">
            Promos That Captivate and Keep Them Coming Back for More
          </h2>
          <button className="px-[19px] 2xl:px-[22px] py-[9px] 2xl:py-[12px] text-[16.5px] text-black bg-[#F5F5F7] rounded-full">
            Learn more
          </button>
        </div>
        <img src="/grid-1.png" className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
};
// grid-custom-gradient
export default Service;
