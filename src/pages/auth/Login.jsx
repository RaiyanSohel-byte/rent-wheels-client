import { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

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
    <section className="min-h-screen flex items-center justify-center bg-base-100 text-base-content relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-neutral/10 backdrop-blur-md"></div>

      <motion.div
        className="relative w-full max-w-md p-8 rounded-2xl border border-white/10 shadow-2xl bg-base-200/40 backdrop-blur-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-6"
          variants={itemVariants}
          custom={0}
        >
          Welcome Back
        </motion.h2>

        <motion.form className="space-y-5">
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
              placeholder="••••••••"
              className="input input-bordered w-full pr-10 bg-base-100/40 backdrop-blur-sm"
              required
            />
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
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
            Login
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
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-accent font-semibold hover:underline"
          >
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Login;
