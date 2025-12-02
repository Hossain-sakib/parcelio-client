import Banner from "./Banner/Banner";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import FAQs from "./FAQs/FAQs";
import HowItWorks from "./HowItWorks/HowItWorks";
import MarchantCustomerCTA from "./MarchantCustomerCTA/MarchantCustomerCTA";
import Reviews from "./Reviews/Reviews";
import ServiceFeatures from "./ServiceFeatures/ServiceFeatures";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="lg:my-16 my-10 lg:space-y-16 space-y-10">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <CompanyCarousel></CompanyCarousel>
      <ServiceFeatures></ServiceFeatures>
      <MarchantCustomerCTA></MarchantCustomerCTA>
      <Reviews></Reviews>
      <FAQs></FAQs>
    </div>
  );
};

export default Home;
