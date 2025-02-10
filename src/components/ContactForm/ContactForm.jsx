/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "../Newsletter/Newsletter";
import Email from "../../pages/gemini/particals/email";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://tieronix.com/ur-be/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Query submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Submission failed. Try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
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
      <div className="bg-black px-6 pb-[50px] pt-[50px] md:pb-[125px] md:pt-[125px]">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-10 md:gap-16 lg:flex-row 2xl:max-w-[1480px]">
          {/* Left Side: Contact Info */}
          <div className="w-full md:max-w-[570px]">
            {/* <h1 className="text- font-extrabold text-white opacity-10">
              CONTACT US
            </h1> */}
            <h2 className="mt-4 bg-gradient-to-r from-[#42dcff] via-[#a852ff] to-[#fe43aa] bg-clip-text text-[30px] font-bold text-transparent lg:text-[40px]">
              We'd Love to Hear From You!
            </h2>
            <p className="mt-[20px] max-w-[410px] text-[19px] leading-relaxed text-white text-opacity-80 lg:mt-[30px] lg:text-[22px]">
              Any questions? We certainly hope so. Feel free to reach out to us
              and we’ll get back to you as soon as we can.
            </p>

            <div className="mt-[35px] w-full max-w-[470px] rounded-[17px] border-[4px] border-[#282828] px-[30px] py-[37px] lg:mt-[52px] lg:border-[6px] lg:px-[54px]">
              <p className="text-[30px] font-[400] text-white">
                Ask us anything
              </p>
              <p className="mt-3 text-[18px] text-white lg:text-[20px]">
                Pricing, features, setup, or how we can support your business
              </p>
            </div>

            <div className="relative mt-[50px] pl-[25px] text-white text-opacity-80 md:pl-[40px] lg:mt-[67px]">
              <div className="absolute left-0 top-0 h-full w-[6px] bg-contact-gradient" />
              <div className="space-y-3 text-[18px] font-[400] lg:text-[20px]">
                <p>110 Easter Queenslie Road, Glasgow, Scotland</p>
                <p>G33 4UL, GB</p>
                <p>+44 141 781 6600</p>
                <p>hello@unireal.io</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Wider) */}
          <div className="w-full rounded-lg bg-[#1a1a1a] px-5 py-8 shadow-lg md:py-[53px] lg:px-[43px]">
            <form onSubmit={handleSubmit} className="space-y-[30px]">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-[#57C3F9]"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-[#57C3F9]"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                value={formData.email}
                onChange={handleChange}
                className="flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-[#57C3F9]"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-[#57C3F9]"
                required
              />
              <input
                type="text"
                name="Industry"
                placeholder="Industry"
                // value={formData.subject}
                // onChange={handleChange}
                className="flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-[#57C3F9]"
                required
              />
              <select
                name=""
                id=""
                className="flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-[#57C3F9]"
              >
                <option value="" className="text-black">
                  Intrest
                </option>
                <option value="" className="text-black">
                  Intrest
                </option>
                <option value="" className="text-black">
                  Intrest
                </option>
                <option value="" className="text-black">
                  Intrest
                </option>
                <option value="" className="text-black">
                  Intrest
                </option>
                <option value="" className="text-black">
                  Intrest
                </option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="flex min-h-[152px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 py-5 text-white placeholder-[#858585] outline-none focus:ring-2 focus:ring-[#57C3F9]"
                required
              />
              <div className="flex justify-center">
                <div className="pt-[50px] 2xl:!pt-[70px]">
                  <button
                    disabled={loading}
                    className="animated-gradient-bg-div gradient-hover-effect z-[10] h-[45px] w-[246px] rounded-full p-[2px] sm:h-[50px] md:p-[3px] lg:h-[54px]"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1D1D1F] text-[18px] font-[500] lg:text-[20px]">
                      {loading ? "Submitting..." : "Submit"}
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Newsletter /> */}
      <Email />
    </>
  );
};

export default ContactForm;
