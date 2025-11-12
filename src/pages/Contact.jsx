import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Office",
      details: "House 32, Road 10, Dhanmondi, Dhaka, Bangladesh",
      color: "accent",
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
      color: "accent",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      details: "Sat - Thu: 9:00 AM - 10:00 PM",
      color: "accent",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent!");
    e.target.reset();
  };

  return (
    <section className="min-h-screen max-w-[1200px] mx-auto bg-gradient-to-br from-base-100 via-base-200/50 to-base-100 text-base-content py-20 px-6 my-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div
          className="w-full lg:w-1/2 space-y-10"
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
          className="w-full lg:w-1/2 bg-base-200 p-8 rounded-3xl shadow-2xl backdrop-blur-lg"
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
      <div className="flex justify-center lg:block">
        <div className="mt-10">
          <h4 className="font-semibold text-lg mb-4 text-center lg:text-left">
            Connect with us
          </h4>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/raiyan.sohel.2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/raiyansohel/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/raiyan-sohel-5450b71a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-all"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/RaiyanSohel1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-sky-600 transition-all"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center lg:text-left">
        <p className="text-gray-500 mb-3">Need quick help?</p>
        <a
          href="https://wa.me/8801790839334"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-wide text-white"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </div>
      <motion.div
        className="w-full max-w-[1200px] mx-auto mt-16 h-72 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          title="RentWheels Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3203945376767!2d90.35755017493688!3d23.77160257865588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1a9a4d01ce9%3A0xc31d0fb3cd1a7d7d!2sNHA%20Garden%20City!5e0!3m2!1sen!2sbd!4v1762759327095!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Contact;
