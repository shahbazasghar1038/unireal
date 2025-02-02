import DigitalSignage from "../../components/digital-signage";
import HeroSection from "../../components/hero-section";
import OurProducts from "../../components/our-products";
import Service from "../../components/service";
import TrustedSection from "../../components/trusted-section";
import ZeroPaper from "../../components/zero-paper";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <TrustedSection />
      <DigitalSignage />
      <Service />
      <ZeroPaper />
      <OurProducts />
    </div>
  );
};

export default Home;
