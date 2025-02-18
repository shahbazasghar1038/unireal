import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Email = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://tieronix.com/ur-be/api/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Subscribed successfully!", { position: "top-right" });
        setEmail(""); // Clear the input field
      } else {
        toast.error(data.message || "Subscription failed", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Network error. Please try again later.", {
        position: "top-right",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-[29px] bg-section-gradient px-5 py-[70px] md:py-[95px] 2xl:gap-[50px] 2xl:py-[105px]">
      <h3 className="text-center text-[20px] font-[400] leading-[28px] text-white sm:text-[30px] sm:leading-normal md:text-[35px]">
        Stay ahead with exclusive announcements and updates!{" "}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="relative flex h-[45px] w-full max-w-[716px] items-center justify-center overflow-hidden rounded-lg bg-[white] sm:h-[60px] md:h-[70px] 2xl:h-[86px]"
      >
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-full w-full rounded-lg pl-3 text-[16px] font-[400] text-black placeholder:text-black sm:pl-4 sm:text-[20px] md:pl-[28px] md:text-[24px]"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-[7px] h-[32px] rounded-lg bg-black px-5 text-[16px] font-[500] text-white transition-all hover:opacity-80 sm:right-[10px] sm:h-[46px] sm:text-[20px] md:h-[50px] md:px-[45px] md:text-[24px] 2xl:right-[15px] 2xl:h-[60px]"
        >
          {loading ? "Loading..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default Email;
