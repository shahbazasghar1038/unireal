const HowGeminiWorks = () => {
  return (
    <div className="flex w-full items-center justify-center px-5 pb-[80px] pt-[60px] md:pb-[140px] md:pt-[100px] 2xl:pb-[165px] 2xl:pt-[126px]">
      <div className="flex w-full max-w-[1360px] flex-col items-center justify-center 2xl:max-w-[1600px]">
        <h3 className="text-center text-[35px] font-[700] text-white md:text-[40px]">
          How Gemini Works{" "}
        </h3>
        <p className="mt-2.5 w-full max-w-[627px] text-center text-[20px] font-[400] md:text-[26px]">
          Gemini is loaded with features to make digital signage management easy{" "}
        </p>
        <div className="mt-[80px] grid w-full gap-[25px] md:gap-[27px] lg:grid-cols-3">
          {/* 1 */}
          <div className="rounded-[30px] bg-border-gradient p-[1px] md:rounded-[47px]">
            <div className="flex h-full w-full flex-col rounded-[30px] bg-black px-5 pb-[50px] pt-[30px] transition-all hover:bg-[#000000ea] md:rounded-[47px] md:px-[30px] md:pt-[40px] 2xl:px-[48px] 2xl:pb-[70px] 2xl:pt-[51px]">
              <img
                src="./Group@2x.svg"
                className="aspect-square size-[70px] w-full max-w-[70px] shrink-0 2xl:size-[83px] 2xl:max-w-[83px]"
                alt=""
              />
              <h3 className="mt-6 text-[25px] font-[400] md:mt-[35px] 2xl:text-[30px]">
                Get Your Unique 6-Digit Code
              </h3>
              <p className="mt-[60px] text-[22px] font-[300] text-[#A4A4A4] md:mt-[120px] xl:mt-[139px] 2xl:text-[26px]">
                Simply input the code displayed on your app’s launch screen to
                connect your device.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="rounded-[30px] bg-border-gradient p-[1px] md:rounded-[47px]">
            <div className="flex h-full w-full flex-col rounded-[30px] bg-black px-5 pb-[50px] pt-[30px] transition-all hover:bg-[#000000ea] md:rounded-[47px] md:px-[30px] md:pt-[40px] 2xl:px-[48px] 2xl:pb-[70px] 2xl:pt-[51px]">
              <img
                src="./Group-222.svg"
                className="aspect-square size-[70px] w-full max-w-[70px] shrink-0 2xl:size-[83px] 2xl:max-w-[83px]"
                alt=""
              />
              <h3 className="mt-6 text-[25px] font-[400] md:mt-[35px] 2xl:text-[30px]">
                Upload Content{" "}
              </h3>
              <p className="mt-[60px] text-[22px] font-[300] text-[#A4A4A4] md:mt-[120px] xl:mt-[139px] 2xl:text-[26px]">
                Choose from images, videos, and more to create compelling
                displays.{" "}
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="rounded-[30px] bg-border-gradient p-[1px] md:rounded-[47px]">
            <div className="flex h-full w-full flex-col rounded-[30px] bg-black px-5 pb-[50px] pt-[30px] transition-all hover:bg-[#000000ea] md:rounded-[47px] md:px-[30px] md:pt-[40px] 2xl:px-[48px] 2xl:pb-[70px] 2xl:pt-[51px]">
              <img
                src="./Vector (3).svg"
                className="aspect-square size-[70px] w-full max-w-[70px] shrink-0 2xl:size-[83px] 2xl:max-w-[83px]"
                alt=""
              />
              <h3 className="mt-6 text-[25px] font-[400] md:mt-[35px] 2xl:text-[30px]">
                Create Campaigns & Publish{" "}
              </h3>
              <p className="mt-[60px] text-[22px] font-[300] text-[#A4A4A4] md:mt-[120px] xl:mt-[139px] 2xl:text-[26px]">
                Customize your messaging, schedule with ease, and publish
                instantly.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[75px] flex w-full items-center justify-center 2xl:mt-[87px]">
          <button className="animated-gradient-bg-div gradient-hover-effect h-[50px] w-[342px] rounded-full p-[2px] sm:h-[55px] md:p-[3px] lg:h-[66px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-[20px] font-[500] lg:text-[25px]">
              Try it out{" "}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowGeminiWorks;
