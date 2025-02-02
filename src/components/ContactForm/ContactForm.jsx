import { useState } from "react";
import Newsletter from "../Newsletter/Newsletter";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="bg-black px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row">
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-extrabold text-white opacity-10">
              CONTACT US
            </h1>
            <h2 className="mt-4 bg-gradient-to-r from-[#42dcff] via-[#a852ff] to-[#fe43aa] bg-clip-text text-3xl font-bold text-transparent">
              Wed Love to Hear From You!
            </h2>
            <p className="mt-4 leading-relaxed text-white text-opacity-80">
              Any questions? We certainly hope so. <br />
              Feel free to reach out to us and well get back to you as soon as
              we can.
            </p>

            <div
              className="mt-6 w-full rounded-lg border p-5 lg:w-1/2"
              style={{ borderColor: "#A4A4A4" }}
            >
              <p className="text-lg font-semibold text-white">
                Ask us anything
              </p>
              <p className="text-sm text-white text-opacity-60">
                Pricing, features, setup or how we can support your business
              </p>
            </div>

            <div className="relative mt-6 pl-4 text-white text-opacity-80">
              <div
                className="absolute left-0 top-0 h-full w-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, #42dcff, #a852ff, #fe43aa)",
                }}
              />
              <div className="space-y-1">
                <p>110 Easter Queenslie Road, Glasgow, Scotland</p>
                <p>G33 4UL, GB</p>
                <p>+44 141 781 6600</p>
                <p>hello@unireal.io</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Wider) */}
          <div className="w-full rounded-lg bg-[#1a1a1a] p-8 shadow-lg lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{ borderColor: "#A4A4A4", color: "#858585" }} // Apply border & text color
                  className="w-full rounded-md border border-opacity-30 bg-transparent px-4 py-3 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{ borderColor: "#A4A4A4", color: "#858585" }} // Apply border & text color
                  className="w-full rounded-md border border-opacity-30 bg-transparent px-4 py-3 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                value={formData.email}
                onChange={handleChange}
                style={{ borderColor: "#A4A4A4", color: "#858585" }}
                className="w-full rounded-md border border-opacity-30 bg-transparent px-4 py-3 placeholder-[#858585] outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                style={{ borderColor: "#A4A4A4", color: "#858585" }}
                className="w-full rounded-md border border-opacity-30 bg-transparent px-4 py-3 placeholder-[#858585] outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                style={{ borderColor: "#A4A4A4", color: "#858585" }}
                className="w-full resize-none rounded-md border border-opacity-30 bg-transparent px-4 py-3 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex justify-center">
                {" "}
                {/* Center Button */}
                <button
                  type="submit"
                  className="relative w-[260px] rounded-full px-8 py-3 font-medium text-white transition-transform duration-300 hover:scale-105"
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default ContactForm;
