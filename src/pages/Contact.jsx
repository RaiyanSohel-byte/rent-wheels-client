import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Office",
      details: "House 32, Road 10, Dhanmondi, Dhaka, Bangladesh",
      color: "primary",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+880 1789-000000",
      color: "accent",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "support@rentwheels.com",
      color: "success",
    },
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent!");
    e.target.reset();
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-base-100 via-base-200/50 to-base-100 text-base-content py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-[1200px] my-10 mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div
          className="w-full md:w-1/2 space-y-10"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title mb-4">Get in Touch</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Have a question, feedback, or partnership idea? We’d love to hear
            from you. Reach out anytime — our team is here 24/7 to assist you.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`flex items-center gap-5 bg-${info.color}/10 border-l-4 border-${info.color} p-5 rounded-2xl shadow-md hover:shadow-lg transition-all`}
              >
                <div className={`text-${info.color} text-3xl`}>{info.icon}</div>
                <div>
                  <h4 className="font-bold text-lg">{info.title}</h4>
                  <p className="text-gray-500">{info.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={(e) => handleFormSubmit(e)}
          className="w-full md:w-1/2 bg-base-200/60 p-8 rounded-3xl shadow-2xl backdrop-blur-lg"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="subtitle mb-6">Send Us a Message</h3>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full bg-base-100"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered w-full bg-base-100"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Type your message..."
              className="textarea textarea-bordered w-full bg-base-100 h-32"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="btn btn-primary w-full text-secondary text-lg font-semibold mt-2"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
