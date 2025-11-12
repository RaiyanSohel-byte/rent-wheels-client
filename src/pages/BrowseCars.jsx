import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAxios from "../hooks/useAxios";
import Loader from "../components/Loader";
import CarCard from "../components/CarCard";
import useAuth from "../hooks/useAuth";
import useSearch from "../hooks/useSearch";
import EmptyList from "../components/EmptyList";
import { MdCancel } from "react-icons/md";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const BrowseCars = () => {
  const axiosInstance = useAxios();
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [displayedCars, setDisplayedCars] = useState([]);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const { user, setLoading, loading } = useAuth();
  const { search, setSearch } = useSearch();

  useEffect(() => {
    setLoading(true);
    const endPoint = search ? `/search?search=${search}` : "/cars";
    axiosInstance.get(endPoint).then((res) => {
      setLoading(false);
      setCars(res.data);
    });
  }, [axiosInstance, user, setLoading, search]);

  useEffect(() => {
    let filtered = [...cars];

    if (category !== "All") {
      filtered = filtered.filter(
        (car) =>
          car.category?.toLowerCase() === category.toLowerCase() ||
          car.type?.toLowerCase() === category.toLowerCase()
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sort === "priceLow") return a.rentPrice - b.rentPrice;
      if (sort === "priceHigh") return b.rentPrice - a.rentPrice;
      if (sort === "yearNew")
        return new Date(b.posted_at) - new Date(a.posted_at);
      if (sort === "yearOld")
        return new Date(a.posted_at) - new Date(b.posted_at);
      return 0;
    });

    setFilteredCars(sorted);
    setDisplayedCars(sorted.slice(0, visibleCount));
  }, [sort, category, cars, visibleCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.searchText.value);
  };

  const handleClear = () => {
    setSearch("");
    setCategory("All");
    setSort("");
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  if (loading) return <Loader />;

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 my-10">
      <h2 className="title mb-10 text-center">Browse Cars</h2>

      <div className="xl:flex justify-between items-start">
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {["All", "Sedan", "Hatchback", "SUV", "Electric", "Luxury"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  category === cat
                    ? "btn-primary btn btn-sm text-secondary"
                    : "btn btn-primary btn-outline btn-sm hover:text-secondary"
                }`}
              >
                {cat}
              </button>
            )
          )}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 bg-primary text-secondary focus:ring-2 focus:ring-primary cursor-pointer"
          >
            <option value="">Sort by</option>
            <option value="priceLow">Price: Low → High</option>
            <option value="priceHigh">Price: High → Low</option>
            <option value="yearNew">Year: Newest</option>
            <option value="yearOld">Year: Oldest</option>
          </select>
        </div>
        <form className="mb-10" onSubmit={handleSubmit}>
          <div className="lg:flex gap-4 items-center justify-center mb-8 xl:mb-0 rounded-md">
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
          </div>
          {search && (
            <div className="flex justify-center my-4">
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center cursor-pointer gap-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 px-2 py-1 rounded-md font-medium transition-all"
              >
                <MdCancel className="text-lg" />
                Clear Search
              </button>
            </div>
          )}
        </form>
      </div>

      {displayedCars.length === 0 ? (
        <EmptyList
          pageText="No cars found"
          btnText="Clear Search"
          toRoute="/browseCars"
          handleClear={handleClear}
        />
      ) : (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {displayedCars.map((car) => (
                <motion.div
                  key={car._id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {displayedCars.length < filteredCars.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleLoadMore}
                className="bg-primary text-secondary cursor-pointer btn-primary btn"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BrowseCars;
