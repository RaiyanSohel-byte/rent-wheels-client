import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { motion } from "framer-motion";
import CarCard from "../CarCard";
import useAuth from "../../hooks/useAuth";
import Loader from "../Loader";
import { Link } from "react-router";
const LatestCars = () => {
  const axiosInstance = useAxios();
  const [cars, setCars] = useState([]);
  const { loading, setLoading } = useAuth();
  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/latestCars").then((data) => {
      setCars(data.data);
      setLoading(false);
    });
  }, [axiosInstance, setLoading]);
  if (loading) {
    return <Loader />;
  }
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="title my-10">Latest Cars</h2>
        <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
          Discover the latest additions to our fleet — stylish, powerful, and
          ready for your next adventure.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cars.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <CarCard car={car} />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center mt-15">
        <Link
          to="/browseCars"
          className="btn btn-primary btn-outline hover:text-secondary"
        >
          Show All Cars
        </Link>
      </div>
    </section>
  );
};

export default LatestCars;
