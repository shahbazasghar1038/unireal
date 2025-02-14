/* eslint-disable no-unused-vars */
import {
  AlignJustify,
  ChevronLeft,
  ChevronRight,
  Columns,
  Grid,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import product1 from "../../../assets/product1.png";
import Newsletter from "../../../components/Newsletter/Newsletter";

import mwe601 from "../../../assets/digitalSignage/mwe601.jpg";
import mwe603 from "../../../assets/digitalSignage/mwe603.jpg";
import mwe604 from "../../../assets/digitalSignage/mwe604.jpg";
import mwe662 from "../../../assets/digitalSignage/mwe662.jpg";
import mwe701 from "../../../assets/digitalSignage/mwe701.jpg";
import mwe763 from "../../../assets/digitalSignage/mwe763.jpg";
import mwe804 from "../../../assets/digitalSignage/mwe804.jpg";
import mwe861 from "../../../assets/digitalSignage/mwe861.jpg";
import mwe863 from "../../../assets/digitalSignage/mwe863.jpg";
import mwe912 from "../../../assets/digitalSignage/mwe912.jpg";
import mwe915 from "../../../assets/digitalSignage/mwe915.jpg";
import mwe930 from "../../../assets/digitalSignage/mwe930.jpg";
import mwe957 from "../../../assets/digitalSignage/mwe957.jpg";
import mwe986 from "../../../assets/digitalSignage/mwe986.jpg";
import mweCharging from "../../../assets/digitalSignage/mweCharging.jpg";
import taxiTopOutdoor from "../../../assets/digitalSignage/taxiTopOutdoor.png";

const products = [
  {
    id: 1,
    name: "Stand Alone Digital Signage",
    image: product1,
    category: "Digital Signage",
  },
  {
    id: 2,
    name: "MWE863",
    image: mwe863,
    category: "Outdoor Signage",
  },
  {
    id: 3,
    name: "MWE986",
    image: mwe986,
    category: "Outdoor Signage",
  },
  {
    id: 4,
    name: "MWE662",
    image: mwe662,
    category: "Outdoor Signage",
  },
  {
    id: 5,
    name: "MWE957",
    image: mwe957,
    category: "Outdoor Signage",
  },
  {
    id: 6,
    name: "MWE Charging Station Outdoor",
    image: mweCharging,
    category: "Outdoor Signage",
  },
  {
    id: 7,
    name: "MWE701",
    image: mwe701,
    category: "Outdoor Signage",
  },
  {
    id: 8,
    name: "MWE915",
    image: mwe915,
    category: "Outdoor Signage",
  },
  {
    id: 9,
    name: "MWE763",
    image: mwe763,
    category: "Outdoor Signage",
  },
  {
    id: 10,
    name: "MWE930",
    image: mwe930,
    category: "Outdoor Signage",
  },
  {
    id: 11,
    name: "MWE861",
    image: mwe861,
    category: "Outdoor Signage",
  },
  {
    id: 12,
    name: "MWE804",
    image: mwe804,
    category: "Outdoor Signage",
  },
  {
    id: 13,
    name: "MWE601",
    image: mwe601,
    category: "Outdoor Signage",
  },
  {
    id: 14,
    name: "MWE603",
    image: mwe603,
    category: "Outdoor Signage",
  },
  {
    id: 15,
    name: "MWE912",
    image: mwe912,
    category: "Outdoor Signage",
  },
  {
    id: 16,
    name: "MWE604",
    image: mwe604,
    category: "Outdoor Signage",
  },
  {
    id: 17,
    name: "Taxi Top Outdoor",
    image: taxiTopOutdoor,
    category: "Outdoor Signage",
  },

  // { id: 3, name: "Multimedia Kiosk", image: product3, category: "Kiosk" },
  // { id: 4, name: "Hand Sanitizer Kiosk", image: product4, category: "Kiosk" },
  // {
  //   id: 5,
  //   name: "Face Recognition Kiosk",
  //   image: product5,
  //   category: "Recognition Systems",
  // },
  // {
  //   id: 6,
  //   name: "Window Advertising LCD",
  //   image: product6,
  //   category: "Advertising",
  // },
  // {
  //   id: 7,
  //   name: "LCD in Bus Station",
  //   image: product7,
  //   category: "Transportation",
  // },
  // {
  //   id: 8,
  //   name: "Touch Screen Table",
  //   image: product8,
  //   category: "Interactive Displays",
  // },
  // { id: 9, name: "Taxi Top LCD", image: product9, category: "Advertising" },
  // { id: 10, name: "LCD Video Wall", image: product10, category: "Video Walls" },
  // {
  //   id: 11,
  //   name: "Wall Mount LCD",
  //   image: product11,
  //   category: "Mount Displays",
  // },
  // {
  //   id: 12,
  //   name: "Stretched LCD",
  //   image: product12,
  //   category: "Specialty Displays",
  // },
];

// Generate unique categories dynamically
const categories = ["All", ...new Set(products.map((p) => p.category))];

const ProductCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Get the product name from the previous page
  const { selectedProduct } = location.state || {};
  const [clickedId, setClickedId] = useState(null);

  const [gridView, setGridView] = useState(true);
  const [twoImageView, setTwoImageView] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Set default category based on selected product
  useEffect(() => {
    if (selectedProduct) {
      const productCategory = products.find(
        (p) => p.category === selectedProduct
      )?.category;
      if (productCategory) {
        setSelectedCategory(productCategory);
      }
    }
  }, [selectedProduct]);

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Sort products by name
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  // Scroll functions for category bar
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleClick = (product) => {
    setClickedId(product.id);

    // Delay navigation until animation completes
    setTimeout(() => {
      navigate(`/product/${product.id}`, {
        state: {
          currentProductId: product.id,
          category: product.category,
        },
      });
    }, 200); // Adjust timing to match animation duration
  };

  return (
    <>
      <div className="h-[90px] w-full bg-white"></div>
      <div className="mx-auto w-full max-w-[1240px] bg-white p-6 2xl:max-w-[1480px]">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2">
          <span
            className="cursor-pointer text-gray-400"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
          </svg>
          <span
            className="cursor-pointer text-gray-400"
            onClick={() => navigate("/products")}
          >
            Products
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="#A4A4A4" />
          </svg>
          <span className="font-semibold text-black">{selectedCategory}</span>
        </div>

        {/* Category Scroll Buttons */}

        {/* Sorting & View Toggle */}
        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <h1 className="text-2xl font-bold text-black"></h1>
          <div className="flex items-center space-x-0">
            <span
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className="mr-2 flex cursor-pointer gap-2 font-semibold text-black"
            >
              Sort by{" "}
              {sortOrder === "asc" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 15l-6-6-6 6"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              )}
            </span>

            <button
              onClick={() => {
                setGridView(true); // Ensure gridView is true
                setTwoImageView(false); // Disable twoImageView
              }}
              className={`p-2 text-black  border border-gray-300 ${
                gridView && !twoImageView ? "bg-gray-200" : ""
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => {
                setGridView(false); // Ensure gridView is false
                setTwoImageView(true); // Enable twoImageView
              }}
              className={`p-2 text-black border border-gray-300  ${
                twoImageView ? "bg-gray-200" : ""
              }`}
            >
              <Columns size={20} />
            </button>
            <button
              onClick={() => {
                setGridView(false); // Disable gridView
                setTwoImageView(false); // Ensure twoImageView is also false
              }}
              className={`p-2 text-black border border-gray-300  ${
                !gridView && !twoImageView ? "bg-gray-200" : ""
              }`}
            >
              <AlignJustify size={20} />
            </button>
          </div>
        </div>
        <div className="relative mt-6 flex items-center justify-center">
          {/* Left Scroll Button */}
          <button
            className="absolute left-0 flex size-[30px] shrink-0 items-center justify-center rounded-full border border-[#E4E4E4] bg-[#FFFFFF] shadow-lg hover:opacity-80 sm:relative"
            onClick={scrollLeft}
          >
            <ChevronLeft color="black" size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex w-full flex-nowrap space-x-2 overflow-hidden px-4 pl-[40px] sm:pl-4"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`min-w-[150px] sm:min-w-[100px] rounded-full border h-[50px] px-[30px] text-sm flex items-center justify-center whitespace-nowrap transition ${
                  selectedCategory === category
                    ? "bg-product-btn-gradient text-white"
                    : "border-[#E4E4E4] text-black font-semibold"
                }`}
                // style={{ minWidth: "140px", height: "40px" }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="absolute right-0 flex size-[30px] shrink-0 items-center justify-center rounded-full border border-[#E4E4E4] bg-[#FFFFFF] shadow-lg hover:opacity-80 sm:relative"
            onClick={scrollRight}
          >
            <ChevronRight color="black" size={20} />
          </button>
        </div>
        {/* Products Grid */}
        <div
          className={`mt-[34px] ${
            twoImageView
              ? "grid grid-cols-1 md:grid-cols-2 gap-6 "
              : gridView
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
              : "space-y-6"
          }`}
        >
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product, index) => {
              const isClicked = clickedId === product.id;
              const isAdjacent =
                clickedId &&
                (index ===
                  sortedProducts.findIndex((p) => p.id === clickedId) - 1 ||
                  index ===
                    sortedProducts.findIndex((p) => p.id === clickedId) + 1);

              return (
                <motion.div
                  key={product.id}
                  onClick={() => handleClick(product)}
                  className="cursor-pointer"
                  initial={{ scale: 1, x: 0 }}
                  animate={{
                    scale: isClicked ? 1 : isAdjacent ? 1 : 1,
                    x: isAdjacent ? (product.id < clickedId ? 300 : -300) : 0,
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                >
                  <div className="flex w-full flex-col items-center overflow-hidden rounded-lg bg-gray-100 p-4 transition-all hover:shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name || "Product Image"}
                      className="h-[311px] w-full transform object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <p className="mt-[17.3px] w-full text-left font-medium text-[#141718]">
                    {product.name}
                  </p>
                </motion.div>
              );
            })
          ) : (
            <p className="mt-6 text-center text-gray-600">No products found.</p>
          )}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default ProductCategory;
