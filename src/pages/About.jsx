import React from "react";
import aboutImage from "../assets/aboutImage2.jpg";
import { motion } from "framer-motion";
import { FaCar, FaHandshake, FaDollarSign, FaClock } from "react-icons/fa";
import Timeline from "../components/about/Timeline";
import OurTeam from "../components/about/OurTeam";
import VisionMission from "../components/about/VisionMission";
import CarBrandMarquee from "../components/about/CarBrandMarquee";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 120 },
  }),
};

const colorClasses = {
  primary: "bg-primary/20 text-primary",
  accent: "bg-accent/20 text-accent",
  success: "bg-success/20 text-success",
  warning: "bg-warning/20 text-warning",
};

const About = () => {
  const features = [
    { text: "Easy Booking", color: "primary", icon: <FaCar /> },
    { text: "Trusted Providers", color: "accent", icon: <FaHandshake /> },
    { text: "Affordable Rates", color: "success", icon: <FaDollarSign /> },
    { text: "24/7 Support", color: "warning", icon: <FaClock /> },
  ];

  return (
    <section className="min-h-screen  bg-gradient-to-br from-base-100/50 via-base-200/30 to-base-100/50 text-base-content py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto my-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImage}
            alt="About RentWheels"
            className="rounded-3xl shadow-2xl w-full lg:h-[500px] object-cover"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6 relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title">About RentWheels</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            RentWheels is your trusted car rental platform connecting users with
            local car owners and providers. Our mission is to provide a
            seamless, reliable, and affordable way to rent vehicles for any
            occasion.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Whether you are looking for a family SUV, a luxury ride, or an
            eco-friendly electric car, RentWheels has you covered. Enjoy a
            smooth booking experience, trusted providers, and 24/7 support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                className={`flex items-center gap-4 h-20 px-5 rounded-2xl font-semibold shadow-md transition-all cursor-pointer relative overflow-hidden ${
                  colorClasses[feature.color]
                }`}
              >
                <div className="text-2xl">{feature.icon}</div>
                <div className="text-lg">{feature.text}</div>
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-tr from-white/20 to-transparent rounded-full pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="space-y-20">
        <VisionMission />
        <Timeline />
        <CarBrandMarquee />
        <OurTeam />
      </div>
    </section>
  );
};

export default About;
