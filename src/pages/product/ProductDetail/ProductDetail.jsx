import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">
        <span className="text-gray-400">Home</span> &gt;{" "}
        <span className="text-gray-400">Products</span> &gt;{" "}
        <span className="font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
        {/* Left Side: Image Gallery */}
        <div className="flex">
          {/* Sidebar Thumbnails */}
          <div className="flex flex-col space-y-2">
            {[product.image, product.image, product.image].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="h-20 w-16 object-cover rounded-lg cursor-pointer border hover:border-gray-500 transition"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-lg flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Right Side: Product Information */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {/* Available Sizes */}
          <div className="mt-4">
            <h3 className="font-semibold">Available Sizes:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[32, 43, 49, 55, 65, 75, 86].map((size) => (
                <span
                  key={size}
                  className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Specifications:</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm border-b py-2">
                <span className="font-medium">Resolution</span>
                <span className="text-gray-600">1920 x 1080 / 4K Optional</span>
              </div>
              <div className="flex justify-between text-sm border-b py-2">
                <span className="font-medium">Brightness</span>
                <span className="text-gray-600">2500 cd/m</span>
              </div>
              <div className="flex justify-between text-sm border-b py-2">
                <span className="font-medium">Panel Brand</span>
                <span className="text-gray-600">
                  Full New 100% A+ Grand Brand Panel
                </span>
              </div>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <button className="mt-4 text-blue-600 font-medium">
            Less Specification ⬆
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
