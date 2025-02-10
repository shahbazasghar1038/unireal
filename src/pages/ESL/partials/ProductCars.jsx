import ProductCards1 from "../../../assets/ProductCards1.png";
import ProductCards2 from "../../../assets/ProductCards2.png";
import ProductCards3 from "../../../assets/ProductCards3.png";
import ProductCards4 from "../../../assets/ProductCards4.png";
const ProductCards = () => {
  const products = [
    { id: 1, name: "Multicolor 13.3 inch", image: ProductCards1 },
    { id: 2, name: "Bluetooth E Pricer Label", image: ProductCards2 },
    { id: 3, name: "Stretched LCD screen", image: ProductCards3 },
    { id: 4, name: "E-INK BLE 5.0", image: ProductCards4 },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-[70px] px-5 pb-[50px] pt-[80px] md:gap-[100px] md:pb-[100px] md:pt-[100px] 2xl:pt-[150px]">
      <p className="text-center text-[40px] font-[700]">Our Products</p>

      <div className="mx-auto grid w-full max-w-[1200px] auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 2xl:max-w-[1428px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex h-full flex-col items-center gap-[40px] rounded-[20px] bg-[#1D1D1F] pb-[30px] pt-[50px] text-center shadow-lg transition duration-300 hover:bg-gray-900 hover:text-white md:rounded-[30px] 2xl:gap-[80px]"
          >
            <h4 className="text-[24px] font-semibold text-white md:text-[30px]">
              {product.name}
            </h4>
            <div className="flex flex-grow items-center justify-center px-4">
              <img
                src={product.image}
                className="w-full max-w-[440px] rounded-lg object-contain"
                alt={product.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
