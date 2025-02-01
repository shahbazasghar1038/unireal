const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-r from-[#42dcff] via-[#a852ff] to-[#fe43aa]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Stay ahead with exclusive announcements and updates!
        </h2>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <div className="w-[60%] bg-white p-1 rounded-md flex items-center justify-between">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-md outline-none text-gray-700"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
