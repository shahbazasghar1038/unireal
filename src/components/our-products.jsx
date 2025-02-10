import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef } from "react";
import "@splidejs/react-splide/css";

const OurProducts = () => {
  const sliderRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center pb-[70px] pt-[50px] sm:pb-[100px] sm:pt-[70px] lg:pb-[166px]">
      <h1 className="text-center text-[40px] font-[700]">Our Products</h1>
      <div className="w-full px-2 md:pl-[6%]">
        <div className={"relative mt-[40px] w-full sm:mt-[50px]"}>
          <Splide
            ref={sliderRef}
            options={{
              width: "100%",
              perPage: 2.8,
              perMove: 1,
              // drag: true, // Enable drag
              // dragMin: 0.05, // Minimum drag distance (increase for more sensitivity)
              // dragMax: 0.1, // Maximum drag distance (adjust for smoother drag)
              pagination: false,
              arrows: false,
              type: "loop",
              gap: "20px",
              breakpoints: {
                1277: {
                  perPage: 1.5,
                },
                800: {
                  perPage: 1,
                },
              },
              autoplay: true,
              interval: 3000, // Move to the next slide every 5 seconds
              speed: 500, // Adjust the speed of the transition in milliseconds (default: 400)
              transition: "fade",
            }}
            hasTrack={true}
          >
            {/* <SplideTrack> */}
            <SplideSlide>
              {" "}
              <div className="flex w-full flex-col items-center justify-center gap-[29px] rounded-[20px] bg-[#1D1D1F] px-1 pb-[0px] pt-[39px] sm:px-0 lg:rounded-[47px]">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-center text-[30px] font-[700] text-[#F5F5F7]">
                    Touch Screen Table
                  </h2>
                  <p className="text-center text-[17px] font-[700] text-[#F5F5F7]">
                    1 line Description
                  </p>
                </div>
                <div className="flex h-[400px] items-center justify-center">
                  <img
                    src="/table.png"
                    alt=""
                    className="w-full max-w-[427px]"
                  />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex w-full flex-col items-center justify-center gap-[29px] rounded-[20px] bg-[#1D1D1F] px-1 pb-[0px] pt-[39px] sm:px-0 lg:rounded-[47px]">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-center text-[30px] font-[700] text-[#F5F5F7]">
                    Digital Posters{" "}
                  </h2>
                  <p className="text-center text-[17px] font-[700] text-[#F5F5F7]">
                    1 line Description{" "}
                  </p>
                </div>
                <div className="flex h-[400px] items-center justify-center">
                  <img
                    src="/hieght.png"
                    alt=""
                    className="w-full max-w-[326px]"
                  />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex w-full flex-col items-center justify-center gap-[29px] rounded-[20px] bg-[#1D1D1F] px-1 pb-[0px] pt-[39px] sm:px-0 lg:rounded-[47px]">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-center text-[30px] font-[700] text-[#F5F5F7]">
                    ESL{" "}
                  </h2>
                  <p className="text-center text-[17px] font-[700] text-[#F5F5F7]">
                    1 line Description
                  </p>
                </div>
                <div className="flex h-[400px] items-center justify-center">
                  <img
                    src="/mobiles.png"
                    alt=""
                    className="w-full max-w-[360px]"
                  />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              {" "}
              <div className="flex w-full flex-col items-center justify-center gap-[29px] rounded-[20px] bg-[#1D1D1F] px-1 pb-[0px] pt-[39px] sm:px-0 lg:rounded-[47px]">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-center text-[30px] font-[700] text-[#F5F5F7]">
                    Touch Screen Table
                  </h2>
                  <p className="text-center text-[17px] font-[700] text-[#F5F5F7]">
                    1 line Description
                  </p>
                </div>
                <div className="flex h-[400px] items-center justify-center">
                  <img
                    src="/table.png"
                    alt=""
                    className="w-full max-w-[427px]"
                  />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex w-full flex-col items-center justify-center gap-[29px] rounded-[20px] bg-[#1D1D1F] px-1 pb-[0px] pt-[39px] sm:px-0 lg:rounded-[47px]">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-center text-[30px] font-[700] text-[#F5F5F7]">
                    Digital Posters{" "}
                  </h2>
                  <p className="text-center text-[17px] font-[700] text-[#F5F5F7]">
                    1 line Description{" "}
                  </p>
                </div>
                <div className="flex h-[400px] items-center justify-center">
                  <img
                    src="/hieght.png"
                    alt=""
                    className="w-full max-w-[326px]"
                  />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex w-full flex-col items-center justify-center gap-[29px] rounded-[20px] bg-[#1D1D1F] px-1 pb-[0px] pt-[39px] sm:px-0 lg:rounded-[47px]">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-center text-[30px] font-[700] text-[#F5F5F7]">
                    ESL{" "}
                  </h2>
                  <p className="text-center text-[17px] font-[700] text-[#F5F5F7]">
                    1 line Description
                  </p>
                </div>
                <div className="flex h-[400px] items-center justify-center">
                  <img
                    src="/mobiles.png"
                    alt=""
                    className="w-full max-w-[360px]"
                  />
                </div>
              </div>
            </SplideSlide>
            {/* </SplideTrack> */}
          </Splide>
        </div>
      </div>
      <div className="mt-[40px] flex items-center justify-center md:mt-[50px] lg:mt-[70px] 2xl:mt-[90px]">
        <button className="animated-gradient-bg-div gradient-hover-effect h-[55px] w-[240px] rounded-full p-[2px] md:h-[66px] md:w-[386px] md:p-[3px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#13111A] text-[20px] font-[500] md:text-[25px]">
            See All
          </div>
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
