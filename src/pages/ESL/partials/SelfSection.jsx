import digitalSelf from "../../../assets/digitalSelf.png";

const SelfSection = () => {
  return (
    <div className="max-w-[1328px] mx-auto px-6 my-16 text-center">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-red-400 text-transparent bg-clip-text">
        Why Our Digital Shelf Labels
      </h2>

      {/* Description */}
      <p className="text-white text-opacity-80 text-md md:text-lg mt-4 max-w-3xl mx-auto">
        Electronic shelf label (ESL) is revolutionizing the way retail stores
        manage pricing and product information. Our digital price tags are
        designed to improve efficiency, accuracy, and customer satisfaction in
        the retail industry. We offer the most advanced electronic shelf
        labeling system and complete technical support.
      </p>

      {/* Image */}
      <div className="flex justify-center mt-8">
        <img
          src={digitalSelf}
          alt="Digital Shelf Label"
          className="max-w-xs md:max-w-md w-full object-contain"
        />
      </div>
    </div>
  );
};

export default SelfSection;
