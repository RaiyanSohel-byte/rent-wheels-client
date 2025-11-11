import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Cars Available", value: "500+" },
  { label: "Happy Clients", value: "10K+" },
  { label: "Cities Covered", value: "25+" },
  { label: "Years of Service", value: "5+" },
];

const StatsSection = () => {
  return (
    <section className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center px-6">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="bg-base-200 rounded-2xl p-6 shadow-md"
        >
          <h4 className="text-3xl font-bold text-primary">{stat.value}</h4>
          <p className="text-gray-500">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsSection;
