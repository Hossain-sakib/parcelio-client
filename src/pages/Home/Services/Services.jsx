import {
  FaTruck,
  FaMapMarkedAlt,
  FaBoxes,
  FaMoneyBillWave,
  FaBuilding,
  FaUndoAlt,
} from "react-icons/fa";
import Service from "./Service";

const servicesData = [
  {
    icon: <FaTruck />,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    icon: <FaBoxes />,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    icon: <FaBuilding />,
    title: "Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    icon: <FaUndoAlt />,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const Services = () => {
  return (
    <div className="lg:space-y-12 space-y-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto px-2">
        <h2
          className="text-3xl lg:text-5xl font-bold text-black mb-4"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Our Services
        </h2>
        <p
          className="text-black text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          We provide fast, secure, and reliable delivery services designed to make your parcel experience smooth and hassle-free.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1200"
            className="h-full flex"
          >
            <Service service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
