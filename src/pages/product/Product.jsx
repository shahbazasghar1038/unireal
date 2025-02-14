import { AlignJustify, Columns, Grid } from "lucide-react"; // Added scroll buttons
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import product1 from "../../assets/product1.png";
import product10 from "../../assets/product10.png";
import product11 from "../../assets/product11.png";
import product12 from "../../assets/product12.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.png";
import product8 from "../../assets/product8.png";
import product9 from "../../assets/product9.png";
import Email from "../gemini/particals/email";

import outdoorSignage from "../../assets/outdoorSignage.png";

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
    //image: product2,
    image: outdoorSignage,
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
// const categories = ["All", ...new Set(products.map((p) => p.category))];

const Product = () => {
  const navigate = useNavigate();
  const [gridView, setGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [twoImageView, setTwoImageView] = useState(false); // State for two-image layout
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting

  // Filter products based on category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Sort products based on name
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "asc") return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });

  // Scroll functions for category bar

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
            className="cursor-pointer font-semibold text-black"
            onClick={() => navigate("/products")}
          >
            Products
          </span>
        </div>

        {/* Header Section */}
        <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <h1 className="text-2xl font-bold text-black"></h1>

          {/* Sorting & View Toggle */}
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

        {/* Products Grid */}
        <div
          className={`mt-[70px] md:mt-[110px] ${
            twoImageView
              ? "grid grid-cols-1 md:grid-cols-2 gap-6 "
              : gridView
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
              : "space-y-6 "
          }`}
        >
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              to="/categories"
              state={{ selectedProduct: product.category }}
              className="flex flex-col items-center"
            >
              <div className="flex w-full flex-col items-center overflow-hidden rounded-lg bg-gray-100 p-4 transition-all hover:shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[311px] w-full transform object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <p className="mt-[17.3px] w-full text-left font-medium text-[#141718]">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex w-full items-center justify-center pb-[20px] pt-[70px] 2xl:pb-[30px]">
          <div className="flex size-[47px] animate-bounce cursor-pointer items-center justify-center rounded-full bg-[#000000]/20">
            <img
              src="/arrow-down-product.svg"
              className="w-full max-w-[20px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <Email />
    </>
  );
};

export default Product;
