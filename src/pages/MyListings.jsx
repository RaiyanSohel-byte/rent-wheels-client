import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useTheme from "../hooks/useTheme";

const MyListings = () => {
  const axiosInstance = useAxios();
  const { user, setLoading, loading } = useAuth();
  const [cars, setCars] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    axiosInstance.get(`/cars?provider_email=${user.email}`).then((data) => {
      setCars(data.data);
      setLoading(false);
    });
  }, [axiosInstance, user, setLoading]);

  if (loading) return <Loader />;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1eb355",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      theme: `${theme === "dark" ? "dark" : "light"}`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/cars/${id}`).then((data) => {
          if (data.data.deletedCount) {
            setCars(cars.filter((car) => car._id !== id));
            setLoading(false);
          }
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your listing has been deleted.",
          icon: "success",
          confirmButtonColor: "#1eb355",
          theme: `${theme === "dark" ? "dark" : "light"}`,
        });
      }
    });
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 my-10">
      <h2 className="title mb-8 text-center">My Listings</h2>

      {cars.length === 0 ? (
        <p className="text-center text-gray-500">You have no listings yet.</p>
      ) : (
        <motion.div
          className="overflow-x-auto"
          initial="hidden"
          animate="visible"
        >
          <table className="table w-full border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-base-200">
              <tr>
                <th className="p-3 text-left">Car Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Rent Price</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, i) => (
                <motion.tr
                  key={car._id}
                  custom={i}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  className="border-b hover:bg-base-300 hover:text-primary transition-colors"
                >
                  <td className="p-3">{car.carName}</td>
                  <td className="p-3">{car.category}</td>
                  <td className="p-3">৳ {car.rentPrice}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-semibold ${
                        car.status === "available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-3 flex gap-2">
                    <button className="btn btn-sm btn-outline btn-success flex items-center gap-1">
                      <FaEdit /> Update
                    </button>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="btn btn-sm btn-outline btn-error flex items-center gap-1"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </section>
  );
};

export default MyListings;
