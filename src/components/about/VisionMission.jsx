import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas, FaHandshake } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="text-center max-w-[1200px] mx-auto space-y-10 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="title">Our Vision & Mission</h3>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
          We’re driving the future of mobility — empowering people with easy,
          affordable, and sustainable car rental solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-base-200 rounded-2xl p-8 shadow-md border border-base-300 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col items-center space-y-4">
            <FaGlobeAmericas className="text-5xl text-primary" />
            <h4 className="text-2xl font-semibold text-base-content">
              Our Vision
            </h4>
            <p className="text-gray-500 leading-relaxed">
              To revolutionize the car rental experience by creating a platform
              that’s transparent, accessible, and eco-friendly — enabling anyone
              to find the perfect ride anytime, anywhere.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-base-200 rounded-2xl p-8 shadow-md border border-base-300 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col items-center space-y-4">
            <FaHandshake className="text-5xl text-primary" />
            <h4 className="text-2xl font-semibold text-base-content">
              Our Mission
            </h4>
            <p className="text-gray-500 leading-relaxed">
              To bridge the gap between car owners and renters through
              innovation, trust, and fair pricing — ensuring every journey is
              smooth, secure, and memorable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
