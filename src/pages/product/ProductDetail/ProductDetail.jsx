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
  { id: 1, name: "Stand Alone Digital Signage", image: product1 },
  { id: 2, name: "Outdoor Digital Signage", image: product2 },
  { id: 3, name: "Multimedia Kiosk", image: product3 },
  { id: 4, name: "Hand Sanitizer Kiosk", image: product4 },
  { id: 5, name: "Face Recognition Kiosk", image: product5 },
  { id: 6, name: "Window Advertising LCD", image: product6 },
  { id: 7, name: "LCD in Bus Station", image: product7 },
  { id: 8, name: "Touch Screen Table", image: product8 },
  { id: 9, name: "Taxi Top LCD", image: product9 },
  { id: 10, name: "LCD Video Wall", image: product10 },
  { id: 11, name: "Wall Mount LCD", image: product11 },
  { id: 12, name: "Stretched LCD", image: product12 },
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
    <div className="max-w-[1250px] mx-auto bg-white p-6">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-gray-500">
        <span
          className="text-gray-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </span>{" "}
        &gt;{" "}
        <span
          className="text-gray-400 cursor-pointer"
          onClick={() => navigate("/products")}
        >
          Products
        </span>{" "}
        &gt; <span className="font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-12">
        {/* Left Side: Image Gallery */}
        <div className="flex space-x-6">
          {/* Sidebar Thumbnails with Navigation */}
          <div className="flex flex-col items-center space-y-3 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
            {/* Previous Image Button */}
            <button
              onClick={handlePrevious}
              className="p-2 bg-white rounded-full hover:bg-gray-300 flex items-center justify-center"
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
                className={`h-24 w-20 cursor-pointer rounded-md border object-cover transition ${
                  index === 1 ? "border-gray-500" : "border-gray-200"
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
              className="p-2 bg-white rounded-full hover:bg-gray-300 flex items-center justify-center"
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

          {/* Main Image */}
          <div className="flex flex-1 items-center justify-center rounded-lg bg-gray-100 p-8 shadow-lg w-full max-h-[724px]">
            <img
              src={products[activeIndex].image} // Corrected to use selected product image
              alt={products[activeIndex].name}
              className="w-full max-h-[600px] object-contain"
            />
          </div>
        </div>

        {/* Right Side: Product Information */}
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl font-bold">{products[activeIndex].name}</h1>

          {/* Available Sizes */}
          <div>
            <h3 className="font-semibold text-lg">Available Sizes:</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {[32, 43, 49, 55, 65, 75, 86].map((size) => (
                <span
                  key={size}
                  className="rounded-md bg-gray-200 px-6 py-3 text-md font-medium"
                >
                  {size}"
                </span>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <h3 className="mb-2 font-semibold">Specifications:</h3>
          <div className="rounded-lg bg-gray-100 px-8 py-4 shadow-lg">
            <div className="flex justify-between pb-2 text-md">
              <span className="font-medium">Screen</span>
            </div>
            <div className="flex justify-between pb-2 text-md">
              <span className="font-medium">Panel Brand</span>
              <span className="text-gray-600">
                Full New 100% A+ Grand Brand Panel
              </span>
            </div>
            <div className="flex justify-between pb-2 text-md">
              <span className="font-medium">Resolution</span>
              <span className="text-gray-600">1920 x 1080 / 4K Optional</span>
            </div>
            <div className="flex justify-between pb-2 text-md">
              <span className="font-medium">Viewing Angle</span>
              <span className="text-gray-600">178°/178° (H/V)</span>
            </div>
            <div className="flex justify-between pb-2 text-md">
              <span className="font-medium">Brightness</span>
              <span className="text-gray-600">2500 cd/m</span>
            </div>
            <div className="flex justify-between pb-2 text-md">
              <span className="font-medium">Color</span>
              <span className="text-gray-600">16.7M</span>
            </div>
            <div className="flex justify-between pb-2 text-md">
              <span className="font-medium">Back Light</span>
              <span className="text-gray-600">LCD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
