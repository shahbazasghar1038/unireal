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
import { Link } from "react-router-dom";

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
  const [gridView, setGridView] = useState(true);

  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-4">
          <span className="text-gray-400">Home</span> &gt;{" "}
          <span className="font-medium">Products</span>
        </div>

        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products</h1>

          {/* Sorting & View Toggle */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 cursor-pointer">Sort by ▾</span>

            <button
              onClick={() => setGridView(true)}
              className={`p-2 rounded-md ${gridView ? "bg-gray-200" : ""}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setGridView(false)}
              className={`p-2 rounded-md ${!gridView ? "bg-gray-200" : ""}`}
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
              state={{ product }} // ✅ Pass product data (including image)
              className="flex flex-col items-center"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden flex flex-col items-center p-4 transition-all hover:shadow-lg w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[311px] object-contain w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <p className="mt-4 text-left font-medium text-gray-800 w-full">
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
