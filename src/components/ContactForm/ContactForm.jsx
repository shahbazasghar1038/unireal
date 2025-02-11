/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import Email from "../../pages/gemini/particals/email";
import { ChevronDown } from "lucide-react";

// Define Zod schema for validation
const contactFormSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  industry: z.string().nonempty("Industry is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().nonempty("Subject is required"),
  message: z.string().nonempty("Message is required"),
  interest: z.string().nonempty("Interest is required"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Use React Hook Form with Zod schema
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (formData) => {
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
        reset(); // Reset form after successful submission
      } else {
        toast.error(data.message || "Submission failed. Try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const firstNameValue = watch("firstName");
  const lastNameValue = watch("lastName");
  const emailValue = watch("email");
  const subjectValue = watch("subject");
  const industryValue = watch("industry");
  const messageValue = watch("industry");

  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="bg-black px-6 pb-[50px] pt-[50px] md:pb-[125px] md:pt-[125px]">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-10 md:gap-[60px] lg:flex-row 2xl:max-w-[1480px] 2xl:gap-[80px]">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[30px]">
              <div className="grid w-full gap-4 lg:grid-cols-2">
                <div className="relative grid grid-cols-1 gap-4 md:grid-cols-1">
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          id="firstName"
                          type="text"
                          {...field}
                          className="peer flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-transparent outline-none focus:ring-2 focus:ring-[#57C3F9]"
                        />
                        <label
                          htmlFor="firstName"
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transform bg-[#1a1a1a] px-2 text-[#858585] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform-none peer-focus:top-0 peer-focus:text-sm  ${
                            firstNameValue?.length > 0 && "!text-sm !top-0"
                          }`}
                        >
                          First Name
                        </label>
                      </div>
                    )}
                  />
                  {errors.firstName && (
                    <span className="text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <input
                          id="lastName"
                          type="text"
                          {...field}
                          className="peer flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-transparent outline-none focus:ring-2 focus:ring-[#57C3F9]"
                        />
                        <label
                          htmlFor="lastName"
                          className={`absolute left-4 top-1/2 -translate-y-1/2 transform bg-[#1a1a1a] px-2 text-[#858585] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform-none peer-focus:top-0 peer-focus:text-sm  ${
                            lastNameValue?.length > 0 && "!text-sm !top-0"
                          }`}
                        >
                          Last Name
                        </label>
                      </div>
                    )}
                  />
                  {errors.lastName && (
                    <span className="text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      {...field}
                      className="peer flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-transparent outline-none focus:ring-2 focus:ring-[#57C3F9]"
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transform bg-[#1a1a1a] px-2 text-[#858585] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform-none peer-focus:top-0 peer-focus:text-sm  ${
                        emailValue?.length > 0 && "!text-sm !top-0"
                      }`}
                    >
                      Email
                    </label>
                  </div>
                )}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      id="subject"
                      type="text"
                      {...field}
                      className="peer flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-transparent outline-none focus:ring-2 focus:ring-[#57C3F9]"
                    />
                    <label
                      htmlFor="subject"
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transform bg-[#1a1a1a] px-2 text-[#858585] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform-none peer-focus:top-0 peer-focus:text-sm  ${
                        subjectValue?.length > 0 && "!text-sm !top-0"
                      }`}
                    >
                      Subject
                    </label>
                  </div>
                )}
              />
              {errors.subject && (
                <span className="text-red-500">{errors.subject.message}</span>
              )}

              <Controller
                name="industry"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      id="industry"
                      type="text"
                      {...field}
                      className="peer flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 text-white placeholder-transparent outline-none focus:ring-2 focus:ring-[#57C3F9]"
                    />
                    <label
                      htmlFor="industry"
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transform bg-[#1a1a1a] px-2 text-[#858585] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform-none peer-focus:top-0 peer-focus:text-sm  ${
                        industryValue?.length > 0 && "!text-sm !top-0"
                      }`}
                    >
                      Industry
                    </label>
                  </div>
                )}
              />
              {errors.industry && (
                <span className="text-red-500">{errors.industry.message}</span>
              )}

              <Controller
                name="interest"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <select
                      {...field}
                      className="flex h-[52px] w-full appearance-none items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-5 text-[#858585] placeholder-[#858585] outline-none focus:ring-2 focus:ring-[#57C3F9]"
                    >
                      <option value="Interest" className="text-black">
                        Interest
                      </option>
                      <option value="Interest2" className="text-black">
                        Interest2
                      </option>
                      <option value="Interest3" className="text-black">
                        Interest3
                      </option>
                      <option value="Interest4" className="text-black">
                        Interest4
                      </option>
                      <option value="Interest5" className="text-black">
                        Interest5
                      </option>
                      <option value="Interest6" className="text-black">
                        Interest6
                      </option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform">
                      <ChevronDown className="text-[#A4A4A4]" />
                    </div>
                  </div>
                )}
              />
              {errors.interest && (
                <span className="text-red-500">{errors.interest.message}</span>
              )}

              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <textarea
                      id="message"
                      {...field}
                      rows={5}
                      className="peer flex h-[52px] w-full items-center justify-start rounded-md border border-[#A4A4A4] border-opacity-30 bg-transparent px-4 py-3 text-white placeholder-transparent outline-none focus:ring-2 focus:ring-[#57C3F9]"
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transform bg-[#1a1a1a] px-2 text-[#858585] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform-none peer-focus:top-0 peer-focus:text-sm  ${
                        messageValue?.length > 0 && "!text-sm !top-0"
                      }`}
                    >
                      Message
                    </label>
                  </div>
                )}
              />
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}

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
