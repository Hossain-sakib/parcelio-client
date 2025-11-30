import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from "../../../assets/banner/banner1.png";
import bannerImage2 from "../../../assets/banner/banner2.png";
import bannerImage3 from "../../../assets/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      swipeable={true}
      stopOnHover={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      <div>
        <img src={bannerImage1} />
      </div>
      <div>
        <img src={bannerImage2} />
      </div>
      <div>
        <img src={bannerImage3} />
      </div>
    </Carousel>
  );
};

export default Banner;
