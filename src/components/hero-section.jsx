import { useState } from "react";
import ScrollingText from "./scrolling-text";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleCanPlay = () => {
    setIsLoading(false); // Video is ready to play
  };

  return (
    <>
      <ScrollingText />
      <div className="relative flex w-full flex-col items-center justify-center">
        <svg
          width={611}
          height={334}
          viewBox="0 0 611 334"
          fill="none"
          className="absolute top-[-80px] max-w-[300px] translate-x-[-50px] blur-[120px] md:top-[-32px] md:max-w-[500px] md:translate-x-[-200px] md:blur-[200px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M401.107 132.257C537.041 109.511 702 51.0004 550.465 -19.8639C532.171 -44.7945 353.217 -76.9711 217.283 -54.2243C81.3493 -31.4776 -28.4213 230.608 8.00012 315.5C44.4229 400.392 265.174 155.004 401.107 132.257Z"
            fill="url(#paint0_linear_813_15)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_813_15"
              x1="209.699"
              y1="289.815"
              x2="419.901"
              y2="69.8838"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFB951" />
              <stop offset={1} stopColor="#F90068" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width={730}
          height={246}
          viewBox="0 0 730 246"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-32px] max-w-[300px] translate-x-[130px] blur-[130px] md:max-w-[500px] md:translate-x-[200px] md:blur-[200px]"
        >
          <path
            d="M205.738 133.581C262.689 125.989 282.623 178.014 358.5 158C454.256 132.744 746.942 322.26 729 209C705 57.5004 364.746 -170.651 235.923 -153.477C107.1 -136.303 36.8983 -106.925 12.9418 -74.781C-39.2572 -4.74328 76.9149 150.755 205.738 133.581Z"
            fill="url(#paint0_linear_813_14)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_813_14"
              x1="682.357"
              y1="99.5237"
              x2="397.41"
              y2="-101.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5FECFF" />
              <stop offset={1} stopColor="#0085FF" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mx-auto w-full max-w-[89.5%] pt-[270px] opacity-0">
          <img src="/unireal.png" className="w-full" alt="" />
        </div>
        <div className="relative flex w-full items-center justify-center pt-[60px] sm:pt-[110px] xl:pt-[158px] 2xl:pt-[158px]">
          <div className="gradient-hover-effect-background relative mx-auto flex w-full max-w-[90%] items-center justify-center px-[8px] py-[4px] sm:max-w-[77%] xl:px-[14px] xl:py-[7px]">
            <div className="absolute top-0 z-[-1] h-[250px] w-full bg-custom-gradient blur-[6px] md:h-[600px] md:blur-[15px] xl:blur-[16px] 2xl:h-[578px] 2xl:blur-[16px]"></div>
            <div className="relative aspect-[2/1.3] w-full overflow-hidden rounded-[5px] bg-[black] sm:aspect-[2/1]">
              <div className="relative h-full w-full !border-[16px] !border-[black] bg-gray-800">
                <div className="absolute left-0 top-0 flex h-[101%] w-full flex-col items-center justify-end bg-gradient-to-t from-[black]/80 to-transparent pb-[13px] sm:pb-[30px] xl:pb-[55px] 2xl:pb-[60px]">
                  <h1 className="text-center text-[15px] font-[700] leading-[1.2] sm:text-[23px] xl:text-[35px] 2xl:text-[40px]">
                    Smart Displays, Smarter Insights
                    <br />
                    Redefining Engagement with AI
                  </h1>
                  <p className="mt-1 text-center text-[13px] font-[500] leading-[1.1] text-[#E5E5E5] sm:mt-3 sm:text-sm sm:font-[500] xl:text-[23px] 2xl:mt-5 2xl:text-[26px]">
                    Effortless screen management - <br className="sm:hidden" />{" "}
                    anytime, anywhere
                  </p>
                </div>
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
    </>
  );
};

export default HeroSection;
