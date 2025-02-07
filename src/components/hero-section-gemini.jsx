import { useState } from "react";

const HeroSectionGemini = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleCanPlay = () => {
    setIsLoading(false); // Video is ready to play
  };

  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="relative flex w-full items-center justify-center pt-[60px] sm:pt-[110px] xl:pt-[158px] 2xl:pt-[158px]">
          <div className="gradient-hover-effect-background relative mx-auto flex w-full max-w-[90%] items-center justify-center px-[8px] py-[4px] sm:max-w-[77%] xl:px-[14px] xl:py-[7px]">
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
    </>
  );
};

export default HeroSectionGemini;
