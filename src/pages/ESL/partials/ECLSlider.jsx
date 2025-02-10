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
    <div className="flex w-full flex-col items-center justify-center gap-[60px] pb-[60px] pt-[100px]">
      <p className="text-center text-[40px] font-[700]">Services</p>

      <div className="mx-auto flex w-full items-center justify-center gap-[14px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex-1 transition-all h-[700px] ${
              activeIndex === index ? "flex-[2]" : ""
            }`}
            onMouseEnter={() => handleSlideClick(index)}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            {/* <div className="slide-content">
              <h2 className="slide-heading">{slide.heading}</h2>
              <p className="slide-text">{slide.text}</p>
            </div> */}
            flsdkjlsadjlksdjlkasdjlkasjdlkasjdlk
          </div>
        ))}
      </div>
    </div>
  );
};

export default ECLSlider;
