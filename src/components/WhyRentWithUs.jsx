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

const WhyRentWithUs = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      <h2 className="title mb-12">Why Rent With Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-base-200 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-base-300 hover:shadow-xl transition-all"
          >
            <div className="text-4xl text-primary mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyRentWithUs;
