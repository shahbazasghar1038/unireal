import { useState } from "react";

const SelfSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleCanPlay = () => {
    setIsLoading(false); // Video is ready to play
  };
  return (
    <>
      <div className="mx-auto max-w-[1328px] px-6 pt-[80px] md:pt-[164px]">
        {/* Heading */}
        <h2 className="mx-auto w-fit bg-esl-heading-gradient bg-clip-text text-center text-[30px] font-bold leading-[43px] text-transparent md:text-[35px] 2xl:text-[40px] 2xl:leading-[48px]">
          Why Our Digital Shelf Labels
        </h2>

        {/* Description */}
        <p className="text-md mx-auto mt-4 max-w-[1000px] text-center text-[20px] text-white text-opacity-80 md:text-[24px] 2xl:max-w-[1100px] 2xl:text-[26px]">
          Electronic shelf label (ESL) is revolutionizing the way retail stores
          manage pricing and product information. Our digital price tags are
          designed to improve efficiency, accuracy, and customer satisfaction in
          the retail industry. We offer the most advanced electronic shelf
          labeling system and complete technical support.
        </p>

        {/* Image - Left on Mobile, Centered on Desktop */}
      </div>
      <div className="relative mx-auto mt-10 flex w-full justify-start overflow-hidden pb-[80px] md:justify-center md:pb-[100px]">
        {/* <img
          src={digitalSelf}
          alt="Digital Shelf Label"
          className="w-full max-w-[600px]"
        /> */}
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
          <source src="/shelf.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default SelfSection;
