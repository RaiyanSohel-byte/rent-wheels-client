import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const AddCar = () => {
  const { user } = useAuth() || {};
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);

  const handleAddCar = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const carData = {
      carName: form.carName.value,
      description: form.description.value,
      category: form.category.value,
      rentPrice: form.rentPrice.value,
      location: form.location.value,
      imageUrl: form.imageUrl.value,
      providerName: user?.displayName,
      providerEmail: user?.email,
      status: "available",
      provider_email: user.email,
      provider_image: user.photoURL,
      provider_name: user.displayName,
      posted_at: new Date().toLocaleString(),
    };
    axiosInstance.post("/cars", carData).then((data) => {
      if (data.data.insertedId) {
        console.log(carData);
        toast.success("Car added successfully!");
        form.reset();
        setLoading(false);
      }
    });
  };

  return (
    <section className="min-h-screen text-base-content py-20 px-6 my-10">
      <div className="max-w-3xl mx-auto bg-base-200 p-10 rounded-3xl shadow-lg border border-base-300">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="title text-center mb-8"
        >
          Add a New Car
        </motion.h2>

        <form onSubmit={handleAddCar} className="space-y-6">
          {/* Car Name */}
          <div>
            <label className="label font-semibold">Car Name</label>
            <input
              type="text"
              name="carName"
              placeholder="e.g., Toyota Corolla"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              placeholder="Brief description about the car..."
              className="textarea textarea-bordered w-full h-28"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              className="select select-bordered w-full cursor-pointer"
              required
            >
              <option value="">Select Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Luxury">Luxury</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Rent Price */}
          <div>
            <label className="label font-semibold">
              Rent Price ৳ (Per Day)
            </label>
            <input
              type="number"
              name="rentPrice"
              placeholder="e.g., 50"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              name="location"
              placeholder="e.g., Dhaka, Bangladesh"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-semibold">Hosted Image URL</label>
            <input
              type="url"
              name="imageUrl"
              placeholder="e.g., https://images.unsplash.com/car-photo"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Provider Info (Read-only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label font-semibold">Provider Name</label>
              <input
                type="text"
                name="providerName"
                value={user?.displayName || ""}
                readOnly
                className="input input-bordered w-full bg-base-300 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="label font-semibold">Provider Email</label>
              <input
                type="email"
                name="providerEmail"
                value={user?.email || ""}
                readOnly
                className="input input-bordered w-full bg-base-300 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            type="submit"
            className="btn btn-primary text-secondary w-full mt-6"
          >
            {loading ? "Adding..." : "Add Car"}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default AddCar;
