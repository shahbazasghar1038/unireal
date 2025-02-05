import { useState, useRef } from "react";
import {
  Grid,
  AlignJustify,
  Rows3,
  Columns,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // Added scroll buttons
import { Link, useNavigate } from "react-router-dom";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.png";
import product8 from "../../assets/product8.png";
import product9 from "../../assets/product9.png";
import product10 from "../../assets/product10.png";
import product11 from "../../assets/product11.png";
import product12 from "../../assets/product12.png";
import Newsletter from "../../components/Newsletter/Newsletter";

const products = [
  {
    id: 1,
    name: "Stand Alone Digital Signage",
    image: product1,
    category: "Digital Signage",
  },
  {
    id: 2,
    name: "Outdoor Digital Signage",
    image: product2,
    category: "Outdoor Signage",
  },
  { id: 3, name: "Multimedia Kiosk", image: product3, category: "Kiosk" },
  { id: 4, name: "Hand Sanitizer Kiosk", image: product4, category: "Kiosk" },
  {
    id: 5,
    name: "Face Recognition Kiosk",
    image: product5,
    category: "Recognition Systems",
  },
  {
    id: 6,
    name: "Window Advertising LCD",
    image: product6,
    category: "Advertising",
  },
  {
    id: 7,
    name: "LCD in Bus Station",
    image: product7,
    category: "Transportation",
  },
  {
    id: 8,
    name: "Touch Screen Table",
    image: product8,
    category: "Interactive Displays",
  },
  { id: 9, name: "Taxi Top LCD", image: product9, category: "Advertising" },
  { id: 10, name: "LCD Video Wall", image: product10, category: "Video Walls" },
  {
    id: 11,
    name: "Wall Mount LCD",
    image: product11,
    category: "Mount Displays",
  },
  {
    id: 12,
    name: "Stretched LCD",
    image: product12,
    category: "Specialty Displays",
  },
];

// Generate unique categories dynamically
const categories = ["All", ...new Set(products.map((p) => p.category))];

const Product = () => {
  const navigate = useNavigate();
  const [gridView, setGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollRef = useRef(null);

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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

  return (
    <>
      <div className="h-[80px] w-full bg-white"></div>
      <div className="mx-auto max-w-7xl bg-white p-6">
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
            className="cursor-pointer text-black font-semibold"
            onClick={() => navigate("/products")}
          >
            Products
          </span>
        </div>

        {/* Header Section */}
        <div className="mb-6 flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold text-black"></h1>

          {/* Sorting & View Toggle */}
          <div className="flex items-center space-x-4">
            <span className="cursor-pointer text-gray-600">Sort by ▾</span>

            <button
              onClick={() => setGridView(true)}
              className={`p-2 text-black rounded-md ${
                gridView ? "bg-gray-200" : ""
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setGridView(false)}
              className={`p-2 text-black rounded-md ${
                !gridView ? "bg-gray-200" : ""
              }`}
            >
              <AlignJustify size={20} />
            </button>
            <button className="p-2 text-black rounded-md">
              <Rows3 size={20} />
            </button>
            <button className="p-2 text-black rounded-md">
              <Columns size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Categories Banner without scrollbar */}
        {/* Scrollable Categories Banner without scrollbar */}
        <div className="relative flex items-center">
          {/* Left Scroll Button */}
          <button
            className="p-2 bg-white shadow rounded-full"
            onClick={scrollLeft}
          >
            <ChevronLeft color="black" size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-2 overflow-hidden w-full px-4"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border text-sm flex items-center justify-center whitespace-nowrap transition ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-orange-400 text-white"
                    : "border-gray-400 text-gray-700"
                }`}
                style={{ minWidth: "140px", height: "40px" }} // Ensure fixed size for better alignment
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="p-2 bg-white shadow rounded-full"
            onClick={scrollRight}
          >
            <ChevronRight color="black" size={24} />
          </button>
        </div>

        {/* Products Grid */}
        <div
          className={
            gridView
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4"
              : "space-y-6 mt-4"
          }
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              state={{ currentProductId: product.id }}
              className="flex flex-col items-center"
            >
              <div className="flex w-full flex-col items-center overflow-hidden rounded-lg bg-gray-100 p-4 transition-all hover:shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[311px] w-full transform object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <p className="mt-4 w-full text-left font-medium text-gray-800">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Product;
