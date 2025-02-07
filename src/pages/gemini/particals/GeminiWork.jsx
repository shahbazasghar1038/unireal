import digitalCode from "../../../assets/digitlCode.png";
import Upload from "../../../assets/Upload.png";
import Campaigns from "../../../assets/Campaigns.png";
const cards = [
  { id: 1, color: "#58BEFF", title: "Intuitive Layout Builder" },
  { id: 2, color: "#BB4EEE", title: "Effortless Content Upload" },
  { id: 3, color: "#FE4996", title: "AI-Powered Insights" },
  { id: 4, color: "#FEA042", title: "Interactive Engagement" },
  { id: 5, color: "#58BEFF", title: "Advanced Analytics & Dashboards" },
];
const GeminiWorks = () => {
  return (
    <div className="overflow-hidden bg-black text-white min-h-screen px-4 sm:px-16 lg:px-16 my-24 mx-auto">
      {/* small card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 max-w-5xl mx-auto">
        {/* First Row */}
        <div className="flex items-center gap-4 p-2 rounded-lg border border-gray-700 bg-transparent hover:shadow-lg transition">
          <div
            className="flex items-center justify-center w-14 h-14 text-lg font-bold text-white rounded-md"
            style={{
              backgroundColor: "#58BEFF",
            }}
          >
            1
          </div>
          <p className="font-medium text-white">Intuitive Layout Builder</p>
        </div>

        <div className="flex items-center gap-4 p-2 rounded-lg border border-gray-700 bg-transparent hover:shadow-lg transition">
          <div
            className="flex items-center justify-center w-14 h-14 text-lg font-bold text-white rounded-md"
            style={{
              backgroundColor: "#BB4EEE",
            }}
          >
            2
          </div>
          <p className="font-medium text-white">Effortless Content Upload</p>
        </div>

        <div className="flex items-center gap-4 p-2 rounded-lg border border-gray-700 bg-transparent hover:shadow-lg transition">
          <div
            className="flex items-center justify-center w-14 h-14 text-lg font-bold text-white rounded-md"
            style={{
              backgroundColor: "#FE4996",
            }}
          >
            3
          </div>
          <p className="font-medium text-white">AI-Powered Insights</p>
        </div>

        {/* Second Row */}
        <div className="col-span-full flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-4 p-2 rounded-lg border border-gray-700 bg-transparent hover:shadow-lg transition w-full sm:w-auto">
            <div
              className="flex items-center justify-center w-14 h-14 text-lg font-bold text-white rounded-md"
              style={{
                backgroundColor: "#FEA042",
              }}
            >
              4
            </div>
            <p className="font-medium text-white text-center sm:text-left">
              Interactive Engagement Dashboards
            </p>
          </div>

          <div className="flex items-center gap-4 p-2 rounded-lg border border-gray-700 bg-transparent hover:shadow-lg transition w-full sm:w-auto">
            <div
              className="flex items-center justify-center w-14 h-14 text-lg font-bold text-white rounded-md"
              style={{
                backgroundColor: "#58BEFF",
              }}
            >
              5
            </div>
            <p className="font-medium text-white text-center sm:text-left">
              Advanced Analytics & Dashboards
            </p>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <section className="text-center py-16 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">How Gemini Works</h2>
        <p className="text-gray-400">
          Gemini is loaded with features to make digital signage management easy
        </p>
      </section>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 max-w-screen-xl mx-auto">
        {/* Card 1 */}
        <div
          className="relative flex flex-col items-start gap-4 p-6 rounded-[35px]  bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transition-all hover:shadow-lg"
          style={{
            backgroundClip: "border-box",
            WebkitBackgroundClip: "padding-box, border-box",
            border: "1px solid transparent",
            backgroundOrigin: "border-box",
            backgroundImage:
              "linear-gradient(black, black), linear-gradient(90deg, #00f0ff, #7c35ff, #ff9d35)",
          }}
        >
          {" "}
          <div className=" items-center gap-3">
            <img src={digitalCode} alt="6-Digit Code" className="w-10 h-10" />
            <h3 className=" py-4  font-semibold">
              Get Your Unique 6-Digit Code
            </h3>
          </div>
          <p className="text-left text-gray-400 mt-10">
            Simply input the code displayed on your app's launch screen to
            connect your device.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="relative flex flex-col items-start gap-4 p-6 rounded-[35px] border-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transition-all hover:shadow-lg"
          style={{
            backgroundClip: "border-box",
            WebkitBackgroundClip: "padding-box, border-box",
            border: "1px solid transparent",
            backgroundOrigin: "border-box",
            backgroundImage:
              "linear-gradient(black, black), linear-gradient(90deg, #00f0ff, #7c35ff, #ff9d35)",
          }}
        >
          {" "}
          <div className=" items-center gap-3">
            <img src={Upload} alt="Upload Content" className="w-10 h-10" />
            <h3 className="py-4  font-semibold">Upload Content</h3>
          </div>
          <p className="text-left text-gray-400 mt-10">
            Choose from images, videos, and more to create compelling displays.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="relative flex flex-col items-start gap-4 p-6 rounded-[35px] border-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transition-all hover:shadow-lg"
          style={{
            backgroundClip: "border-box",
            WebkitBackgroundClip: "padding-box, border-box",
            border: "1px solid transparent",
            backgroundOrigin: "border-box",
            backgroundImage:
              "linear-gradient(black, black), linear-gradient(90deg, #00f0ff, #7c35ff, #ff9d35)",
          }}
        >
          {" "}
          <div className=" items-center gap-3">
            <img
              src={Campaigns}
              alt="Campaigns & Publish"
              className="w-10 h-10"
            />
            <h3 className="py-4  font-semibold">Create Campaigns & Publish</h3>
          </div>
          <p className="text-left text-gray-400 mt-10 mt-10">
            Customize your messaging, schedule with ease, and publish instantly.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="gradient-hover-effect relative w-[210px] rounded-full px-8 py-3 my-16 font-medium text-white transition-transform duration-300 hover:scale-105"
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
          Try it free
        </button>
      </div>
    </div>
  );
};

export default GeminiWorks;
