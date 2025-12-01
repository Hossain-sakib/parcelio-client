import trackingImg from "../../../assets/live-tracking.png";
import secureImg from "../../../assets/safe-delivery.png";

const services = [
  {
    illustration: trackingImg,
    title: "Fast Tracking",
    description:
      "Track your parcels in real-time with our advanced tracking system. Get updates instantly and know exactly where your shipment is.",
  },
  {
    illustration: secureImg,
    title: "Secure Handling",
    description:
      "Your parcels are handled with utmost care. We guarantee safe packaging and delivery for all your valuable items.",
  },
  {
    illustration: secureImg,
    title: "24/7 Support Call",
    description:
      "Our customer support is available 24/7 to assist you with any queries or concerns regarding your shipments.",
  },
];

const ServiceFeatures = () => {
  return (
    <div className="pb-20 max-w-7xl mx-auto space-y-8">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
          data-aos="fade-up"
          data-aos-delay={index * 150}  // staggered animation
          data-aos-duration="1200"
        >
          {/* Image Column */}
          <div className="md:w-1/5 w-full p-6">
            <img
              src={service.illustration}
              alt={service.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text Column */}
          <div className="md:w-4/5 w-full p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#03373D] mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
