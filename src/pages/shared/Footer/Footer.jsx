import React from "react";
import ParcelioLogo from "../ParcelioLogo/ParcelioLogo";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-white p-10 rounded-t-3xl">
      {/* Logo & About */}
      <aside className="text-center">
        <ParcelioLogo />
        <p className="font-bold mt-2">
          Parcelio Ltd.
          <br />
          Fast & reliable parcel delivery across Bangladesh
        </p>
        
      </aside>

      {/* Social Icons */}
      <nav>
        <div className="grid grid-flow-col gap-4 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-[#CAEB66] transition-colors"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="#"
            className="hover:text-[#CAEB66] transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="hover:text-[#CAEB66] transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </nav>
      <div>
        <p className="text-gray-100 mt-1">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
