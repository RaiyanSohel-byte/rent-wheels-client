import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const cars = [
  {
    name: "Tesla Model S",
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=1200:*",
    rating: 4.9,
    price: 120,
    type: "Electric Sedan",
  },
  {
    name: "Range Rover Sport",
    img: "https://di-uploads-pod1.dealerinspire.com/landroverwillowgrove/uploads/2019/07/2020-Land-Rover-Range-Rover-Sport-Driving.jpg",
    rating: 4.8,
    price: 150,
    type: "Luxury SUV",
  },
  {
    name: "Toyota Corolla",
    img: "https://media.ed.edmunds-media.com/toyota/corolla/2026/oem/2026_toyota_corolla_sedan_xse_fq_oem_1_815.jpg",
    rating: 4.7,
    price: 70,
    type: "Compact Sedan",
  },
  {
    name: "BMW i8",
    img: "https://images.unsplash.com/photo-1667551181687-e3eb9babf037?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    rating: 4.9,
    price: 200,
    type: "Hybrid Sports Car",
  },
];

const TopRatedCars = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="title mb-4"
        >
          Top Rated Cars
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto mb-12"
        >
          Our customers love these vehicles the most — combining luxury,
          performance, and value in one ride.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-base-200 rounded-3xl shadow-md overflow-hidden border border-base-300 hover:shadow-xl transition-all"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{car.type}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${
                        i < Math.round(car.rating) ? "" : "opacity-40"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">{car.rating}</span>
                </div>
                <p className="font-semibold text-primary text-lg">
                  ${car.price}/day
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedCars;
