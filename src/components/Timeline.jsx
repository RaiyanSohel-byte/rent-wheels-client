import React from "react";
import { motion } from "framer-motion";
const Timeline = () => {
  const timelineData = [
    {
      year: "2019",
      title: "Founded",
      description:
        "RentWheels was born with a vision to simplify car rentals and connect users directly with trusted local owners.",
    },
    {
      year: "2020",
      title: "First 1,000 Users",
      description:
        "We reached our first major milestone — 1,000 happy customers across multiple cities in Bangladesh.",
    },
    {
      year: "2021",
      title: "Nationwide Expansion",
      description:
        "Expanded our platform to all major cities, adding more car categories and improving user experience.",
    },
    {
      year: "2023",
      title: "Mobile App Launch",
      description:
        "Introduced our mobile app for Android and iOS to make renting faster and easier on the go.",
    },
    {
      year: "2025",
      title: "Sustainable Mobility",
      description:
        "Partnered with eco-friendly providers to introduce electric and hybrid cars into our fleet.",
    },
  ];
  return (
    <div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <motion.div
        className="mt-24 max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="title text-center mb-12">Our Journey</h3>

        <div className="relative border-l-4 border-primary/30 pl-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-10 ml-4"
            >
              <div className="absolute -left-3 w-6 h-6 bg-primary rounded-full border-4 border-base-100 shadow-md"></div>
              <h4 className="text-xl font-bold text-primary">{item.year}</h4>
              <h5 className="text-lg font-semibold mt-1">{item.title}</h5>
              <p className="text-gray-500 mt-2 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
