import { motion } from "framer-motion";

const LogoMarquee = () => {
  const logos = [
    "src/assets/2.avif",
    "src/assets/4.avif",
    "src/assets/4.avif",
    "src/assets/5.avif",
    "src/assets/6.avif",
    "src/assets/5.avif",
  ];

  return (
    <section
      className="py-12 relative bg-dot-pattern bg-dot-grid"
      id="partners"
    >
      <div className="container space-y-8">
        {/* Header Banner */}
        <div className="text-center mb-8 px-4 py-8 space-y-6">
          <div className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full inline-flex items-center justify-center mb-6">
            <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
            <span>Seamless Connections</span>
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">
            Integrate with Your Favorite Payment Partner
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Connect your 1Card with leading Mobile Financial Services (MFS) platforms, as well as MasterCard and Visa, for a frictionless campus transaction experience.
          </p>
        </div>

        {/* Main Logo - Positioned with better z-index and shadow */}
        <div className="absolute left-[50%] top-[50%]  transform -translate-x-1/2 z-50 ">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-full  shadow-2xl p-4 hover:shadow-3xl transition-shadow duration-300 border"
          >
            <img
              src="src/assets/Logo.avif"
              alt="Main Logo"
              className="w-24 h-24 object-contain "
            />
          </motion.div>
        </div>

        {/* Marquee Container with improved spacing */}
        <div className="relative flex gap-4">
          {/* Left to Right Marquee */}
          <div className="w-1/2 overflow-hidden">
            <motion.div
              className="flex space-x-4 animate-marquee-left"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 w-[120px] h-20 flex items-center justify-center transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="max-w-full h-auto duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right to Left Marquee */}
          <div className="w-1/2 overflow-hidden">
            <motion.div
              className="flex space-x-4 animate-marquee-right"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 w-[120px] h-20 flex items-center justify-center transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="max-w-full h-auto duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-14">
          <a
            href="#"
            className="bg-gradient-to-b from-blue-600 to-black text-white font-medium px-6 py-2 rounded-md transition transform hover:scale-105 hover:opacity-90"
          >
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
