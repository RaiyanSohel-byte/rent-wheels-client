import { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { googleLogin, createUser, updateUser, setUser } = useAuth();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase and one lowercase letter."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            toast.success("Registration Successful");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.code);
          });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Success");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section className="min-h-[calc(100vh+150px)] flex items-center justify-center text-base-content relative overflow-hidden">
      <motion.div
        className="relative w-full max-w-md p-8 rounded-2xl border border-primary/20 shadow-md bg-white/1 backdrop-blur-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-6"
          variants={itemVariants}
          custom={0}
        >
          Join Us!
        </motion.h2>

        <motion.form onSubmit={(e) => handleRegister(e)} className="space-y-5">
          <motion.div
            className="form-control"
            variants={itemVariants}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-base-100/40 backdrop-blur-sm"
              name="name"
              required
            />
          </motion.div>
          <motion.div
            className="form-control"
            variants={itemVariants}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full bg-base-100/40 backdrop-blur-sm"
              name="email"
              required
            />
          </motion.div>
          <motion.div
            className="form-control"
            variants={itemVariants}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Your Photo URL"
              className="input input-bordered w-full bg-base-100/40 backdrop-blur-sm"
              name="photo"
              required
            />
          </motion.div>
          <motion.div
            className="form-control relative"
            variants={itemVariants}
            custom={2}
            initial="hidden"
            animate="visible"
          >
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Your Password"
              className="input input-bordered w-full pr-10 bg-base-100/40 backdrop-blur-sm"
              name="password"
              required
            />
            <div
              className="absolute z-10 right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </div>
          </motion.div>

          <button
            type="submit"
            className="btn w-full bg-primary text-base-100 hover:bg-primary/90 transition-all"
            variants={itemVariants}
            custom={4}
            initial="hidden"
            animate="visible"
          >
            Register
          </button>
        </motion.form>

        <motion.div
          className="divider text-sm text-primary"
          variants={itemVariants}
          custom={5}
          initial="hidden"
          animate="visible"
        >
          OR
        </motion.div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full bg-secondary/40 backdrop-blur-md text-accent hover:bg-accent hover:text-white transition-all"
          variants={itemVariants}
          custom={6}
          initial="hidden"
          animate="visible"
        >
          <FaGoogle /> Continue with Google
        </button>

        <motion.p
          className="text-center text-sm mt-4 text-gray-500"
          variants={itemVariants}
          custom={7}
          initial="hidden"
          animate="visible"
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-accent font-semibold hover:underline"
          >
            Log In
          </Link>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Register;
