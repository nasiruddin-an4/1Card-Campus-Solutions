import React from "react";
import PropTypes from "prop-types";
import homepageData from "../constants/homePage.json";

// StatCard Component
const StatCard = ({ color, number, title, description }) => {
  return (
    <div
      className="border border-white p-5 rounded-lg cursor-default duration-300 group hover:shadow-blue-200/20 overflow-hidden relative transition-all"
      aria-labelledby={`stat-${number}`}
    >
      {/* Dots pattern overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000000 2px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Black gradient background */}
      <div className="bg-gradient-to-r absolute from-gray-900 inset-0 to-transparent via-blackgray-900"></div>

      {/* Hover light effect */}
      <div className="bg-gradient-to-b -inset-1 absolute blur-xl duration-500 from-gray-400 group-hover:opacity-20 opacity-0 to-black transition-opacity via-black"></div>

      {/* Card content */}
      <div className="relative z-10">
        <h3 id={`stat-${number}`} className={`text-5xl font-bold ${color} mb-2`}>
          {number}
        </h3>
        <p className="text-2xl mb-12">{title}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  color: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// ImpressiveStats Component
const ImpressiveStats = () => {
  const { impressiveStats } = homepageData;

  return (
    <section className="bg-gradient-to-b text-white w-full from-gray-900 lg:px-0 px-4 py-20 to-blue-900 via-blue-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-2">
          <span className="flex bg-yellow-400 rounded-full text-black items-center px-4 py-1">
            <span className="bg-green-500 h-1 rounded-full w-1 mr-2"></span>
            Impressive Stats
          </span>
        </div>

        <h2 className="text-4xl text-center my-5">
          {impressiveStats.title}
        </h2>

        <p className="text-center text-gray-400 text-xl max-w-2xl mb-12 mx-auto">
          {impressiveStats.subtitle}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {impressiveStats.stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpressiveStats;