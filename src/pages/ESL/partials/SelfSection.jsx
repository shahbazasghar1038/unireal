import digitalSelf from "../../../assets/digitalSelf.png";

const SelfSection = () => {
  return (
    <div className="mx-auto max-w-[1328px] px-6 pb-[80px] pt-[80px] md:pb-[100px] md:pt-[164px]">
      {/* Heading */}
      <h2 className="mx-auto w-fit bg-esl-heading-gradient bg-clip-text text-center text-[30px] font-bold leading-[43px] text-transparent md:text-[35px] 2xl:text-[40px] 2xl:leading-[48px]">
        Why Our Digital Shelf Labels
      </h2>

      {/* Description */}
      <p className="text-md mx-auto mt-4 max-w-[1050px] text-center text-[20px] text-white text-opacity-80 md:text-[24px] 2xl:max-w-[1100px] 2xl:text-[26px]">
        Electronic shelf label (ESL) is revolutionizing the way retail stores
        manage pricing and product information. Our digital price tags are
        designed to improve efficiency, accuracy, and customer satisfaction in
        the retail industry. We offer the most advanced electronic shelf
        labeling system and complete technical support.
      </p>

      {/* Image - Left on Mobile, Centered on Desktop */}
      <div className="mt-8 flex justify-start md:justify-center">
        <img
          src={digitalSelf}
          alt="Digital Shelf Label"
          className="w-full max-w-[600px]"
        />
      </div>
    </div>
  );
};

export default SelfSection;
