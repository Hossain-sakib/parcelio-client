import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card bg-white shadow-md border border-gray-200 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="card-body items-center text-center px-6 py-8">
        
        {/* Icon */}
        {React.cloneElement(service.icon, {
          style: { color: "#B9D85E" },
          className: "text-6xl mb-6 transition-transform duration-300 hover:rotate-6",
        })}
        
        {/* Title */}
        <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 hover:text-shadow-lime-300">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Service;
