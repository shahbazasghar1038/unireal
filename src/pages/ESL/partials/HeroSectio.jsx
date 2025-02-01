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
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 h-full flex items-center">
        <div className="text-left">
          <h1 className="text-white font-bold text-2xl md:text-4xl">
            <span className="font-bold">Electronic Shelf Label</span>
          </h1>
          <p className="text-white text-opacity-70 text-lg md:text-xl mt-2">
            Smart Labels, Smarter Retail
          </p>

          {/* Button */}
          <button
            className="relative w-[280px] mt-6 px-8 py-3 text-black font-bold bg-white rounded-full transition-transform hover:scale-105 duration-300"
            style={{
              background: "#F5F5F7",
              border: "3px solid transparent",
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(90deg, #42dcff, #ff5c97)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              WebkitBackgroundClip: "padding-box, border-box",
              boxShadow:
                "0 0 15px rgba(66, 220, 255, 0.5), 0 0 15px rgba(255, 92, 151, 0.5)",
            }}
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
