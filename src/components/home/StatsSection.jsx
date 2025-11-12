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
          className="bg-base-200 rounded-2xl border border-primary/20 p-6 shadow-md hover:shadow-lg transition-all"
        >
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
