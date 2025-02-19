import { Link } from "react-router-dom";

const CareersPage = () => {
  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex w-full flex-col items-center justify-center px-5">
      {/* Hero Section */}
      <div className="flex w-full max-w-[1230px] flex-col items-center justify-center pb-[140px] pt-[160px] md:pb-[200px] 2xl:pb-[230px] 2xl:pt-[219px]">
        <h1 className="text-center text-[48px] font-[500] leading-[1.4] sm:text-[75px] sm:font-[500] md:leading-[1.3] lg:text-[99px] lg:leading-[95px] 2xl:text-[99px]">
          Join the Future of <br className="hidden sm:flex" />{" "}
          <span className="w-fit bg-custom-text-gradient bg-clip-text text-transparent">
            Digital Innovation
          </span>
        </h1>
        <p className="mt-5 max-w-[780px] text-center text-[18px] font-[400] leading-[1.5] sm:text-[25px] lg:text-[30px] lg:leading-[43px] 2xl:mt-[30px] 2xl:text-[30px]">
          At Unireal, we’re redefining retail with AI-driven signage and IoT
          solutions. Be a part of something bigger.
        </p>
        <div className="relative mt-[40px] flex flex-col items-center gap-4 sm:mt-[50px] sm:flex-row sm:gap-[33px] lg:mt-[70px] 2xl:mt-[98px]">
          <button
            onClick={() => scrollToSection("#jobs")}
            className="animated-gradient-bg-div gradient-hover-effect h-[50px] w-[300px] rounded-full p-[2px] sm:h-[55px] md:w-[386px] md:p-[3px] lg:h-[66px]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-[20px] font-[500] lg:text-[25px]">
              See Open Positions
            </div>
          </button>
        </div>
      </div>
      {/* Why Work at Unireal Section */}
      <section className="mx-auto flex max-w-[1300px] flex-col items-center justify-center gap-[30px] rounded-[30px] bg-[#1D1D1F] px-4 py-[40px] text-center md:px-6 md:py-[80px] lg:px-[70px] 2xl:max-w-[1600px] 2xl:px-[80px] 2xl:py-[90px]">
        <h2 className="text-[30px] font-bold lg:text-[50px]">
          Why Work at Unireal?
        </h2>
        <p className="mx-auto w-full text-center text-[16px] font-[400] text-gray-200 sm:text-[18px] lg:text-justify lg:text-[24px] 2xl:text-center 2xl:text-[26px]">
          At Unireal, we are redefining the future of retail with cutting-edge
          digital signage and Electronic Shelf Label (ESL) solutions powered by
          AI and IoT. Joining our team means being part of an innovative,
          fast-growing company that values creativity, collaboration, and
          technological excellence. We foster a dynamic work environment where
          your ideas matter, and we invest in your growth through continuous
          learning and career development opportunities. Whether you are
          passionate about technology, design, or business, Unireal offers a
          space where you can thrive, make an impact, and help shape the next
          generation of smart retail solutions.
        </p>
      </section>
      {/* Current Openings Section */}
      <section
        id="jobs"
        className="mx-auto flex w-full flex-col items-center justify-center gap-[60px] pb-[80px] pt-[100px] text-center md:pb-[100px] md:pt-[190px]"
      >
        <h2 className="text-[30px] font-bold lg:text-[50px]">
          Current Openings
        </h2>
        <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-2 2xl:max-w-[1312px]">
          {[
            "Business Development Executive",
            "Sales Lead",
            "Flutter Developer",
            "Backend Engineer",
          ].map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-between gap-10 rounded-[25px] bg-[#1D1D1F] px-6 py-[40px] md:flex-row md:gap-0 md:rounded-[48px] md:px-[80px] md:py-[45px] 2xl:py-[50px]"
            >
              <div>
                <h3 className="text-[24px] font-bold sm:text-[27px] 2xl:text-[30px]">
                  {item}
                </h3>
                <p className="text-[22px] text-[#A4A4A4] sm:text-[26px] md:text-start 2xl:text-[30px]">
                  Remote
                </p>
              </div>
              <button className="animated-gradient-bg-div gradient-hover-effect z-[100] h-[50px] w-[181px] rounded-full p-[2px] sm:h-[55px] md:p-[3px] lg:h-[48px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1D1D1F] text-[20px] font-[500] lg:text-[18px]">
                  Apply
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto flex flex-col items-center justify-center pb-[50px] pt-[50px] text-center md:pb-[100px] md:pt-[100px] 2xl:pt-[130px]">
        <h2 className="text-[35px] font-bold lg:text-[50px]">
          Drop us a line{" "}
        </h2>
        <p className="mt-[24px] w-full max-w-[900px] text-[18px] font-[400] leading-[1.5] md:text-[26px] lg:leading-[38px] 2xl:max-w-[1000px] 2xl:text-[30px] 2xl:leading-[45px]">
          If you haven&apos;t found the right job for you, don&apos;t hesitate
          to get in touch with us. We are growing and always looking for people
          who can join the journey and help shape the future of recruitment
          technology.
        </p>

        <Link
          to={"/contact"}
          className="animated-gradient-bg-div gradient-hover-effect z-[10] mt-[70px] h-[50px] w-[300px] rounded-full p-[2px] sm:h-[55px] md:w-[386px] md:p-[3px] lg:h-[66px] 2xl:mt-[80px]"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-black text-[20px] font-[500] lg:text-[25px]">
            Contact Us
          </div>
        </Link>
      </section>
    </div>
  );
};

export default CareersPage;
