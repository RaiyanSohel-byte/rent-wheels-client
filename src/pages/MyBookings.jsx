import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import { FaCarSide, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import EmptyList from "../components/EmptyList";

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
  }),
};

const MyBookings = () => {
  const axiosInstance = useAxios();
  const { user, setLoading, loading } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    setBookingLoading(true);
    axiosInstance
      .get(`/bookings?email=${user.email}`)
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
        setBookingLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosInstance, user, setLoading]);

  if (loading || bookingLoading) return <Loader />;

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 my-10">
      <h2 className="title mb-8 text-center">My Bookings</h2>

      {bookings.length === 0 ? (
        <EmptyList pageText="No Bookings Done Yet" />
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
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Booked On</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <motion.tr
                  key={booking._id}
                  custom={i}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  className="border-b hover:bg-base-300 hover:text-primary transition-colors"
                >
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={booking.imageUrl}
                      alt={booking.carName}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <span>{booking.carName}</span>
                  </td>
                  <td className="p-3 ">
                    <h3 className="flex items-center gap-1">
                      <FaCarSide /> {booking.category}
                    </h3>
                  </td>
                  <td className="p-3 ">
                    <h3 className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {booking.location}
                    </h3>
                  </td>
                  <td className="p-3 ">
                    <h3 className="flex items-center gap-1">
                      {" "}
                      <FaCalendarAlt /> {booking.bookedBy.bookedAt}
                    </h3>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        booking.status === "available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {booking.status.charAt(0).toUpperCase() +
                        booking.status.slice(1)}
                    </span>
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

export default MyBookings;
