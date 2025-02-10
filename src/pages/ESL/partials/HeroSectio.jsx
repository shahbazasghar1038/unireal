import heroServiceImage from "../../../assets/hero-service-bgImage.png";

const HeroSection = () => {
  return (
    <div
      className="relative h-[500px] w-full bg-cover bg-center sm:bg-center md:h-[700px] 2xl:h-[878px]"
      style={{ backgroundImage: `url(${heroServiceImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      {/* Content Wrapper with Same Width as Header & Centered Vertically */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6">
        <div className="flex w-[450px] flex-col items-center justify-center text-left 2xl:w-[600px]">
          <h1 className="text-[30px] font-bold text-white md:text-[40px] 2xl:text-[50px]">
            <span className="font-bold">Electronic Shelf Label</span>
          </h1>
          <p className="text-[20px] text-white text-opacity-70 sm:mt-4 md:text-[28px] 2xl:text-[35px]">
            Smart Labels, Smarter Retail
          </p>

          {/* Button */}
          <button
            className="relative mt-[30px] w-[218px] rounded-full bg-white px-8 py-3 font-bold text-black transition-transform duration-300 hover:scale-105 sm:mt-[40px]"
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
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 via-purple-500 to-red-400"></div>
    </div>
  );
};

export default HeroSection;
