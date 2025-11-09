import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to RentWheels. By accessing or using our platform, you agree to comply with these Terms and Conditions. Please read them carefully before using our services.",
    },
    {
      title: "2. Eligibility",
      content:
        "To rent a vehicle through RentWheels, you must be at least 21 years old and hold a valid driver’s license. Some vehicle categories may require additional verification or a higher age limit.",
    },
    {
      title: "3. Booking & Payment",
      content:
        "All bookings must be made through our official website or mobile app. Full or partial payment may be required at the time of booking. We accept major debit/credit cards and verified digital payments.",
    },
    {
      title: "4. Cancellation & Refund Policy",
      content:
        "Cancellations made at least 24 hours before the booking time may be eligible for a full or partial refund. Late cancellations or no-shows may result in a penalty. Please refer to our Refund Policy for more details.",
    },
    {
      title: "5. User Responsibilities",
      content:
        "Users must ensure that the rented vehicle is handled with care and returned in the same condition as received. Any damage, traffic fines, or violations during the rental period are the sole responsibility of the renter.",
    },
    {
      title: "6. Liability Disclaimer",
      content:
        "RentWheels acts as a platform connecting renters and car providers. We are not liable for any accidents, damages, or losses incurred during vehicle use. Insurance coverage depends on the selected provider’s terms.",
    },
    {
      title: "7. Account Termination",
      content:
        "We reserve the right to suspend or terminate any user account found in violation of our terms, including fraudulent activity, misuse of vehicles, or disrespectful behavior towards service providers.",
    },
    {
      title: "8. Modifications",
      content:
        "RentWheels reserves the right to update or modify these Terms and Conditions at any time. Continued use of our services after updates implies your acceptance of the revised terms.",
    },
    {
      title: "9. Contact Information",
      content:
        "For questions about these Terms and Conditions, please contact our support team at support@rentwheels.com.",
    },
  ];

  return (
    <section className="min-h-screen text-base-content py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10 my-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl title text-center"
        >
          Terms & Conditions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-center max-w-2xl mx-auto"
        >
          These Terms & Conditions outline the rules and regulations for using
          RentWheels’ platform and services. By booking or using our services,
          you agree to be bound by the terms listed below.
        </motion.p>

        <div className="space-y-8">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-base-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
