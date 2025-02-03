import { ChevronRight } from "lucide-react";
import { useState } from "react";

const DigitalSignage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleCanPlay = () => {
    setIsLoading(false); // Video is ready to play
  };
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-[95px] pt-[20px] sm:pt-[30px]">
      <div className="flex w-full max-w-[600px] flex-col items-center justify-center lg:max-w-[750px] xl:max-w-[900px] 2xl:max-w-[1067px]">
        <h1 className="text-center text-[20px] font-[700] leading-[1.2] sm:text-[35px] 2xl:text-[40px]">
          Bring Your Brand to Life with <br />{" "}
          <span className="gradient-heading text-[28px] sm:text-[44px] 2xl:text-[50px]">
            Smart Digital Signage
          </span>
        </h1>
        <div className="animated-gradient-bg-div mt-[37px] aspect-[1067/691] w-full rounded-[14px] p-1 sm:rounded-[30px] sm:p-1.5">
          <div className="relative h-full w-full overflow-hidden rounded-[11px] bg-[black] sm:rounded-[27px]">
            {/* <img
              src="/bg-img-smart.png"
              className="h-full w-full object-cover"
              alt=""
            /> */}
            <div className="relative h-full w-full bg-gray-800">
              {isLoading && (
                <div className="flex h-full w-full animate-pulse items-center justify-center bg-black text-sm">
                  loading...
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

export default DigitalSignage;
