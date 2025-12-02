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
    <div className="px-4 lg:space-y-12 space-y-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto px-2">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Our Trusted Partners
        </h2>
        <p
          className="text-black text-base md:text-lg lg:text-xl mt-2 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1200"
        >
          Leading global companies trust our services.
        </p>
      </div>

      {/* Marquee */}
      <Marquee gradient={false} speed={100} pauseOnHover={true} loop={0}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center mx-8">
            <img
              src={logo}
              alt={`Brand ${index}`}
              className="lg:h-8 h-6 w-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoCarousel;
