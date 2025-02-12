import { Fragment } from "react";
import PropTypes from "prop-types";

const TrustedSection = ({ className = "" }) => {
  const images = [
    "/companies/com-1.png",
    "/companies/com0-2.png",
    "/companies/com-3.png",
    "/companies/com-4.png",
    "/companies/com-5.png",
    "/companies/com-6.png",
    "/companies/com-7.png",
    "/companies/com-8.png",
    "/companies/com-9.png",
    "/companies/com-10.png",
  ];

  const numberOfDuplications = [0, 1, 3];
  return (
    <div
      className={`mb-[60px] mt-[60px] flex w-full items-center justify-center sm:mb-[100px] sm:mt-[100px] xl:mb-[130px] xl:mt-[130px] 2xl:mb-[200px] 2xl:mt-[166px] ${className}`}
    >
      <div className="w-full max-w-[100%] overflow-hidden xl:max-w-[77%]">
        <div className="marquee-scroll-animation flex w-max items-center 2xl:h-[179px]">
          {numberOfDuplications.map((_, dupIndex) => (
            <Fragment key={dupIndex}>
              {images.map((item, i) => (
                <div
                  key={i}
                  className="mx-[20px] flex min-w-[80px] max-w-[150px] items-center justify-center sm:mx-[30px] sm:max-w-[170px] md:mx-[43px] md:min-w-[160px] xl:mx-[25px]"
                  // className="mx-[20px] flex items-center justify-center"
                >
                  <img
                    key={i}
                    src={`${item}`}
                    alt={`work-image-${i}`}
                    width={150} // Adjust accordingly
                    height={70} // Adjust accordingly
                    // className="w-full max-w-[90px] sm:max-w-[110px] lg:max-w-[150px] 2xl:max-w-[170px]"
                    className={`${
                      item ===
                      "/companies/Unitas-removebg-preview-Photoroom.png"
                        ? "h-[30px] max-h-[30px] w-full object-contain  md:h-[60px] md:max-h-[60px]"
                        : "h-[40px] max-h-[40px] w-full object-contain md:h-[70px] md:max-h-[60px]"
                    }`}
                  />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

TrustedSection.propTypes = {
  className: PropTypes.string,
};
export default TrustedSection;
