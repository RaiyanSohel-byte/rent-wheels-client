import { motion } from "framer-motion";
import { Link } from "react-router";
import aboutImage from "../assets/aboutImage.jpg";

const AboutPreview = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-10">
      <motion.div
        className="md:w-1/2 w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={aboutImage}
          alt="About RentWheels"
          className="rounded-3xl shadow-2xl object-cover w-full h-full"
        />
      </motion.div>

      <motion.div
        className="md:w-1/2 w-full flex flex-col gap-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">About RentWheels</h2>
        <p className="text-gray-500 leading-relaxed text-lg">
          RentWheels connects travelers with local car owners, providing a
          seamless, affordable, and reliable rental experience.
        </p>
        <p className="text-gray-500 leading-relaxed text-lg">
          Whether you need a family SUV, a luxury ride, or an electric car, we
          have the perfect vehicle for you.
        </p>
        <Link
          to="/about"
          className="btn btn-primary text-secondary w-max mt-4 hover:bg-primary/90 transition-all"
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutPreview;
