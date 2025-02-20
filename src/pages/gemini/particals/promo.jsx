const Promo = () => {
  return (
    <div
      id={"promo"}
      className="relative flex w-full flex-col items-center justify-center"
    >
      <img
        src="/vector-bg-1.svg"
        className="absolute right-0 top-[10%] z-[-1] max-w-[100px] blur-[50px] sm:max-w-[120px] sm:blur-[90px] 2xl:top-[8%] 2xl:max-w-[180px] 2xl:blur-[120px]"
        alt=""
      />
      <img
        src="/vector-bg-1.svg"
        style={{ transform: "scaleX(-1)" }}
        className="absolute left-0 top-[50%] z-[-1] max-w-[100px] blur-[40px] sm:max-w-[120px] sm:blur-[100px] 2xl:max-w-[180px]"
        alt=""
      />
      <img
        src="/vector-bg-2.svg"
        className="absolute right-0 top-[30%] z-[-1] max-w-[100px] blur-[50px] sm:max-w-[100px] sm:blur-[90px] 2xl:top-[30%] 2xl:max-w-[140px] 2xl:blur-[160px]"
        alt=""
      />
      <img
        src="/vector-bg-2.svg"
        style={{ transform: "scaleX(-1)" }}
        className="absolute left-0 top-[65%] z-[-1] max-w-[100px] blur-[40px] sm:max-w-[110px] sm:blur-[120px] 2xl:max-w-[150px] 2xl:blur-[160px]"
        alt=""
      />
      <div className="flex w-full max-w-[1240px] flex-col items-center justify-center px-5 pb-[100px] pt-[80px] md:pb-[130px] md:pt-[100px] lg:pb-[156px] 2xl:max-w-[1485px] 2xl:pt-[119px]">
        {/* top */}
        <div className="flex w-full max-w-[1300px] flex-col items-center justify-center pb-[60px] md:pb-[90px]">
          <h1 className="w-fit bg-heading-gradient bg-clip-text text-center text-[40px] font-[700] text-transparent md:text-[60px] 2xl:text-[80px]">
            Gamification
          </h1>
          <p className="mobile-company-text-justify mt-[25px] text-center text-[18px] font-[400] text-white sm:text-[20px] sm:leading-[34px] md:mt-[35px] md:text-[26px] 2xl:mt-[50px] 2xl:text-[31px] 2xl:leading-[40px]">
            Gemini’s{" "}
            <span className="text-center font-[700] text-[#FF00FF]">
              Gamification Feature
            </span>{" "}
            is designed to take customer engagement to the next level.{" "}
          </p>
          <p className="mobile-company-text-justify mt-[30px] text-center text-[18px] font-[400] text-white sm:text-[20px] sm:leading-[34px] md:mt-[50px] md:text-[26px] 2xl:mt-[72px] 2xl:text-[31px] 2xl:leading-[40px]">
            With the{" "}
            <span className="font-[700] text-[#FF00FF]">Spin the Wheel</span>{" "}
            game, businesses can create fun, interactive experiences that not
            only capture attention but also drive sales and customer loyalty.
          </p>
          <div className="mt-[40px] aspect-[585/799] w-full max-w-[450px] rounded-[10px] bg-div-custom-gradient p-1.5 md:mt-[55px] 2xl:mt-[63px] 2xl:max-w-[585px]">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[5px] bg-black">
              <img
                src="/promo-image.jpeg"
                className="h-[100%] w-full rounded-[10px] object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* why it matters */}
        <div className="flex w-full flex-col items-center justify-center gap-[60px] 2xl:gap-[80px]">
          <h3 className="text-center text-[35px] font-[700] text-white md:text-[40px]">
            Why It Matters{" "}
          </h3>
          <div className="grid w-full bg-[#1D1D1F]/50 lg:grid-cols-3">
            {/* 1  */}
            <div className="h-full w-full">
              <div className="flex h-[70px] w-full items-center justify-center bg-[#57C3F9] text-[23px] font-[700] md:text-[26px] lg:h-[85px] 2xl:h-[107px] 2xl:text-[30px]">
                Boost engagement
              </div>
              <p className="px-5 pb-[30px] pt-[40px] text-[23px] font-[400] lg:px-6 2xl:px-[69.5px] 2xl:pt-[55px] 2xl:text-[26px]">
                The interactive nature of the Spin the Wheel game captures
                attention and encourages customers to interact with your brand.
              </p>
            </div>
            {/* 2  */}
            <div className="h-full w-full">
              <div className="flex h-[70px] w-full items-center justify-center bg-[#BB4EEE] text-[23px] font-[700] md:text-[26px] lg:h-[85px] 2xl:h-[107px] 2xl:text-[30px]">
                Drive Sales{" "}
              </div>
              <p className="px-5 pb-[30px] pt-[40px] text-[23px] font-[400] lg:px-6 2xl:px-[69.5px] 2xl:pt-[55px] 2xl:text-[26px]">
                Voucher rewards incentivize purchases, helping you convert
                engagement into revenue.
              </p>
            </div>
            {/* 3  */}
            <div className="h-full w-full">
              <div className="flex h-[70px] w-full items-center justify-center bg-[#FE4996] text-[23px] font-[700] md:text-[26px] lg:h-[85px] 2xl:h-[107px] 2xl:text-[30px]">
                Build Loyalty{" "}
              </div>
              <p className="px-5 pb-[30px] pt-[40px] text-[23px] font-[400] lg:px-6 2xl:px-[69.5px] 2xl:pt-[55px] 2xl:text-[26px]">
                Fun and rewarding experiences leave a lasting impression,
                encouraging customers to return and engage with your brand
                again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
