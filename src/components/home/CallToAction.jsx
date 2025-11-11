import { motion } from "framer-motion";
import { Link } from "react-router";
import ctaBg from "../../assets/ctaBG.jpg";
import { toast } from "react-toastify";
const CallToAction = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("You will be notified");
    e.target.reset();
  };
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 lg:rounded-3xl overflow-hidden max-w-[1200px] mx-auto mt-10 mb-20"
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto text-center text-gray-200 flex flex-col items-center gap-6 h-[220px]">
        <h2 className="text-4xl md:title font-bold">
          Ready to Drive Your Dream Car?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl">
          Explore our fleet and book a car today. Experience seamless booking,
          trusted providers, and affordable rates.
        </p>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="lg:flex gap-4 items-center justify-center mb-8 rounded-md">
            <div className="flex items-center justify-center">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="input placeholder:text-gray-600 lg:w-[300px] rounded-r-none px-5 py-2 text-gray-800 outline-none rounded-md bg-gray-200"
                required
              />
              <button
                type="submit"
                className="bg-gray-800 text-white text-xs lg:text-lg rounded-md rounded-l-none px-6 py-2 cursor-pointer font-medium hover:bg-gray-700 transition-all"
              >
                Get Notified
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
