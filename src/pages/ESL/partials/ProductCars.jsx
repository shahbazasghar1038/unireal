import ProductCards1 from "../../../assets/ProductCards1.png";
import ProductCards2 from "../../../assets/ProductCards2.png";
import ProductCards3 from "../../../assets/ProductCards3.png";
import ProductCards4 from "../../../assets/ProductCards4.png";
const ProductCards = () => {
  const products = [
    {
      id: 1,
      name: "Multicolor 13.3 inch",
      image: ProductCards1,
    },
    {
      id: 2,
      name: "Bluetooth E Pricer Label",
      image: ProductCards2,
    },
    {
      id: 3,
      name: "Stretched LCD screen",
      image: ProductCards3,
    },
    {
      id: 4,
      name: "E-INK BLE 5.0",
      image: ProductCards4,
    },
  ];

  return (
    <div className="max-w-[1328px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-[#1D1D1F] rounded-[30px] p-6 hover:bg-gray-900 hover:text-white transition duration-300 shadow-lg flex flex-col items-center text-center"
        >
          <h4 className="text-lg mb-3 font-semibold text-white">
            {product.name}
          </h4>
          <img
            src={product.image}
            className="w-[60%] h-auto rounded-lg"
            alt={product.name}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
