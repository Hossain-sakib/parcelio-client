import Banner from "./Banner/Banner";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import HowItWorks from "./HowItWorks/HowItWorks";
import MarchantCustomerCTA from "./MarchantCustomerCTA/MarchantCustomerCTA";
import ServiceFeatures from "./ServiceFeatures/ServiceFeatures";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="my-20 space-y-20">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <CompanyCarousel></CompanyCarousel>
      <ServiceFeatures></ServiceFeatures>
      <MarchantCustomerCTA></MarchantCustomerCTA>
    </div>
  );
};

export default Home;
