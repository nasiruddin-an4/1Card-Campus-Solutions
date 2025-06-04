import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiCheckCircle } from "react-icons/hi";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-16">
      {/* Header Banner */}
      <div className="bg-white text-center mb-8 px-4 py-8">
        <div className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full inline-flex items-center justify-center mb-6">
          <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
          <span>Financial Roadblocks</span>
        </div>
        <h1 className="text-4xl text-gray-900 font-bold mb-4">
          Struggling with Campus Finances?
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We get it. 1Card streamlines the process of handling tuition payments,
          canteen bills, printing costs, and more— so you can focus on your
          education, not your spreadsheets.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-20">
        {/* Expense Tracking Section */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <div className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full inline-flex items-center justify-center mb-6">
              <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
              <span>Financial Management</span>
            </div>
            <h2 className="text-3xl text-gray-900 font-bold mb-4">
              Expense Tracking
            </h2>
            <p className="text-gray-600 mb-8">
              Easily track, categorize, and analyze every campus
              transaction—tuition fees, canteen bills, printing costs, and
              more—all in real time, from one unified dashboard.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Real-Time Updates</p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Automatic Categorization
                  </p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Unified Account View
                  </p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Detailed Spending Insights
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="bg-gradient-to-b from-blue-600 to-black text-white font-medium px-8 py-3 rounded-md transition transform hover:scale-105 hover:opacity-90"
            >
              Read More About This
            </a>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <img
              src="src/assets/rent.svg"
              alt="Expense tracking dashboard"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Seamless Service Section */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Colum  */}
          <div className="lg:w-1/2">
            <img
              src="src/assets/rent.svg"
              alt="Smart payment interface"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <div className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full inline-flex items-center justify-center mb-6">
              <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
              <span>Financial Management</span>
            </div>
            <h2 className="text-3xl text-gray-900 font-bold mb-4">
            Seamless Service Integration
            </h2>
            <p className="text-gray-600 mb-8">
            Link all your campus services—such as canteen, gym, parking, and event management—under one system. With 1Card, you don’t need separate logins or payment methods for each service.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900"> Canteen & Food Services </p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Printing & Photocopy</p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                  Printing & Photocopy
                  </p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Real-Time Synchronization</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="bg-gradient-to-b from-blue-600 to-black text-white font-medium px-8 py-3 rounded-md transition transform hover:scale-105 hover:opacity-90"
            >
              Read More About This
            </a>
          </div>
        </div>

        {/* Flexible Payment Section */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <div className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-full inline-flex items-center justify-center mb-6">
              <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
              <span>Financial Management</span>
            </div>
            <h2 className="text-3xl text-gray-900 font-bold mb-4">
            Flexible Payment Options
            </h2>
            <p className="text-gray-600 mb-8">
            Whether you’re recharging your 1Card balance or paying tuition, we offer a variety of convenient, cashless solutions to keep you moving on campus.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Top-Up Convenience</p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Credit-Based Services</p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Instant Payment Confirmation</p>
                </div>
              </div>
              <div className="flex bg-white border border-gray-200 p-4 rounded-lg items-center">
                <div className="text-blue-500 mr-3">
                  <HiCheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Visual Spending Alerts</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="bg-gradient-to-b from-blue-600 to-black text-white font-medium px-8 py-3 rounded-md transition transform hover:scale-105 hover:opacity-90"
            >
              Read More About This
            </a>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <img
              src="src/assets/rent.svg"
              alt="Campus access control system"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
