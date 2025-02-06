import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Import product images
import product1 from "../../../assets/product1.png";
import product2 from "../../../assets/product2.png";
import product3 from "../../../assets/product3.png";
import product4 from "../../../assets/product4.png";
import product5 from "../../../assets/product5.png";
import product6 from "../../../assets/product6.png";
import product7 from "../../../assets/product7.png";
import product8 from "../../../assets/product8.png";
import product9 from "../../../assets/product9.png";
import product10 from "../../../assets/product10.png";
import product11 from "../../../assets/product11.png";
import product12 from "../../../assets/product12.png";

const products = [
  {
    id: 1,
    name: "Stand Alone Digital Signage",
    image: product1,
    specifications: [
      {
        id: 1,
        label: "Panel Brand",
        value: "Full New 100% A+ Grand Brand Panel",
      },
      { id: 2, label: "Display Size", value: "1209mm(H) x 680mm(V)" },
      { id: 3, label: "Panel Ratio", value: "16:09" },
      { id: 4, label: "Resolution", value: "1920 x 1080 / 4K Optional" },
      { id: 5, label: "Viewing Angle", value: "178°/178° (H/V)" },
      { id: 6, label: "Color", value: "16.7M" },
      { id: 7, label: "Back Light", value: "LCD" },
      { id: 8, label: "Brightness", value: "2500 cd/m" },
      { id: 9, label: "Dynamic Contrast Ratio", value: "1000000:1" },
      { id: 10, label: "Connectivity", value: "WiFi, Ethernet, HDMI, USB" },
    ],
  },
  {
    id: 2,
    name: "Outdoor Digital Signage",
    image: product2,
    specifications: [
      { id: 1, label: "Panel Type", value: "IP65 Waterproof LED Display" },
      { id: 2, label: "Brightness", value: "5000 cd/m (Sunlight Readable)" },
      { id: 3, label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { id: 4, label: "Operating Temperature", value: "-30°C to 50°C" },
      { id: 5, label: "Power Supply", value: "AC 110V~240V, 50/60Hz" },
      { id: 6, label: "Viewing Angle", value: "160°/160° (H/V)" },
      { id: 7, label: "Connectivity", value: "4G, WiFi, Ethernet" },
      { id: 8, label: "Glass Type", value: "Tempered Anti-Glare Glass" },
      { id: 9, label: "Lifespan", value: "50,000 Hours" },
      {
        id: 10,
        label: "Sensor",
        value:
          "Human, Light, Screen, Humidity,Temperature, Smoke, Gas, Noise, Flame, Vibration, Safety Monitoring, Ponding, Smog, Collision, and Tilt",
      },
    ],
  },
  {
    id: 3,
    name: "Multimedia Kiosk",
    image: product3,
    specifications: [
      { id: 1, label: "Touch Screen", value: "Capacitive 10-Point Touch" },
      { id: 2, label: "Screen Size", value: "43-inch / 55-inch Options" },
      { id: 3, label: "Resolution", value: "1920 x 1080 (FHD)" },
      { id: 4, label: "CPU", value: "Intel Core i5 / i7 Optional" },
      { id: 5, label: "Operating System", value: "Windows 10 / Android 11" },
      { id: 6, label: "Speakers", value: "Built-in 10W Stereo" },
      { id: 7, label: "Camera", value: "8MP with Face Recognition" },
      { id: 8, label: "Storage", value: "128GB SSD, Expandable" },
    ],
  },
  {
    id: 4,
    name: "Hand Sanitizer Kiosk",
    image: product4,
    specifications: [
      { id: 1, label: "Screen Size", value: "21.5-inch LED Display" },
      { id: 2, label: "Sanitizer Capacity", value: "1000ml Refillable Tank" },
      { id: 3, label: "Resolution", value: "1080p Full HD" },
      { id: 4, label: "Power Supply", value: "Rechargeable Battery / Plug-in" },
      { id: 5, label: "Motion Sensor", value: "Auto Hand Detection" },
      { id: 6, label: "OS", value: "Android 9.0 / Windows 10" },
    ],
  },
  {
    id: 5,
    name: "Face Recognition Kiosk",
    image: product5,
    specifications: [
      { id: 1, label: "Screen Size", value: "15-inch IPS Display" },
      { id: 2, label: "Camera", value: "Dual-Lens Infrared & RGB" },
      {
        id: 3,
        label: "AI Algorithm",
        value: "Facial Recognition (0.3s Speed)",
      },
      { id: 4, label: "Storage", value: "256GB SSD, Expandable" },
      { id: 5, label: "Security", value: "Mask Detection, Temperature Check" },
      { id: 6, label: "Power", value: "DC 12V 5A Adapter" },
    ],
  },
  {
    id: 6,
    name: "Window Advertising LCD",
    image: product6,
    specifications: [
      { id: 1, label: "Brightness", value: "4000 cd/m (Super High)" },
      { id: 2, label: "Display Type", value: "Double-Sided LCD Panel" },
      { id: 3, label: "Resolution", value: "4K UHD" },
      { id: 4, label: "Thickness", value: "Ultra-Thin 9mm Frame" },
      { id: 5, label: "Installation", value: "Hanging / Stand Mount" },
    ],
  },
  {
    id: 7,
    name: "LCD in Bus Station",
    image: product7,
    specifications: [
      { id: 1, label: "Weatherproof", value: "IP67 Certified" },
      { id: 2, label: "Power", value: "Solar-Powered Battery Backup" },
      { id: 3, label: "Connectivity", value: "4G LTE, WiFi" },
      { id: 4, label: "Screen Size", value: "55-inch Outdoor Panel" },
      { id: 5, label: "Operating System", value: "Linux / Android" },
    ],
  },
  {
    id: 8,
    name: "Touch Screen Table",
    image: product8,
    specifications: [
      { id: 1, label: "Screen Type", value: "Multi-Touch Interactive Table" },
      { id: 2, label: "Material", value: "Tempered Glass + Metal Frame" },
      { id: 3, label: "Processor", value: "Intel Core i7" },
      { id: 4, label: "Connectivity", value: "WiFi, Bluetooth, HDMI" },
      { id: 5, label: "Storage", value: "512GB SSD, Expandable" },
    ],
  },
  {
    id: 9,
    name: "Taxi Top LCD",
    image: product9,
    specifications: [
      { id: 1, label: "Brightness", value: "4000 cd/m for Daylight" },
      { id: 2, label: "Resolution", value: "Full HD / 4K" },
      { id: 3, label: "Power", value: "12V Car Battery Powered" },
      { id: 4, label: "Connectivity", value: "4G / GPS Tracking" },
    ],
  },
  {
    id: 10,
    name: "LCD Video Wall",
    image: product10,
    specifications: [
      { id: 1, label: "Bezel Width", value: "3.5mm Ultra-Narrow" },
      { id: 2, label: "Screen Size", value: "55-inch Per Panel" },
      { id: 3, label: "Resolution", value: "Full HD / 4K Options" },
      { id: 4, label: "Power Supply", value: "AC 220V" },
    ],
  },
  {
    id: 11,
    name: "Wall Mount LCD",
    image: product11,
    specifications: [
      { id: 1, label: "Bezel Width", value: "3.5mm Ultra-Narrow" },
      { id: 2, label: "Screen Size", value: "55-inch Per Panel" },
      { id: 3, label: "Resolution", value: "Full HD / 4K Options" },
      { id: 4, label: "Power Supply", value: "AC 220V" },
    ],
  },
  {
    id: 12,
    name: "Stretched LCD",
    image: product11,
    specifications: [
      { id: 1, label: "Bezel Width", value: "3.5mm Ultra-Narrow" },
      { id: 2, label: "Screen Size", value: "55-inch Per Panel" },
      { id: 3, label: "Resolution", value: "Full HD / 4K Options" },
      { id: 4, label: "Power Supply", value: "AC 220V" },
    ],
  },
];

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentProductId = location.state?.currentProductId; // Get selected product ID

  // Find the selected product
  const currentIndex = products.findIndex((p) => p.id === currentProductId);
  const product = products[currentIndex];

  if (!product) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  // State to track the active image index, initialized to the selected product
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  // Handle Previous & Next Image
  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto bg-white p-6">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 flex-wrap mb-5">
        <span
          className="cursor-pointer text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        >
          <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
        </svg>

        <span
          className="cursor-pointer text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap"
          onClick={() => navigate("/products")}
        >
          Products
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        >
          <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
        </svg>

        <span
          className="cursor-pointer text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap"
          onClick={() => navigate("/categories")}
        >
          {product.name}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        >
          <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
        </svg>

        <span className="text-black font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">
          {product.name} Products
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr] gap-6 md:gap-12">
        {/* Left Side: Larger Thumbnails */}
        <div className=" sliderWeb flex flex-row md:flex-col items-center space-x-2 md:space-x-0 md:space-y-6 max-h-[750px] overflow-x-auto md:overflow-y-auto">
          {/* Previous Image Button */}
          <button
            onClick={handlePrevious}
            className="p-2  rounded-full hover:bg-gray-300 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M18 15l-6-6-6 6"></path>
            </svg>
          </button>

          {/* Thumbnails for image navigation */}
          {[
            products[(activeIndex - 1 + products.length) % products.length], // Previous
            products[activeIndex], // Current
            products[(activeIndex + 1) % products.length], // Next
          ].map((imgProduct, index) => (
            <img
              key={imgProduct.id}
              src={imgProduct.image}
              alt={`Thumbnail ${index}`}
              className={`h-40 w-32 cursor-pointer rounded-md border object-cover transition ${
                index === 1 ? "border-gray-600 scale-105" : "border-gray-300"
              }`}
              onClick={() =>
                setActiveIndex(
                  products.findIndex((p) => p.id === imgProduct.id)
                )
              }
            />
          ))}

          {/* Next Image Button */}
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-300 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </button>
        </div>

        <div className=" sliderMobile relative flex items-center space-x-4 overflow-hidden max-w-full">
          {/* Previous Image Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 p-2 bg-white rounded-full shadow hover:bg-gray-300 flex items-center justify-center z-10"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>

          <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
            {[
              products[(activeIndex - 1 + products.length) % products.length], // Previous
              products[activeIndex], // Current
              products[(activeIndex + 1) % products.length], // Next
            ].map((imgProduct, index) => (
              <img
                key={imgProduct.id}
                src={imgProduct.image}
                alt={`Thumbnail ${index}`}
                className={`h-32 w-24 md:h-40 md:w-32 cursor-pointer rounded-md border object-cover transition ${
                  index === 1 ? "border-gray-600 scale-105" : "border-gray-300"
                }`}
                onClick={() =>
                  setActiveIndex(
                    products.findIndex((p) => p.id === imgProduct.id)
                  )
                }
              />
            ))}
          </div>

          {/* Next Image Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 bg-white rounded-full shadow hover:bg-gray-300 flex items-center justify-center z-10"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>

        {/* Main Image (Larger) */}
        <div className="flex flex-1 items-center justify-center rounded-lg bg-gray-100 p-4 md:p-10 shadow-lg w-full max-h-[500px] md:max-h-[750px]">
          <img
            src={products[activeIndex].image} // Corrected to use selected product image
            alt={products[activeIndex].name}
            className="w-full max-h-[510px] object-contain"
          />
        </div>

        {/* Right Side: Product Information (Smaller) */}
        <div className="flex flex-col space-y-6 w-full md:w-[500px]">
          <h1 className="text-3xl font-bold">{products[activeIndex].name}</h1>

          {/* Available Sizes */}
          <div>
            <h3 className="font-semibold text-lg">Available Sizes</h3>
            <div className="mt-3 flex flex-wrap gap-1">
              {[32, 43, 49, 55, 65, 75, 86].map((size) => (
                <span
                  key={size}
                  className="rounded-md border border-gray px-4 py-1 text-md font-medium cursor-pointer mx-1"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <h3 className="mb-2 font-semibold">Specifications:</h3>
          <div className="rounded-lg bg-gray-100 px-6 py-4 shadow-md min-h-[440px]">
            <div className="flex justify-between pb-2 text-md">
              <span className="font-medium">Screen</span>
            </div>

            {products[activeIndex].specifications?.map((spec) => (
              <div key={spec.id} className="flex justify-between pb-2 text-md">
                <span className="font-medium w-1/2">{spec.label}</span>
                <span className="text-gray-600 w-1/2 text-left">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 w-full">
        <h3 className="mt-4 font-semibold flex  gap-1 cursor-pointer mx-auto md:ml-[855px] lg:ml-[855px] sx:ml-[855px]">
          More Specification
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </h3>
      </div>
    </div>
  );
};

export default ProductDetail;
