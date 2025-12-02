import locationImg from "../../../assets/location-merchant.png";
import bgImg from "../../../assets/be-a-merchant-bg.png";

const MarchantCustomerCTA = () => {
  return (
    <div
      className="p-4 md:p-16 lg:p-20 bg-black rounded-2xl bg-top-left bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-8">
        {/* Image */}
        <img
          src={locationImg}
          className="max-w-sm w-full rounded-2xl shadow-2xl"
        />

        {/* Text & Buttons */}
        <div className="text-center lg:text-left max-w-xl space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-transparent font-bold text-sm md:text-md px-6 py-2 text-[#CAEB66] border-2 border-[#CAEB66] hover:bg-[#CAEB66] hover:text-black md:px-4 md:py-2 rounded-lg md:rounded-2xl transition-colors duration-300">
              Become A Merchant
            </button>
            <button className="bg-[#CAEB66] font-bold text-sm md:text-md px-6 py-2 text-black border-2 border-[#CAEB66] hover:bg-transparent hover:text-[#CAEB66] md:px-4 md:py-2 rounded-lg md:rounded-2xl transition-colors duration-300">
              Earn With Parcelio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarchantCustomerCTA;
