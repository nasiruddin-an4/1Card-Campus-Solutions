import { useState } from "react";
import { motion } from "framer-motion";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    // Video Modal
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">1Card Campus Solution</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={videoSrc}
            title="1Card Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Replace this with your actual video URL
  const videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-white relative">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Badge */}
        <div className="bg-yellow-500 text-black font-medium text-sm px-4 py-1 rounded-full inline-flex items-center mb-6">
          <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
          <span>1Card Campus Solutions</span>
        </div>

        {/* Heading & Subheading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black mb-6 max-w-2xl mx-auto"
        >
          The Smart Card for Smart Campuses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Transform your campus operations with a single, intelligent card that
          manages everything from printing and scanning to mobile recharges and
          bus fares, ensuring a smooth, connected experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="bg-indigo-900 text-white font-medium px-6 py-3 rounded-md hover:bg-indigo-800 transition">
            Book a Demo
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center text-gray-800 font-medium hover:text-indigo-900 transition group"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition">
              <svg
                className="w-4 h-4 text-indigo-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </span>
            Watch a video
          </button>
        </motion.div>
      </div>

      {/* Phone Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 flex justify-center"
      >
        <img
          src="/api/placeholder/400/700"
          alt="1Card Mobile App"
          className="max-w-xs md:max-w-sm"
        />
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
      />
    </section>
  );
};

export default Hero;
