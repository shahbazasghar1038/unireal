import Artboard1 from "../../assets/Artboard1.png";
import TrustedSection from "../../components/trusted-section";
import Newsletter from "../../components/Newsletter/Newsletter";
const AboutUs = () => {
  return (
    <div className="bg-black text-white  px-4 sm:px-16 lg:px-16 my-24 mx-auto">
      {/* Hero Section */}

      <section
        className="p-12 rounded-[30px] text-center mx-auto mb-16"
        style={{ maxWidth: "1664px" }}
      >
        <h2 className=" mb-4 mt-4 bg-gradient-to-r from-[#42dcff] via-[#a852ff] to-[#fe43aa] bg-clip-text text-3xl font-bold text-transparent">
          Who We Are
        </h2>
        <p className="  text-gray-300 sm:text-sm lg:text-xl  mx-auto">
          At Unireal, we are at the forefront of the digital revolution,
          transforming the way businesses interact with their customers and
          manage their operations. As a cutting-edge digital technology firm, we
          specialize in bringing innovative solutions to spaces like retail,
          e-commerce, and beyond. Our mission is to empower businesses with the
          tools they need to thrive in an increasingly digital world, leveraging
          the power of AI and data to deliver smarter, more impactful results.
        </p>
      </section>
      <div
        className="relative w-full  h-full flex items-center justify-center bg-gradient-to-r from-black via-purple-700/60 to-blue-800/60"
        style={{
          background:
            "radial-gradient(circle at center, rgba(44, 44, 84, 0.8), black 50%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Laptop Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={Artboard1}
              alt="Laptop Dashboard"
              className="w-4/5 lg:w-full drop-shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 px-6 lg:px-12 text-center lg:text-left mt-8 lg:mt-0 relative">
            {/* Gradient Line */}
            <div
              className="absolute left-0 top-0 h-full w-1 rounded-full hidden lg:block"
              style={{
                background:
                  "linear-gradient(to bottom, #42dcff, #a852ff, #fe43aa)",
              }}
            />

            <p className="text-gray-300 sm:text-sm lg:text-xl">
              We are constantly innovating and exploring new ways to integrate
              AI and data-driven insights into everyday business operations. At
              Unireal, we believe that technology should be seamless,
              sustainable, and transformative.
            </p>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <section className="text-center py-16 max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl bg-gradient-to-r from-[#42dcff] via-[#a852ff] to-[#fe43aa] bg-clip-text text-3xl font-bold text-transparent">
          Join Us
        </h2>
        <p className="mt-4 text-gray-300 sm:text-sm lg:text-xl  max-w-[800px] mx-auto">
          On this journey as we continue to push the boundaries of what’s
          possible, creating smarter, more connected spaces for businesses and
          consumers alike.
        </p>
        <button
          type="submit"
          className="relative w-[200px] rounded-full px-8 py-3 my-16 font-medium text-white transition-transform duration-300 hover:scale-105"
          style={{
            background: "#000",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(#000, #000), linear-gradient(90deg, #00f0ff, #7c35ff, #ff9d35)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            WebkitBackgroundClip: "padding-box, border-box",
          }}
        >
          Contact Us
        </button>
      </section>
      <section style={{marginTop:"-5rem"}}>
        <TrustedSection/>
      </section>
      <section>
        <Newsletter/>
      </section>
    </div>
  );
};

export default AboutUs;
