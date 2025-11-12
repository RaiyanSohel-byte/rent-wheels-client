import { motion } from "framer-motion";
import { FaCar, FaHandshake, FaDollarSign, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaCar />,
    title: "Easy Booking",
    desc: "Book your ride in seconds with our seamless system.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Providers",
    desc: "Verified owners and vehicles you can rely on.",
  },
  {
    icon: <FaDollarSign />,
    title: "Affordable Rates",
    desc: "Competitive prices without hidden fees.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Support",
    desc: "Always here to help, day or night.",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const WhyRentWithUs = () => {
  return (
    <motion.section
      className="max-w-[1200px] mx-auto py-20 px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 space-y-4"
      >
        <h2 className="title">Why Rent With Us</h2>
        <p className="text-lg text-gray-500 leading-relaxed text-center">
          Smart, simple, and seamless car rentals — built around you.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-base-200/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-primary/20 hover:shadow-xl transition-all"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl text-primary mb-4 flex justify-center"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyRentWithUs;
