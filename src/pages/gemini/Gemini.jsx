import AiDriven from "./particals/ai-driven";
import Cta from "./particals/cta";
import Email from "./particals/email";
import HeroSection from "./particals/hero-section";
import HowGeminiWorks from "./particals/how-gemini-works";
import KeyFeatures from "./particals/key-features";
import Promo from "./particals/promo";

const Gemini = () => {
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
