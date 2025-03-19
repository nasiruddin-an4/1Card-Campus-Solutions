import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      image: "https://placehold.co/100x100",
      quote: "This app has completely transformed how I manage my campus life. The expense tracking feature is a game-changer!"
    },
    {
      name: "Dr. Michael Chen",
      role: "Professor",
      image: "https://placehold.co/100x100",
      quote: "The seamless integration with campus services has made administrative tasks much more efficient."
    },
    {
      name: "Emily Rodriguez",
      role: "Campus Staff",
      image: "https://placehold.co/100x100",
      quote: "Managing facility bookings and coordinating services has never been easier. Highly recommended!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gray-50" id="testimonials">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">
          What Our Users Say
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="text-lg text-gray-600 mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <h3 className="font-bold text-dark">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-500">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;