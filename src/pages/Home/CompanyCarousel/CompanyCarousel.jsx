import Marquee from "react-fast-marquee";

import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/star.png";
import logo7 from "../../../assets/brands/start_people.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const LogoCarousel = () => {
  return (
    <div className="px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2
          className="text-2xl md:text-3xl font-bold text-[#03373D]"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Our Trusted Partners
        </h2>
        <p
          className="text-gray-500 mt-2"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1200"
        >
          Leading global companies trust our services.
        </p>
      </div>

      {/* Marquee */}
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        loop={0}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center mx-8">
            <img
              src={logo}
              alt={`Brand ${index}`}
              className="h-10 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoCarousel;
