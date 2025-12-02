import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card bg-white shadow-md border border-gray-200 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="card-body flex flex-col space-y-2 items-center text-center px-6 py-8">
        {/* Icon */}
        {React.cloneElement(service.icon, {
          style: { color: "#B9D85E" },
          className: "text-6xl transition-transform duration-300 hover:rotate-6",
        })}

        {/* Title */}
        <h3 className="text-black text-lg md:text-xl font-semibold leading-snug transition-colors duration-300 hover:text-lime-500">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-black text-sm md:text-base lg:text-base leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Service;
