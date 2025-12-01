import bookingIcon from "../../../assets/bookingIcon.png";

const steps = [
  {
    title: "Place Your Order",
    description:
      "Select your product and place the order quickly through our platform.",
  },
  {
    title: "Fast Processing",
    description: "We process your order immediately to ensure timely delivery.",
  },
  {
    title: "Real-time Tracking",
    description: "Track your parcel in real-time from dispatch to delivery.",
  },
  {
    title: "Receive & Enjoy",
    description:
      "Receive your package safely and enjoy your products hassle-free.",
  },
];

const HowItWorks = () => {
  return (
    <div className="px-4">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#03373D] mb-4"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          How It Works
        </h2>
        <p
          className="text-gray-500 text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1200"
        >
          Our simple 4-step process ensures a smooth and hassle-free delivery
          experience.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger animation
            data-aos-duration="1200"
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
          >
            <img
              src={bookingIcon}
              alt={step.title}
              className="h-16 w-16 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-[#03373D] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
