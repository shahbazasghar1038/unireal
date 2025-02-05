import { useState } from "react";
import { Grid, AlignJustify } from "lucide-react"; // Import icons

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
import { Link, useNavigate } from "react-router-dom";

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

const Product = () => {
  const navigate = useNavigate();
  const [gridView, setGridView] = useState(true);

  return (
    <>
      <div className="h-[80px] w-full bg-white"></div>
      <div className="mx-auto max-w-7xl bg-white p-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 ">
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
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">Products</h1>

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
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={
            gridView
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              : "space-y-6"
          }
        >
          {products.map((product) => (
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
