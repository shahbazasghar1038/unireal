const KeyFeatures = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-5">
      {/* top  */}
      <div className="flex w-full max-w-[1240px] flex-col items-center justify-center gap-[70px] pb-[80px] pt-[40px] sm:gap-[75px] sm:pt-[60px] lg:pb-[120px] 2xl:max-w-[1480px] 2xl:gap-[80px] 2xl:pb-[140px] 2xl:pt-[90px]">
        <h3 className="text-[35px] font-[700] text-white md:text-[40px]">
          Key Features
        </h3>
        <div className="relative flex w-full flex-col items-center justify-center gap-[100px] lg:flex-row lg:gap-0">
          {/* icons  */}
          <div className="absolute">
            <img
              src="/right-icoo.svg"
              className="w-full max-w-[50px] -translate-y-10 rotate-90 sm:max-w-[70px] sm:-translate-y-4 lg:max-w-[80px] lg:translate-y-0 lg:rotate-0 2xl:max-w-[100px]"
              alt=""
            />
          </div>
          <div className="flex w-full items-center justify-center lg:justify-start">
            <img
              src="/left-imgg.svg"
              className="w-full max-w-[320px] sm:max-w-[530px] 2xl:max-w-[640px]"
              alt=""
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="bg-div-custom-gradient p-1 lg:ml-14">
              <img
                src="/right-imgg.svg"
                className="w-full max-w-[270px] sm:max-w-[365px] 2xl:max-w-[465px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1290px] pb-[80px] lg:pb-[100px] 2xl:max-w-[1580px]">
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[25px] 2xl:gap-[32px]">
          <div className="flex w-full items-center justify-start gap-4 rounded-[30px] border-[2px] border-[#A4A4A4] p-[13px] lg:gap-[26px]">
            <div className="flex size-[65px] items-center justify-center rounded-[19px] bg-[#58BEFF] text-[44px] font-[500] leading-[1] lg:size-[80px] 2xl:size-[109px]">
              1
            </div>
            <p className="text-[20px] font-[400] text-white 2xl:text-[26px]">
              Intuitive Layout Builder
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-4 rounded-[30px] border-[2px] border-[#A4A4A4] p-[13px] lg:gap-[26px]">
            <div className="flex size-[65px] items-center justify-center rounded-[19px] bg-[#BB4EEE] text-[44px] font-[500] leading-[1] lg:size-[80px] 2xl:size-[109px]">
              2
            </div>
            <p className="text-[20px] font-[400] text-white 2xl:text-[26px]">
              Effortless Content Upload
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-4 rounded-[30px] border-[2px] border-[#A4A4A4] p-[13px] lg:gap-[26px]">
            <div className="flex size-[65px] items-center justify-center rounded-[19px] bg-[#FE4996] text-[44px] font-[500] leading-[1] lg:size-[80px] 2xl:size-[109px]">
              3
            </div>
            <p className="text-[20px] font-[400] text-white 2xl:text-[26px]">
              AI-Powered Insights{" "}
            </p>
          </div>
        </div>
        <div className="mt-4 grid w-full gap-4 lg:mt-[25px] lg:grid-cols-2 lg:gap-[25px] lg:px-[150px] xl:px-[200px] 2xl:mt-[32px] 2xl:gap-[32px]">
          <div className="flex w-full items-center justify-start gap-4 rounded-[30px] border-[2px] border-[#A4A4A4] p-[13px] lg:gap-[26px]">
            <div className="flex size-[65px] shrink-0 items-center justify-center rounded-[19px] bg-[#FEA042] text-[44px] font-[500] leading-[1] lg:size-[80px] 2xl:size-[109px]">
              4
            </div>
            <p className="text-[20px] font-[400] text-white 2xl:text-[26px]">
              Interactive Engagement{" "}
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-4 rounded-[30px] border-[2px] border-[#A4A4A4] p-[13px] lg:gap-[26px]">
            <div className="flex size-[65px] shrink-0 items-center justify-center rounded-[19px] bg-[#58BEFF] text-[44px] font-[500] leading-[1] lg:size-[80px] 2xl:size-[109px]">
              5
            </div>
            <p className="text-[20px] font-[400] text-white 2xl:text-[26px]">
              Advanced Analytics & Dashboards{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
