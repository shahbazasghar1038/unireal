const CareersPage = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-16 lg:px-16 my-24 mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 max-w-screen-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Join the Future of{" "}
          <p className="bg-gradient-to-r from-[#42dcff] via-[#a852ff] to-[#fe43aa] bg-clip-text text-transparent">
            Digital Innovation
          </p>
        </h1>
        <p className="mt-6 text-lg max-w-[500px] mx-auto">
          At Unireal, we’re redefining retail with AI-driven signage and IoT
          solutions. Be a part of something bigger.
        </p>
        <button
          type="submit"
          className="gradient-hover-effect relative w-[260px] rounded-full px-8 py-3 my-16 font-medium text-white transition-transform duration-300 hover:scale-105"
          style={{
            background: "#000",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(#000, #000), linear-gradient(90deg, #00f0ff, #7c35ff, #ff9d35)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            WebkitBackgroundClip: "padding-box, border-box",
          }}
        >
          See Open Positions
        </button>
      </section>

      {/* Why Work at Unireal Section */}
      <section
        className="bg-[#1D1D1F] p-12 rounded-[30px] text-center mx-auto mb-16"
        style={{ maxWidth: "1664px" }}
      >
        <h2 className="text-3xl font-bold mb-6">Why Work at Unireal?</h2>
        <p className="text-gray-300  sm:text-[15px] md:text-[15px] lg:text-[20px] xl:text-[20px] mx-auto">
          At Unireal, we are redefining the future of retail with cutting-edge
          digital signage and Electronic Shelf Label (ESL) solutions powered by
          AI and IoT. Joining our team means being part of an innovative,
          fast-growing company that values creativity, collaboration, and
          technological excellence. We foster a dynamic work environment where
          your ideas matter, and we invest in your growth through continuous
          learning and career development opportunities. Whether you are
          passionate about technology, design, or business, Unireal offers a
          space where you can thrive, make an impact, and help shape the next
          generation of smart retail solutions.
        </p>
      </section>

      {/* Current Openings Section */}
      <section className="text-center my-16 max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Current Openings
        </h2>
        <div className="space-y-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="custom-job-card-property flex items-center justify-between bg-[#1D1D1F] p-6 rounded-[30px] mx-auto max-w-screen-xl"
              >
                <div>
                  <h3 className="text-lg font-bold">Sales Engineer</h3>
                  <p className="text-sm text-gray-400">Remote</p>
                </div>
                <button
                  type="button"
                  className="relative w-[140px] rounded-full px-6 py-2 font-medium text-white transition-transform duration-300 hover:scale-105"
                  style={{
                    background: "#000",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    border: "2px solid transparent",
                    backgroundImage:
                      "linear-gradient(#000, #000), linear-gradient(90deg, #00f0ff, #7c35ff, #ff9d35)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    WebkitBackgroundClip: "padding-box, border-box",
                  }}
                >
                  Apply
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-16 max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl">Drop us a line</h2>
        <p className="mt-4 text-gray-300 text-[25px]   max-w-[800px] mx-auto text-gray-300">
          If you haven't found the right job for you, don't hesitate to get in
          touch with us.We are growing and always looking for people who can
          join the journey and help shape the future of recruitment technology.
        </p>
        <button
          type="submit"
          className="relative w-[200px] rounded-full px-8 py-3 my-16 font-medium text-white transition-transform duration-300 hover:scale-105"
          style={{
            background: "#000",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(#000, #000), linear-gradient(90deg, #00f0ff, #7c35ff, #ff9d35)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            WebkitBackgroundClip: "padding-box, border-box",
          }}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CareersPage;
