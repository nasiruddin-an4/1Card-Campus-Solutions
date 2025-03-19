import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
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
  const videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <section
      className="pt-24 sm:pt-36 bg-white relative bg-dot-pattern bg-dot-grid"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
          linear-gradient(to top left, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
          radial-gradient(circle, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: "auto, auto, 20px 20px",
      }}
    >
      <div className="max-w-6xl mx-auto text-center px-4 lg:px-0">
        <div className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full inline-flex items-center justify-center mb-6">
          <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
          <span>1Card Campus Solutions</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl text-black mb-6 max-w-2xl mx-auto"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="bg-gradient-to-b from-blue-600 to-black text-white font-medium px-8 py-3 rounded-md transition transform hover:scale-105 hover:opacity-90">
            Book a Demo
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center text-gray-800 font-medium hover:text-indigo-900 transition transform hover:scale-105 group"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 mr-2">
              <FaPlay className="w-4 h-4 text-indigo-900" />
            </span>
            Watch a video
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-5 flex justify-center"
      >
        <img
          src="src/assets/Phone Image.avif"
          alt="1Card Mobile App"
          className=""
        />
      </motion.div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
      />
    </section>
  );
};

export default Hero;