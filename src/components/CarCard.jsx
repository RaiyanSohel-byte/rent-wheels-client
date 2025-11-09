import React from "react";
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { Link } from "react-router";

const CarCard = ({ car }) => {
  return (
    <div
      whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
      className="bg-base-100 lg:w-[370px] mx-auto h-[510px] border border-base-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300"
    >
      <div className="relative">
        <img
          src={car.imageUrl}
          alt={car.carName}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 left-3 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
          {car.category}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-base-content h-[60px]">
          {car.carName}{" "}
          <span
            className={`${
              car.status === "available"
                ? "badge badge-success badge-sm font-bold badge-outline badge-soft rounded-full ml-1"
                : "badge badge-error badge-sm font-bold badge-outline badge-soft rounded-full ml-1"
            }`}
          >
            {car.status.toUpperCase()}
          </span>
        </h3>
        <p className="text-gray-500 text-sm h-[45px] line-clamp-2">
          {car.description}
        </p>

        <div className="flex h-[30px] justify-between items-center mt-3 text-sm">
          <span className="flex items-center gap-1 text-gray-500">
            <FaMapMarkerAlt className="text-primary" /> {car.location}
          </span>
          <span className="flex items-center gap-1 font-semibold text-success">
            <FaTag /> ৳{car.rentPrice}/day
          </span>
        </div>

        <Link
          to={`/carDetails/${car._id}`}
          className="btn btn-primary w-full mt-4 text-secondary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
