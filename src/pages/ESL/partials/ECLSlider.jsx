import { useState } from "react";
import slide1 from "../../../assets/slide1.png";

const ECLSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, imageUrl: slide1,content:'Fresh Food',subContent:'' },
    { id: 2, imageUrl: slide1,content:'Retail',subContent:'' },
    { id: 3, imageUrl: slide1,content:'Pharmacy',subContent:'' },
    { id: 4, imageUrl: slide1,content:'Digital Signage',subContent:'' },
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
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <p>{slide.content}<br/></p>
          <span>{slide.subContent}</span>
        </div>
      ))}
    </div>
  );
};

export default ECLSlider;
