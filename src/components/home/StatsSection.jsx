import React from "react";
import { motion } from "framer-motion";
import { FaCarOn } from "react-icons/fa6";
import { FaCalendarCheck, FaCity } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";

const stats = [
  {
    label: "Cars Available",
    value: "500+",
    color: "bg-gradient-to-r from-base-100 to-[#161ef9]/10",
    icon: <FaCarOn color="#161ef9" />,
  },
  {
    label: "Happy Clients",
    value: "10K+",
    color: "bg-gradient-to-r from-base-100 to-[#f7c500]/10",
    icon: <IoMdHappy color="#f7c500" />,
  },
  {
    label: "Cities Covered",
    value: "25+",
    color: "bg-gradient-to-r from-base-100 to-[#10B981]/10",
    icon: <FaCity color="#10B981" />,
  },
  {
    label: "Years of Service",
    value: "5+",
    color: "bg-gradient-to-r from-base-100 to-[#32aaf9]/10",
    icon: <FaCalendarCheck color="#32aaf9" />,
  },
];

const StatsSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center px-6 py-16">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: i * 0.2,
            ease: "easeOut",
          }}
          className={`${stat.color} rounded-2xl shadow-lg p-6 border border-primary/20 hover:shadow-xl transition-all`}
        >
          <motion.h4
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
            className="text-3xl font-bold  flex justify-center mb-3"
          >
            {stat.icon}
          </motion.h4>
          <motion.h4
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
            className="text-3xl font-bold text-primary"
          >
            {stat.value}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.3 + 0.2 }}
            className="text-gray-500"
          >
            {stat.label}
          </motion.p>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsSection;
