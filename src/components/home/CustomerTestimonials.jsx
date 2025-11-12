import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Adam Smith",
    role: "Business Traveler",
    img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    review:
      "RentWheels made my trip effortless. Booking was smooth, the car was spotless, and customer service was exceptional!",
  },
  {
    name: "David Lee",
    role: "Vacationer",
    img: "https://images.unsplash.com/photo-1583195763986-0231686dcd43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176",
    review:
      "I rented a Tesla for my family trip — best decision ever! Highly recommend for luxury and reliability.",
  },
  {
    name: "Amin Ahmed",
    role: "Frequent Renter",
    img: "https://images.unsplash.com/photo-1598698230199-f7f08ed4234b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    review:
      "Affordable rates and trustworthy providers. RentWheels is my go-to for car rentals every time I travel.",
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-primary"
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto mb-12"
        >
          Hear from our happy customers who trust RentWheels for every journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-base-200 border border-primary/20 rounded-3xl shadow-md hover:shadow-lg transition-all p-8 flex flex-col items-center text-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary/20"
              />
              <h3 className="font-semibold text-lg mb-1">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{t.role}</p>
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                “{t.review}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
