import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState } from "react";
import slide1 from "../../../assets/slide1.png";
const ECLSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: 1,
      imageUrl: slide1,
      heading: "FRESH FOOD",
      text: "Enable frequent price change in one day, dramatically save paper cost",
    },
    {
      id: 2,
      imageUrl: slide1,
      heading: "RETAIL",
      text: "Optimize shopping experience with smart displays",
    },
    {
      id: 3,
      imageUrl: slide1,
      heading: "PHARMACY",
      text: "Ensure accurate pricing with digital labeling",
    },
    {
      id: 4,
      imageUrl: slide1,
      heading: "DIGITAL SIGNAGE",
      text: "Engage customers with dynamic promotions",
    },
  ];

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-[60px] px-4 pb-[40px] pt-[20px] sm:px-5 lg:pb-[60px] lg:pt-[60px]">
      <p className="text-center text-[40px] font-[700]">Services</p>

      <div
        onMouseLeave={() => handleSlideClick(0)}
        className="mx-auto hidden w-full items-center justify-center gap-[14px] md:flex"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all flex-[1] flex relative items-center justify-center duration-700 rounded-[21px] overflow-hidden h-[500px] 2xl:h-[700px] ${
              activeIndex === index ? "flex-[5] md:!flex-[4]" : ""
            }`}
            onMouseEnter={() => handleSlideClick(index)}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center left-0 top-0 h-full w-full bg-white-shade transition-all duration-700 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex w-full flex-col items-start justify-center gap-[20px] pl-[12%] text-black">
                <div className="max-w-[500px] space-y-2">
                  <h1 className="text-[20px] font-[700] md:text-[30px]">
                    {slide.heading}
                  </h1>
                  <p className="font-[400] md:text-[25px]">{slide.text}</p>
                </div>
              </div>
            </div>

            <div
              className={`flex h-full w-full items-center justify-center bg-black/40 transition-all duration-300 ${
                activeIndex === index ? "opacity-0" : "opacity-100"
              }`}
            >
              <h1 className="text-[22px] font-[700] text-white">
                {slide.heading}
              </h1>
            </div>

            {/* <div className="slide-content">
              <h2 className="slide-heading">{slide.heading}</h2>
              <p className="slide-text">{slide.text}</p>
            </div> */}
          </div>
        ))}
      </div>
      <div className={"w-full md:hidden"}>
        <Splide
          options={{
            width: "100%",
            perPage: 1,
            perMove: 1,
            drag: true,
            pagination: false,
            arrows: false,
            type: "loop",
            gap: "20px",
            autoplay: true,
            interval: 6000, // Move to the next slide every 5 seconds
            speed: 2000,
            transition: "fade",
          }}
          hasTrack={true}
        >
          {slides?.map((slide, index) => {
            return (
              <SplideSlide key={index}>
                <div
                  key={index}
                  className={`relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-[10px] bg-center transition-all duration-700 2xl:h-[700px]`}
                  style={{
                    backgroundImage: `url(${slide.imageUrl})`,
                  }}
                >
                  <div
                    className={`absolute inset-0 left-0 top-0 flex h-full w-full items-center justify-center bg-black/40 transition-all duration-700`}
                  >
                    <div className="flex w-full flex-col items-center justify-center gap-[20px] px-4 text-white">
                      <div className="max-w-[500px] space-y-2">
                        <h1 className="text-center text-[25px] font-[700] md:text-[30px]">
                          {slide.heading}
                        </h1>
                        <p className="text-center text-[18px] font-[400] md:text-[25px]">
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default ECLSlider;
