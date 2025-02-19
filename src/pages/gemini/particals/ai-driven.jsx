const AiDriven = () => {
  return (
    <div
      id={"ai"}
      className="relative flex w-full flex-col items-center justify-center bg-mask-group bg-cover bg-center bg-no-repeat"
    >
      <div className="flex w-full max-w-[1240px] flex-col items-center justify-center px-5 pb-[100px] pt-[80px] md:pb-[130px] md:pt-[100px] lg:pb-[156px] 2xl:max-w-[1485px] 2xl:pt-[119px]">
        {/* top  */}
        <div className="flex w-full flex-col items-center justify-center pb-[60px] md:pb-[90px]">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-center 2xl:max-w-[1200px]">
            <h1 className="w-fit bg-heading-gradient bg-clip-text text-center text-[40px] font-[700] text-transparent md:text-[60px] 2xl:text-[70px]">
              AI-Driven Insights
            </h1>
            <p className="mt-[25px] text-center text-[18px] font-[400] text-white sm:max-w-[1000px] sm:text-[19px] sm:leading-[34px] md:mt-[35px] md:text-[24px] 2xl:mt-[50px] 2xl:max-w-[1000px] 2xl:text-[31px] 2xl:leading-[40px]">
              Gemini’s AI-powered analytics is a game-changer for businesses
              looking to understand their audience on a deeper level. By
              integrating advanced AI algorithms, Gemini can detect and analyze
              key audience attributes, including emotions, ethnicity, and
              gender, in real-time.
            </p>

            <div className="mt-[40px] w-full max-w-[1050px] p-1.5 md:mt-[50px] 2xl:mt-[53px] 2xl:max-w-[1158px]">
              <img src="/Group 27012 1.svg" className="w-full" alt="" />
            </div>
          </div>
          <div className="mt-[45px] grid w-full gap-[24px] lg:grid-cols-2">
            {/* 1  */}
            <div className="flex h-full w-full flex-col items-start justify-start rounded-xl bg-[#1D1D1F]/50 px-4 pb-[30px] pt-[25px] transition-all hover:bg-[#1D1D1F] lg:px-[30px] lg:pb-[40px] lg:pt-[30px] 2xl:px-[39px]">
              <img
                src="/Group 24933.svg"
                className="w-full max-w-[95px] shrink-0 lg:max-w-[130px] 2xl:max-w-[143px]"
                alt=""
              />
              <h1 className="mt-[25px] text-[26px] font-[700] lg:mt-[40px] lg:text-[35px] 2xl:mt-[50px] 2xl:text-[40px]">
                Emotion Detection
              </h1>
              <p className="mt-[25px] text-[20px] font-[400] lg:text-[22px] 2xl:text-[26px]">
                Using infrared sensors and high-resolution cameras, Gemini’s AI
                analyzes facial expressions to determine how viewers are
                reacting to your content. Whether they’re happy, sad, neutral,
                or excited, you’ll gain valuable insights into the emotional
                impact of your campaigns.
              </p>
            </div>
            {/* 2  */}
            <div className="flex h-full w-full flex-col items-start justify-start rounded-xl bg-[#1D1D1F]/50 px-4 pb-[30px] pt-[25px] transition-all hover:bg-[#1D1D1F] lg:px-[30px] lg:pb-[40px] lg:pt-[30px] 2xl:px-[39px]">
              {" "}
              <img
                src="/Frame33333.svg"
                className="w-full max-w-[95px] shrink-0 lg:max-w-[130px] 2xl:max-w-[145px]"
                alt=""
              />
              <h1 className="mt-[25px] text-[26px] font-[700] lg:mt-[40px] lg:text-[35px] 2xl:mt-[50px] 2xl:text-[40px]">
                Gender and Ethnicity Detection{" "}
              </h1>
              <p className="mt-[25px] text-[20px] font-[400] lg:text-[22px] 2xl:text-[26px]">
                The AI can approximate the demographics of your audience,
                allowing you to tailor your messaging to different groups and
                ensure your campaigns resonate with the right people.
              </p>
            </div>
          </div>
        </div>
        {/* why it matters  */}
        <div className="flex w-full flex-col items-center justify-center gap-[60px] 2xl:gap-[80px]">
          <h3 className="text-center text-[35px] font-[700] text-white md:text-[40px]">
            Why It Matters{" "}
          </h3>
          <div className="grid w-full bg-[#1D1D1F]/50 lg:grid-cols-3">
            {/* 1  */}
            <div className="h-full w-full">
              <div className="flex h-[70px] w-full items-center justify-center bg-[#57C3F9] text-[23px] font-[700] md:text-[23px] lg:h-[85px] 2xl:h-[107px] 2xl:text-[30px]">
                Personalized Messaging
              </div>
              <p className="px-5 pb-[30px] pt-[40px] text-[23px] font-[400] lg:px-6 2xl:px-[69.5px] 2xl:pt-[55px] 2xl:text-[26px]">
                Use demographic and emotional data to deliver targeted content
                that speaks directly to your audience.
              </p>
            </div>
            {/* 2  */}
            <div className="h-full w-full">
              <div className="flex h-[70px] w-full items-center justify-center bg-[#BB4EEE] text-[23px] font-[700] md:text-[23px] lg:h-[85px] 2xl:h-[107px] 2xl:text-[30px]">
                Optimized Campaigns{" "}
              </div>
              <p className="px-5 pb-[30px] pt-[40px] text-[23px] font-[400] lg:px-6 2xl:px-[69.5px] 2xl:pt-[55px] 2xl:text-[26px]">
                Understand what works and what doesn’t, and make data-driven
                decisions to improve engagement and conversion rates.
              </p>
            </div>
            {/* 3  */}
            <div className="h-full w-full">
              <div className="flex h-[70px] w-full items-center justify-center bg-[#FE4996] text-center text-[23px] font-[700] md:text-[23px] lg:h-[85px] 2xl:h-[107px] 2xl:text-[30px]">
                Enhanced Customer Experience{" "}
              </div>
              <p className="px-5 pb-[30px] pt-[40px] text-[23px] font-[400] lg:px-6 2xl:px-[69.5px] 2xl:pt-[55px] 2xl:text-[26px]">
                Create campaigns that truly connect with your audience,
                fostering loyalty and driving long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDriven;
