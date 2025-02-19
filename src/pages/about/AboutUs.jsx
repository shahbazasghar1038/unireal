import TrustedSection from "../../components/trusted-section";
import Email from "../gemini/particals/email";

const AboutUs = () => {
  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="mx-auto flex flex-col items-center justify-center bg-black text-white">
        {/* Hero Section */}
        <section className="flex max-w-[370px] flex-col items-center justify-center gap-[25px] px-5 pb-[70px] pt-[70px] text-center sm:max-w-[1150px] md:gap-[33px] md:pt-[120px] 2xl:max-w-[1455px] 2xl:pt-[149px]">
          <h2 className="w-fit bg-company-gradient-text bg-clip-text text-[40px] font-[500] text-transparent lg:text-[55px]">
            Who We Are
          </h2>
          <p className="mobile-company-text-justify text-center text-[17px] text-[#D8D8D8] sm:text-[19px] lg:text-[24px] lg:leading-[36px] 2xl:text-[30px] 2xl:leading-[38px]">
            At Unireal, we are at the forefront of the digital revolution,
            transforming the way businesses interact with their customers and
            manage their operations. As a cutting-edge digital technology firm,
            we specialize in bringing innovative solutions to spaces like
            retail, e-commerce, and beyond. Our mission is to empower businesses
            with the tools they need to thrive in an increasingly digital world,
            leveraging the power of AI and data to deliver smarter, more
            impactful results.
          </p>
        </section>

        {/* Laptop Section */}
        <div className="w-full pb-[0px] pt-[30px] sm:pt-[40px] md:pt-[76px]">
          <div className="flex flex-col items-center justify-start lg:flex-row lg:items-start">
            {/* Laptop Image */}
            <img
              src={"/laptop-grade.svg"}
              alt="Laptop Dashboard"
              className="w-full max-w-[500px] xl:max-w-[700px] 2xl:max-w-[800px]"
            />

            {/* Text Section */}
            <div className="relative max-w-[700px] py-4 pl-5 text-center md:py-5 md:pl-0 lg:mt-[150px] 2xl:mt-[200px] 2xl:max-w-[850px]">
              {/* Gradient Line */}
              <div className="absolute bottom-0 top-0 w-[6px] bg-contact-gradient" />
              <p className="pl-[20px] pr-4 text-start font-[400] text-[20xp] text-white md:pl-[30px] md:pr-0 md:text-[24px] md:leading-[32px] 2xl:text-[30px] 2xl:leading-[38px]">
                We are constantly innovating and exploring new ways to integrate
                AI and data-driven insights into everyday business operations.
                At Unireal, we believe that technology should be seamless,
                sustainable, and transformative.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="justify-centerpb-[150px] mt-[80px] flex max-w-[700px] flex-col items-center px-5 pb-[40px] md:pb-[70px] lg:mt-[-80px] lg:px-0 2xl:max-w-[850px] 2xl:pb-[150px]">
          <h2 className="w-fit bg-company-gradient-text bg-clip-text text-[40px] font-[500] text-transparent lg:text-[55px]">
            Join Us
          </h2>
          <p className="mt-[24px] text-center text-[19px] text-[white] lg:text-[24px] lg:leading-[36px] 2xl:mt-[28px] 2xl:text-[30px] 2xl:leading-[38px]">
            On this journey as we continue to push the boundaries of what’s
            possible, creating smarter, more connected spaces for businesses and
            consumers alike.
          </p>

          <button className="animated-gradient-bg-div gradient-hover-effect z-[10] mt-[60px] h-[50px] w-[280px] rounded-full p-[2px] sm:h-[50px] md:p-[3px] lg:h-[55px] 2xl:mt-[80px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-[20px] font-[500] lg:text-[25px]">
              Contact Us
            </div>
          </button>
        </section>
        <TrustedSection className="!p-0" />
      </div>

      <Email />
    </>
  );
};

export default AboutUs;
