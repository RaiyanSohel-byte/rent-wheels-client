import { motion } from "framer-motion";
import { Link } from "react-router";
import ctaBg from "../assets/ctaBG.jpg";
const CallToAction = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 rounded-3xl overflow-hidden max-w-[1200px] mx-auto mt-10 mb-20"
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
        <Link to="/browseCars" className="btn bg-gray-200 text-gray-800">
          Browse Cars
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
