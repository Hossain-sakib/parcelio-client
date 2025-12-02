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
    <div className="space-y-12">
      {services.map((service, index) => (
        <div
          key={index}
          className={`w-full flex ${
            index % 2 === 1 ? "justify-end" : "justify-start"
          }`}
          data-aos={index % 2 === 1 ? "fade-left" : "fade-right"}
          data-aos-delay={index * 150}
          data-aos-duration="1200"
        >
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full md:w-3/5 p-6 flex flex-col items-center md:items-start">
            <img
              src={service.illustration}
              alt={service.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-snug">
              {service.title}
            </h3>
            <p className="text-black text-base md:text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;
