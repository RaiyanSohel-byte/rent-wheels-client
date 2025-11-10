import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import CarCard from "../components/CarCard";
import useAuth from "../hooks/useAuth";
import useSearch from "../hooks/useSearch";

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
  const { search, setSearch } = useSearch();

  useEffect(() => {
    setLoading(true);
    const endPoint = search ? `/search?search=${search}` : "/cars";
    axiosInstance.get(endPoint).then((data) => {
      setLoading(false);
      setCars(data.data);
    });
  }, [axiosInstance, user, setLoading, search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.searchText.value);
  };
  const handleClear = () => {
    setSearch("");
  };
  if (loading) return <Loader />;

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 my-10">
      <h2 className="title mb-10 text-center">Browse Cars</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="lg:flex gap-4 items-center justify-center mb-8 rounded-md">
          <div className="flex items-center justify-center">
            <input
              type="text"
              name="searchText"
              placeholder="Search by car name..."
              className="input placeholder:text-gray-600 lg:w-[300px] rounded-r-none px-5 py-2 text-gray-800 outline-none rounded-md bg-gray-200"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white rounded-md rounded-l-none px-6 py-2 cursor-pointer font-medium hover:bg-gray-700 transition-all"
            >
              Search
            </button>
          </div>
          {search && (
            <div className="flex justify-center my-4">
              {" "}
              <button
                type="button"
                onClick={handleClear}
                className="btn btn-primary btn-sm lg:btn-md"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </form>
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
            <div key={car._id} variants={cardVariants}>
              <CarCard car={car} />
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default BrowseCars;
