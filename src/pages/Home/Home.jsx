import Banner from "./Banner/Banner";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className="mt-20">
            <Banner></Banner>
            <Services></Services>
            <CompanyCarousel></CompanyCarousel>
        </div>
    );
};

export default Home;