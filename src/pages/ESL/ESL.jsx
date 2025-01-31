import ECLSlider from "./partials/ECLSlider";
import ProductCars from "./partials/ProductCars";
import SolutionSection from "./partials/SolutionSection";

const ECL = () => {
  return <div className="bg-black">
 <ECLSlider/>
 {/* cards section  */}

<p className="ecl-heading pb-4">Solutions</p>
<p className="ecl-sub-heading">Standardized also personalized solution</p>

<SolutionSection/>


<ProductCars/>

</div>;
};

export default ECL;
