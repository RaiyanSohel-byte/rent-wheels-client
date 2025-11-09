import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import CarCard from "../components/CarCard";
import useAuth from "../hooks/useAuth";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const BrowseCars = () => {
  const axiosInstance = useAxios();
  const [cars, setCars] = useState([]);
  const { user, setLoading, loading } = useAuth();
  useEffect(() => {
    axiosInstance.get(`/cars`).then((data) => {
      setLoading(false);
      setCars(data.data);
    });
  }, [axiosInstance, user, setLoading]);

  if (loading) return <Loader />;

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 my-10">
      <h2 className="title mb-10 text-center">Browse Cars</h2>

      {cars.length === 0 ? (
        <p className="text-center text-gray-500">
          No cars available at the moment.
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cars.map((car) => (
            <motion.div key={car._id} variants={cardVariants}>
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default BrowseCars;
