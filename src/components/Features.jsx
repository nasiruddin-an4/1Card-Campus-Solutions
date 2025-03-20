import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCreditCard, HiChartBar, HiCube } from 'react-icons/hi';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-white text-center mb-8 px-4 py-8">
        <div className="bg-yellow-500 rounded-full text-black text-sm font-medium inline-block mb-4 px-4 py-1">
          Financial Roadblocks
        </div>
        <h1 className="text-4xl text-gray-900 font-bold mb-4">Struggling with Campus Finances?</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We get it. 1Card streamlines the process of handling 
          tuition payments, canteen bills, printing costs, and more—
          so you can focus on your education, not your 
          spreadsheets.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <div className="bg-yellow-500 rounded-full text-black text-sm font-medium inline-block mb-4 px-4 py-1">
              Financial Management
            </div>
            <h2 className="text-3xl text-gray-900 font-bold mb-4">Expense Tracking</h2>
            <p className="text-gray-600 mb-8">
              Easily track, categorize, and analyze every campus 
              transaction—tuition fees, canteen bills, printing costs, 
              and more—all in real time, from one unified dashboard.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCreditCard className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Real-Time Updates</p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiChartBar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Automatic Categorization</p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCreditCard className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Unified Account View</p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCube className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Detailed Spending Insights</p>
                </div>
              </div>
            </div>

            <button className="bg-blue-900 rounded-md text-white font-medium hover:bg-blue-800 px-6 py-3 transition-colors">
              Read More About This
            </button>
          </div>

          {/* Right Column - Expense Tracker Image */}
          <div className="lg:w-1/2">
            <img 
              src="/api/placeholder/600/500" 
              alt="Expense tracking dashboard showing recent transactions including Walmart, Utility Co., Netflix, Shell Gas, and Chipotle expenses" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <section className="bg-gray-50 py-24" id="features" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl text-gray-900 font-bold mb-4 md:text-4xl"
            >
              Powerful Features for Modern Campus Life
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your campus finances and services in one place.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <HiCreditCard className="h-8 w-8" />,
                title: 'Smart Expense Tracking',
                description: 'Automatically categorize and track your expenses with our AI-powered system.'
              },
              {
                icon: <HiChartBar className="h-8 w-8" />,
                title: 'Service Integration',
                description: 'Seamlessly connect with campus services, dining, and transportation systems.'
              },
              {
                icon: <HiCube className="h-8 w-8" />,
                title: 'Flexible Payments',
                description: 'Multiple payment options and split bills easily with friends and roommates.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-gray-900 text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;