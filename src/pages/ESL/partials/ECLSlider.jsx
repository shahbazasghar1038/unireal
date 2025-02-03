<<<<<<< HEAD
import React, { useState } from "react";
=======
import { useState } from "react";
>>>>>>> 1522adea6b901f862d91b2e29d4a1d974a37864a
import slide1 from "../../../assets/slide1.png";

const ECLSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
<<<<<<< HEAD
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
=======
    { id: 1, imageUrl: slide1,content:'Fresh Food',subContent:'' },
    { id: 2, imageUrl: slide1,content:'Retail',subContent:'' },
    { id: 3, imageUrl: slide1,content:'Pharmacy',subContent:'' },
    { id: 4, imageUrl: slide1,content:'Digital Signage',subContent:'' },
>>>>>>> 1522adea6b901f862d91b2e29d4a1d974a37864a
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
<<<<<<< HEAD
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
          }}
        >
          <div className="slide-content">
            <h2 className="slide-heading">{slide.heading}</h2>
            <p className="slide-text">{slide.text}</p>
          </div>
=======
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <p>{slide.content}<br/></p>
          <span>{slide.subContent}</span>
>>>>>>> 1522adea6b901f862d91b2e29d4a1d974a37864a
        </div>
      ))}
    </div>
  );
};

export default ECLSlider;
