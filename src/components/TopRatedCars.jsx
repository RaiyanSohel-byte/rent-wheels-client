import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const cars = [
  {
    name: "Tesla Model S",
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=1200:*",
    rating: 5.0,
    price: 12000,
    type: "Electric",
  },
  {
    name: "Range Rover Sport",
    img: "https://di-uploads-pod1.dealerinspire.com/landroverwillowgrove/uploads/2019/07/2020-Land-Rover-Range-Rover-Sport-Driving.jpg",
    rating: 5.0,
    price: 18000,
    type: "SUV",
  },
  {
    name: "Toyota Corolla X",
    img: "https://media.ed.edmunds-media.com/toyota/corolla/2026/oem/2026_toyota_corolla_sedan_xse_fq_oem_1_815.jpg",
    rating: 5.0,
    price: 5000,
    type: "Sedan",
  },
  {
    name: "BMW i8",
    img: "https://images.unsplash.com/photo-1667551181687-e3eb9babf037?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    rating: 5.0,
    price: 24000,
    type: "Luxury",
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
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={false}
          autoFill={true}
          className="py-10"
          style={{ willChange: "transform" }}
        >
          <div className="flex items-center gap-6">
            {[...cars, ...cars, ...cars].map((car, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 bg-base-200 rounded-3xl shadow-md overflow-hidden border border-base-300 hover:shadow-xl transition-all w-[260px] ${
                  index === 0 && "ml-4"
                }`}
              >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold mb-1">{car.name}</h3>
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
                    <span className="ml-2 text-gray-600 text-sm">
                      {car.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="font-semibold text-primary text-lg">
                    ৳{car.price}/day
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TopRatedCars;
