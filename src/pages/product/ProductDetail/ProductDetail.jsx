import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  return (
    <>
      <div className="mx-auto max-w-7xl bg-white p-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-500">
          <span className="text-gray-400">Home</span> &gt;{" "}
          <span className="text-gray-400">Products</span> &gt;{" "}
          <span className="font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Left Side: Image Gallery */}
          <div className="flex">
            {/* Sidebar Thumbnails */}
            <div className="flex flex-col space-y-2">
              {[product.image, product.image, product.image].map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className="h-20 w-16 cursor-pointer rounded-lg border object-cover transition hover:border-gray-500"
                  />
                )
              )}
            </div>

            {/* Main Image */}
            <div className="flex flex-1 items-center justify-center rounded-lg bg-gray-100 p-4 shadow-lg">
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
              <div className="mt-2 flex flex-wrap gap-2">
                {[32, 43, 49, 55, 65, 75, 86].map((size) => (
                  <span
                    key={size}
                    className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-6 rounded-lg bg-gray-100 p-4 shadow">
              <h3 className="mb-2 font-semibold">Specifications:</h3>
              <div className="space-y-2">
                <div className="flex justify-between border-b py-2 text-sm">
                  <span className="font-medium">Resolution</span>
                  <span className="text-gray-600">
                    1920 x 1080 / 4K Optional
                  </span>
                </div>
                <div className="flex justify-between border-b py-2 text-sm">
                  <span className="font-medium">Brightness</span>
                  <span className="text-gray-600">2500 cd/m</span>
                </div>
                <div className="flex justify-between border-b py-2 text-sm">
                  <span className="font-medium">Panel Brand</span>
                  <span className="text-gray-600">
                    Full New 100% A+ Grand Brand Panel
                  </span>
                </div>
              </div>
            </div>

            {/* Expand/Collapse Button */}
            <button className="mt-4 font-medium text-blue-600">
              Less Specification ⬆
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
