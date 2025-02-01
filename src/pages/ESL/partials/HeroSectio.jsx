import heroServiceImage from "../../../assets/hero-service-bgImage.png";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroServiceImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      {/* Content Wrapper with Same Width as Header & Centered Vertically */}
      <div className="relative z-10 max-w-[1328px] mx-auto px-6 h-full flex items-center">
        <div className="text-left">
          <h1 className="text-white font-bold text-2xl md:text-4xl">
            <span className="font-semibold">Electronic Shelf Label</span>
          </h1>
          <p className="text-white text-opacity-70 text-lg md:text-xl mt-2">
            Smart Labels, Smarter Retail
          </p>

          {/* Button */}
          <button
            className="mt-6 px-6 py-3 text-white text-lg font-semibold border border-transparent rounded-full transition-all 
            hover:shadow-lg hover:bg-opacity-90 
            bg-gradient-to-r from-blue-400 via-purple-500 to-red-400 border-2 border-transparent"
          >
            Get a Demo
          </button>
        </div>
      </div>

      {/* Gradient Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-red-400"></div>
    </div>
  );
};

export default HeroSection;
