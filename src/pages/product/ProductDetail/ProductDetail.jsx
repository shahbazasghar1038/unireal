import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const products = location.state?.products || []; // Get all products
  const currentProductId = location.state?.currentProductId; // Get current product ID
  const clickedImageIndex = location.state?.clickedImageIndex || 0; // Retrieve the clicked image index

  // Find the current product
  const currentIndex = products.findIndex((p) => p.id === currentProductId);
  const product = products[currentIndex];

  // Handle case when product is not found
  if (!product) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  // All product images (replace with actual image data)
  const allImages = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
  ];

  // State to track the active image index (initialize from clicked index)
  const [activeIndex, setActiveIndex] = useState(clickedImageIndex);

  // Update active image index when product changes or when clicked image changes
  useEffect(() => {
    setActiveIndex(clickedImageIndex); // Set active index based on the clicked index
  }, [product, clickedImageIndex]);

  // Function to get random index for previous image (to prevent repeating images)
  const getRandomIndex = () => {
    return Math.floor(Math.random() * allImages.length);
  };

  // Handle Previous Image
  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : getRandomIndex()
    );
  };

  // Handle Next Image
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < allImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Current, Previous, and Next Image Logic
  const images = [
    allImages[(activeIndex - 1 + allImages.length) % allImages.length], // Previous Image
    allImages[activeIndex], // Current Image
    allImages[(activeIndex + 1) % allImages.length], // Next Image
  ];

  return (
    <div className="max-w-[1250px] mx-auto bg-white p-6">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-gray-500">
        <span className="text-gray-400">Home</span> &gt;{" "}
        <span className="text-gray-400">Products</span> &gt;{" "}
        <span className="font-medium">{product.name}</span>
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
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`h-24 w-20 cursor-pointer rounded-md border object-cover transition ${
                  index === 1 ? "border-gray-500" : "border-gray-200"
                }`}
                onClick={() => setActiveIndex(index)} // Click to update main image
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

          {/* Main Image with Enhanced Width */}
          <div className="flex flex-1 items-center justify-center rounded-lg bg-gray-100 p-8 shadow-lg w-full max-h-[724px]">
            <img
              src={allImages[activeIndex]} // Main image updates dynamically based on activeIndex
              alt={product.name}
              className="w-full max-h-[600px] object-contain"
            />
          </div>
        </div>

        {/* Right Side: Product Information */}
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl font-bold">{product.name}</h1>

          {/* Available Sizes */}
          <div>
            <h3 className="font-semibold text-lg">Available Sizes:</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {[32, 43, 49, 55, 65, 75, 86].map((size) => (
                <span
                  key={size}
                  className="rounded-md bg-gray-200 px-6 py-3 text-md font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <h3 className="mb-2 font-semibold">Specifications:</h3>
          <div className="rounded-lg bg-gray-100 px-8 py-4 shadow-lg">
            <div className="flex justify-between pb-2 text-md">
              <span className="font-medium font-semibold">Screen</span>
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
