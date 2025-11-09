import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I book a car?",
    answer:
      "Simply browse cars, select your preferred one, and complete the booking online.",
  },
  {
    question: "Are there hidden charges?",
    answer: "No, all prices are transparent and inclusive of applicable fees.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel anytime according to our cancellation policy.",
  },
];

const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="title text-center mb-12">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-base-200 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer"
            onClick={() => toggleFAQ(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-primary">
                {faq.question}
              </h3>
              <span className="text-2xl font-bold text-accent">
                {openIndex === i ? "-" : "+"}
              </span>
            </div>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-500 text-sm leading-relaxed overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPreview;
