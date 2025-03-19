import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCreditCard, HiChartBar, HiCube } from 'react-icons/hi';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <HiCreditCard className="w-8 h-8" />,
      title: 'Smart Expense Tracking',
      description: 'Automatically categorize and track your expenses with our AI-powered system.'
    },
    {
      icon: <HiChartBar className="w-8 h-8" />,
      title: 'Service Integration',
      description: 'Seamlessly connect with campus services, dining, and transportation systems.'
    },
    {
      icon: <HiCube className="w-8 h-8" />,
      title: 'Flexible Payments',
      description: 'Multiple payment options and split bills easily with friends and roommates.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
          >
            Powerful Features for Modern Campus Life
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your campus finances and services in one place.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;