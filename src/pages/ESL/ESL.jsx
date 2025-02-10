import ECLSlider from "./partials/ECLSlider";
import HeroSection from "./partials/HeroSectio";
import ProductCars from "./partials/ProductCars";
import SelfSection from "./partials/SelfSection";
import SolutionSection from "./partials/SolutionSection";

const ECL = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <SelfSection />
      <ECLSlider />
      {/* cards section  */}

      <SolutionSection />

      <ProductCars />
    </div>
  );
};

export default ECL;
