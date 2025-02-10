import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-r from-[#42dcff] via-[#a852ff] to-[#fe43aa]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-[400] text-white mb-8">
          Stay ahead with exclusive announcements and updates!
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="w-full sm:w-[60%] bg-white p-1 rounded-md flex items-center justify-between">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full flex-grow min-w-[150px] rounded-md outline-none text-black placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-medium rounded-md hover:bg-opacity-90 transition flex items-center"
              disabled={loading}
            >
              {loading ? "Loading..." : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
