import HeroSectionGemini from "../../components/hero-section-gemini";
import digitlCode from "../../assets/digitlCode.png";
import Upload from "../../assets/Upload.png";
import Campaigns from "../../assets/Campaigns.png";
import GeminiWorks from "./particals/GeminiWork";
const Gemini = () => {
  return (
    <div className="overflow-hidden bg-black text-white min-h-screen px-4 sm:px-16 lg:px-16 my-24 mx-auto">
      <section className="text-center py-16 max-w-screen-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          The Future of{" "}
          <p className="bg-gradient-to-r from-[#42dcff] via-[#a852ff] to-[#fe43aa] bg-clip-text text-transparent">
            Interactive Digital Signage
          </p>
        </h1>
        <p className="mt-6 text-lg max-w-[500px] mx-auto">
          Where AI Meets Digital Signage
        </p>
        <div className="flex justify-center gap-6 mt-10">
          <button
            type="submit"
            className=" mr-6 relative w-[210px] rounded-full px-8 py-3 my-16 font-medium text-white transition-transform duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #00f0ff, #7c35ff, #ff9d35)",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              border: "2px solid transparent",
              borderRadius: "9999px", // Ensures rounded corners
              backgroundClip: "padding-box, border-box",
              WebkitBackgroundClip: "padding-box, border-box",
              backgroundOrigin: "border-box",
              padding: "12px 24px", // Adjust padding for better spacing
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: "0",
                background: "#000",
                borderRadius: "9999px",
                zIndex: "-1", // Place behind the text
              }}
            />
            Start Free Trial
          </button>

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
            Get Demo
          </button>
        </div>
      </section>
      <HeroSectionGemini />
      <GeminiWorks />
    </div>
  );
};

export default Gemini;
