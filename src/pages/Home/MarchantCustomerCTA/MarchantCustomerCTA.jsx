import locationImg from "../../../assets/location-merchant.png";
import bgImg from "../../../assets/be-a-merchant-bg.png";

const MarchantCustomerCTA = () => {
  return (
    <div
      className="p-20 bg-black rounded-2xl bg-top-left bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={locationImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 text-white">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-row gap-4">
            <button className="bg-transparent text-[#CAEB66] border-2 border-[#CAEB66] hover:bg-[#CAEB66] hover:text-black px-4 py-2 rounded-2xl transition-colors duration-300">
              Become A Merchant
            </button>
            <button className="bg-[#CAEB66] text-black border-2 border-[#CAEB66] hover:bg-transparent hover:text-[#CAEB66] px-4 py-2 rounded-2xl transition-colors duration-300">
              Earn With Parcelio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarchantCustomerCTA;
