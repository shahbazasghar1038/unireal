import { Fragment } from "react";

const TrustedSection = () => {
  const images = ["/united.png", "/premier.png", "/coke.png", "/lion.png"];
  const numberOfDuplications = [0, 1, 3, 4, 5, 6];
  return (
    <div className="flex items-center justify-center w-full mt-[60px] sm:mt-[100px] xl:mt-[130px] 2xl:mt-[166px] mb-[60px] sm:mb-[100px] xl:mb-[130px] 2xl:mb-[200px] ">
      <div className="w-full overflow-hidden max-w-[100%] xl:max-w-[77%]">
        <div className="marquee-scroll-animation flex w-max items-center  2xl:h-[179px] ">
          {numberOfDuplications.map((_, dupIndex) => (
            <Fragment key={dupIndex}>
              {images.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center mx-[20px] sm:mx-[30px] md:mx-[43px] xl:mx-[25px]"
                >
                  <img
                    key={i}
                    src={`${item}`}
                    alt={`work-image-${i}`}
                    className="w-full max-w-[90px] sm:max-w-[110px] lg:max-w-[150px] 2xl:max-w-[170px]"
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

export default TrustedSection;
