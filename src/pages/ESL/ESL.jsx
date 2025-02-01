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
      <p className="ecl-heading pb-10">Services</p>
      <ECLSlider />
      {/* cards section  */}

      <p className="ecl-heading mt-16">Solutions</p>
      <p className="ecl-sub-heading">Standardized also personalized solution</p>

      <SolutionSection />

      <p className="ecl-heading pb-6 mt-25">Our Products</p>

      <ProductCars />
    </div>
  );
};

export default ECL;
