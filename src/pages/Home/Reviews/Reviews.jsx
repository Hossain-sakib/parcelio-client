import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

// Review data with real-looking avatars
const reviews = [
  {
    name: "Sarah Johnson",
    designation: "Entrepreneur",
    review:
      "Parcelio has revolutionized my online business! Deliveries are always fast, and I can track every order in real-time.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "David Miller",
    designation: "Shop Owner",
    review:
      "Reliable service with excellent customer support. My packages always arrive on time and safely.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    name: "Ayesha Rahman",
    designation: "Freelancer",
    review:
      "I love Parcelio! Affordable delivery rates and hassle-free tracking. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 4,
  },
  {
    name: "Mohammad Karim",
    designation: "Business Owner",
    review:
      "Fast and secure deliveries. I can trust Parcelio with my valuable shipments without worrying.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    designation: "Small Business Owner",
    review:
      "Parcelio’s service is outstanding. They really care about customer satisfaction and timely delivery.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Tanvir Ahmed",
    designation: "E-commerce Seller",
    review:
      "Tracking system is excellent. I can monitor every package, and support team is always helpful.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4,
  },
  {
    name: "Leila Hassan",
    designation: "Entrepreneur",
    review:
      "Parcelio’s platform is so easy to use. From placing orders to delivery, everything is smooth and reliable.",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
  },
  {
    name: "Rafiq Islam",
    designation: "Shop Owner",
    review:
      "Excellent service! Affordable prices, fast delivery, and very friendly staff. I highly recommend Parcelio.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03373D]">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mt-2 text-base md:text-lg">
          Trusted by businesses and individuals across Bangladesh
        </p>
      </div>

      {/* Carousel */}
      <Marquee gradient={false} speed={50} pauseOnHover={true} loop={0}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-80 mx-4 flex-shrink-0"
          >
            {/* Avatar */}
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-14 w-14 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#03373D]">
                  {review.name}
                </h3>
                <p className="text-gray-500 text-sm">{review.designation}</p>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-base mb-4">{review.review}</p>

            {/* Rating */}
            <div className="flex">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <FaStar key={i} className="text-gray-300 mr-1" />
              ))}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;
