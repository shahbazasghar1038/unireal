import React, { useState } from "react";
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
    <div className="slider mx-auto">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleSlideClick(index)}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
          }}
        >
          <div className="slide-content">
            <h2 className="slide-heading">{slide.heading}</h2>
            <p className="slide-text">{slide.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ECLSlider;
