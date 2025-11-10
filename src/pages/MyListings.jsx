import React, { useEffect, useRef, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useTheme from "../hooks/useTheme";
import { toast } from "react-toastify";

const MyListings = () => {
  const axiosInstance = useAxios();
  const [editingCar, setEditingCar] = useState(null);
  const { user, setLoading, loading } = useAuth();
  const [cars, setCars] = useState([]);
  const [listingsLoading, setListingsLoading] = useState(false);
  const { theme } = useTheme();
  const carModalRef = useRef(null);
  useEffect(() => {
    setListingsLoading(true);
    axiosInstance.get(`/cars?provider_email=${user.email}`).then((data) => {
      setCars(data.data);
      setLoading(false);
      setListingsLoading(false);
    });
  }, [axiosInstance, user, setLoading]);

  if (listingsLoading) return <Loader />;
  if (loading) return <Loader />;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22C55E",
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
          confirmButtonColor: "#22C55E",
          theme: `${theme === "dark" ? "dark" : "light"}`,
        });
      }
    });
  };
  const handleUpdate = (id, e) => {
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
    };
    axiosInstance.patch(`/cars/${id}`, carData).then((data) => {
      setLoading(false);
      if (data.data.modifiedCount) {
        axiosInstance.get("/cars").then((data) => {
          setCars(data.data);
        });
        toast.success("Your Listing Updated");
      }
    });
  };
  const handleModalOpen = (car) => {
    setEditingCar(car);
    carModalRef.current.showModal();
  };
  const handleCloseModal = () => {
    setEditingCar(null);
    carModalRef.current.close();
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
                    <button
                      onClick={() => handleModalOpen(car)}
                      className="btn btn-sm btn-outline btn-success flex items-center gap-1"
                    >
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
          {editingCar && (
            <dialog
              id="updateModal"
              open
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-base-200">
                <form
                  onSubmit={(e) => handleUpdate(editingCar._id, e)}
                  className="space-y-6"
                >
                  <h3 className="subtitle text-center mb-4">
                    Update Your Listing
                  </h3>

                  {/* Car Name */}
                  <div>
                    <label className="label font-semibold">Car Name</label>
                    <input
                      type="text"
                      name="carName"
                      defaultValue={editingCar.carName}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="label font-semibold">Description</label>
                    <textarea
                      name="description"
                      defaultValue={editingCar.description}
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
                      defaultValue={editingCar.category}
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
                      defaultValue={editingCar.rentPrice}
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
                      defaultValue={editingCar.location}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="label font-semibold">
                      Hosted Image URL
                    </label>
                    <input
                      type="url"
                      name="imageUrl"
                      defaultValue={editingCar.imageUrl}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  {/* Submit + Close */}
                  <div className="flex justify-end items-center gap-4 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={loading}
                      type="submit"
                      className="btn btn-primary text-secondary"
                    >
                      {loading ? "Updating..." : "Update Car"}
                    </motion.button>

                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="btn btn-primary btn-outline hover:text-secondary"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default MyListings;
