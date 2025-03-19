import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get started with the app?",
      answer: "Download the app from your device's app store, create an account using your student email, and follow the simple onboarding process."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect all your sensitive information."
    },
    {
      question: "Can I use the app off-campus?",
      answer: "Absolutely! While some features are campus-specific, core functionalities like expense tracking and payments work anywhere."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team through the app's help center, email support@example.com, or visit the campus tech support office."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="font-medium text-left text-dark">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <HiMinus className="w-6 h-6 text-primary" />
                ) : (
                  <HiPlus className="w-6 h-6 text-primary" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;