import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleCanPlay = () => {
    setIsLoading(false); // Video is ready to play
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* top  */}
      <div className="flex w-full max-w-[1230px] flex-col items-center justify-center pb-[70px] pt-[140px] md:pb-[110px] 2xl:pb-[150px] 2xl:pt-[219px]">
        <h1 className="text-center text-[40px] font-[500] leading-[1.3] sm:text-[50px] lg:text-[75px] lg:leading-[95px] 2xl:text-[85px]">
          The Future of <br />{" "}
          <span className="w-fit bg-custom-text-gradient bg-clip-text font-[500] text-transparent">
            Interactive Digital Signage{" "}
          </span>
        </h1>
        <p className="mt-5 text-center text-[18px] font-[400] sm:text-[25px] lg:text-[35px] 2xl:mt-[30px] 2xl:text-[40px]">
          Where AI Meets Digital Signage
        </p>
        <div className="relative mt-[40px] flex flex-col items-center gap-4 sm:mt-[50px] sm:flex-row sm:gap-[33px] lg:mt-[70px] 2xl:mt-[98px]">
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
      {/* bottom  */}
      <div className="relative flex w-full items-center justify-center pb-[100px] pt-[60px] sm:pt-[110px] md:pb-[200px] xl:pt-[158px] 2xl:pt-[158px]">
        <div className="animated-gradient-shadow relative mx-auto flex w-full max-w-[90%] items-center justify-center px-[8px] py-[4px] sm:max-w-[77%] xl:px-[14px] xl:py-[7px]">
          <div className="absolute top-0 z-[-1] h-[250px] w-full bg-custom-gradient blur-[6px] md:h-[600px] md:blur-[15px] xl:blur-[16px] 2xl:h-[578px] 2xl:blur-[16px]"></div>
          <div className="relative aspect-[2/1.3] w-full overflow-hidden rounded-[5px] bg-[black] sm:aspect-[2/1]">
            <div className="relative h-full w-full !border-[16px] !border-[black] bg-gray-800">
              {isLoading && (
                <div className="flex h-full w-full animate-pulse items-center justify-center bg-black text-sm">
                  Loading...
                </div>
              )}
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                onCanPlay={handleCanPlay}
                className="h-full w-full object-cover"
              >
                <source src="/V2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
