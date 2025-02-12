import { useLocation } from "react-router-dom";
import AiDriven from "./particals/ai-driven";
import Cta from "./particals/cta";
import Email from "./particals/email";
import HeroSection from "./particals/hero-section";
import HowGeminiWorks from "./particals/how-gemini-works";
import KeyFeatures from "./particals/key-features";
import Promo from "./particals/promo";
import { useEffect } from "react";

const Gemini = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location.hash]);
  return (
    <div className="pt-[80px]">
      <HeroSection />
      <KeyFeatures />
      <HowGeminiWorks />
      <AiDriven />
      <Promo />
      <Email />
      <Cta />
    </div>
  );
};

export default Gemini;
