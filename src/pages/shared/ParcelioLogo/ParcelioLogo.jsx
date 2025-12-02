import logo from "../../../assets/logo.png";

const ParcelioLogo = () => {
  return (
    <div className="flex items-end">
      <img
        src={logo}
        alt="Parcelio Logo"
        className="
        w-6
        md:w-8
          mb-1.5 
        "
      />

      <p
        className="
          font-extrabold
         md:-ml-3
         -ml-2
          text-xl
          md:text-2xl                   
        "
      >
        Parcelio
      </p>
    </div>
  );
};

export default ParcelioLogo;
