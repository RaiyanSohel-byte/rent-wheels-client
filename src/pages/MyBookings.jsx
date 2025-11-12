import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import { FaCarSide, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import EmptyList from "../components/EmptyList";
import useTheme from "../hooks/useTheme";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosSecured from "../hooks/useAxiosSecured";

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
  }),
};

const MyBookings = () => {
  const axiosInstanceSecured = useAxiosSecured();
  const axiosInstance = useAxios();
  const { user, setLoading, loading } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [bookingLoading, setBookingLoading] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setBookingLoading(true);
    axiosInstanceSecured
      .get(`/bookings?email=${user.email}`)
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
        setBookingLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosInstance, user, setLoading, axiosInstanceSecured]);

  const handleCancel = (id, carId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22C55E",
      cancelButtonText: "No!",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
      theme: `${theme === "dark" ? "dark" : "light"}`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstanceSecured.delete(`/bookings/${id}`).then((data) => {
          if (data.data.deletedCount) {
            setBookings(bookings.filter((booking) => booking._id !== id));
            axiosInstance
              .patch(`/cars/${carId}`, { status: "available" })
              .then((data) => {
                if (data.data.modifiedCount) {
                  Swal.fire({
                    title: "Cancelled!",
                    text: "Your booking has been cancelled.",
                    icon: "error",
                    confirmButtonColor: "#d92500",
                    theme: `${theme === "dark" ? "dark" : "light"}`,
                  });
                }
              });
          }
        });
      }
    });
  };

  if (loading || bookingLoading) return <Loader />;

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 my-10">
      <h2 className="title mb-8 text-center">My Bookings</h2>

      {bookings.length === 0 ? (
        <EmptyList
          pageText="No Bookings Done Yet"
          btnText={"Browse"}
          toRoute={"/browseCars"}
        />
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
                <th className="p-3 text-left">Action</th>
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
                    <button
                      onClick={() => handleCancel(booking._id, booking.carId)}
                      className="btn btn-sm btn-outline btn-error flex items-center gap-1"
                    >
                      <MdCancel /> Cancel
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

export default MyBookings;
