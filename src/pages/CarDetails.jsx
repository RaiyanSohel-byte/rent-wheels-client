import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import {
  FaArrowLeft,
  FaCarSide,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import bookingAnimation from "../assets/bookingAnimation.json";
import { toast } from "react-toastify";
const CarDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const { user, setLoading } = useAuth();
  const [car, setCar] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [showLottie, setShowLottie] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`/cars/${id}`).then((data) => {
      setCar(data.data);
      setLoading(false);
    });
  }, [axiosInstance, id, setLoading]);

  if (!car) return <Loader />;

  const handleBooking = () => {
    const bookingData = {
      ...car,
      status: "unavailable",
      bookedBy: {
        userName: user.displayName,
        userEmail: user.email,
        bookedAt: new Date().toLocaleDateString(),
      },
    };
    axiosInstance.post("/bookings", bookingData).then((data) => {
      if (data.data.insertedId) {
        axiosInstance
          .patch(`/cars/${car._id}`, { status: "unavailable" })
          .then((data) => {
            console.log(data.data);
            setCar({ ...car, status: "unavailable" });
            toast.success("Booked!");
          });
        setShowLottie(true);
        setIsBooking(true);
        setTimeout(() => {
          setIsBooking(false);
          setShowLottie(false);
        }, 3000);
      }
    });
  };
  console.log(car.provider_image);
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 py-16 my-10 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {showLottie && (
        <div className="absolute inset-0 flex justify-center items-center z-50 p-4">
          <div className="w-20 h-20 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <Lottie animationData={bookingAnimation} loop={false} />
          </div>
        </div>
      )}
      <motion.button
        onClick={() => navigate("/browseCars")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-md sm:text-primary font-medium text-secondary mb-6 cursor-pointer"
      >
        <FaArrowLeft /> Browse Other Cars
      </motion.button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div className="relative" variants={cardVariants}>
          <img
            src={car.imageUrl}
            alt={car.carName}
            className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
          />
          <span className="absolute top-4 left-4 bg-primary text-secondary px-4 py-1 rounded-full text-sm">
            {car.category}
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col justify-between"
          variants={cardVariants}
        >
          <div>
            <motion.h2
              className="text-4xl font-bold text-primary mb-3 flex items-center gap-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {car.carName}{" "}
              <span
                className={`${
                  car.status === "available"
                    ? "badge badge-success  font-bold badge-outline badge-soft rounded-full ml-1"
                    : "badge badge-error  font-bold badge-outline badge-soft rounded-full ml-1"
                }`}
              >
                {car.status === "available" ? "Available" : "Booked"}
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-500 mb-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {car.description}
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-gray-500 mb-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <FaMapMarkerAlt className="text-accent" />
              <span>{car.location}</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-gray-500 mb-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FaCarSide className="text-accent" />
              <span>Category: {car.category}</span>
            </motion.div>

            <motion.h3
              className="text-2xl font-semibold text-primary mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              ৳ {car.rentPrice} / day
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {car.provider_email === user.email ? (
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm shadow-sm">
                  <FaUser className="text-primary" />
                  Owned by You -{" "}
                  <Link to="/myListings" className="underline text-accent">
                    Manage Availability
                  </Link>
                </div>
              ) : car.status === "available" ? (
                <button
                  onClick={handleBooking}
                  disabled={isBooking}
                  className="btn bg-primary text-secondary hover:bg-accent transition-all"
                >
                  {isBooking ? "Booking..." : "Book Now"}
                </button>
              ) : (
                <h3 className="text-error font-bold text-xl">
                  Already Booked!
                </h3>
              )}
            </motion.div>
          </div>

          <motion.div
            className="mt-8 border-t pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="font-semibold text-gray-500 mb-4">
              Posted by Provider
            </h4>
            <div className="flex items-center gap-4">
              <img
                src={car.provider_image}
                alt={car.provider_name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-500 flex items-center gap-2 ">
                  <FaUser /> {car.provider_name}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaEnvelope /> {car.provider_email}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Posted on {car.posted_at}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CarDetails;
