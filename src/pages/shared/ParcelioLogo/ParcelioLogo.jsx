import logo from "../../../assets/logo.png";

const ParcelioLogo = () => {
  return (
    <div className="flex items-end">
      <img
        src={logo}
        alt="Parcelio Logo"
        className="
          mb-2 
        "
      />

      <p
        className="
          font-extrabold
          -ml-2
          text-3xl                   
        "
      >
        Parcelio
      </p>
    </div>
  );
};

export default ParcelioLogo;
