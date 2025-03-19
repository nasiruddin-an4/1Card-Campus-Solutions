import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CampusJourney = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const journeySteps = [
    {
      title: 'Smart Payments',
      description: 'Pay for meals, books, and campus services with a single tap.'
    },
    {
      title: 'Event Access',
      description: 'Get instant access to campus events and activities.'
    },
    {
      title: 'Transportation',
      description: 'Navigate campus with integrated transportation solutions.'
    }
  ];

  return (
    <section className="py-24 bg-white" id="campus-journey">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Optimize Your Campus Journey
            </h2>
            <p className="text-gray-600 mb-8">
              Experience a seamless campus life with our comprehensive solution that brings everything you need into one platform.
            </p>
            
            <div ref={ref} className="space-y-6">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://placehold.co/600x800"
              alt="Campus Life"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusJourney;