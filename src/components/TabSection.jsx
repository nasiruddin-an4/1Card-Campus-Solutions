import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'For Students',
      content: {
        heading: 'Simplify Your Campus Life',
        description: 'Access all campus services, manage expenses, and stay connected with your peers through a single platform.',
        features: ['Digital Student ID', 'Expense Tracking', 'Event Access', 'Campus Navigation']
      }
    },
    {
      title: 'For Faculty',
      content: {
        heading: 'Streamline Administrative Tasks',
        description: 'Manage classes, communicate with students, and handle administrative duties efficiently.',
        features: ['Class Management', 'Student Communication', 'Resource Booking', 'Digital Attendance']
      }
    },
    {
      title: 'For Staff',
      content: {
        heading: 'Efficient Campus Operations',
        description: 'Coordinate services, manage facilities, and ensure smooth campus operations with our integrated tools.',
        features: ['Facility Management', 'Service Coordination', 'Inventory Control', 'Staff Scheduling']
      }
    }
  ];

  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Solutions for Everyone
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our platform serves different campus community members.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-dark mb-4">
                {tabs[activeTab].content.heading}
              </h3>
              <p className="text-gray-600 mb-6">
                {tabs[activeTab].content.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {tabs[activeTab].content.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabSection;