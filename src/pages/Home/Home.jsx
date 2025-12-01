import Banner from "./Banner/Banner";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import HowItWorks from "./HowItWorks/HowItWorks";
import ServiceFeatures from "./ServiceFeatures/ServiceFeatures";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mt-20">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <CompanyCarousel></CompanyCarousel>
      <ServiceFeatures></ServiceFeatures>
    </div>
  );
};

export default Home;
