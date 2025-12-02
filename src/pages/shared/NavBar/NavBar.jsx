import React, { useState } from "react";
import { NavLink } from "react-router";
import ParcelioLogo from "../ParcelioLogo/ParcelioLogo";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] font-semibold" : "hover:text-[#CAEB66]"
          }
          onClick={() => setIsOpen(false)} // close menu on click
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] font-semibold" : "hover:text-[#CAEB66]"
          }
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] font-semibold" : "hover:text-[#CAEB66]"
          }
          onClick={() => setIsOpen(false)}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] font-semibold" : "hover:text-[#CAEB66]"
          }
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-4 lg:top-6 z-50">
      <div className="flex flex-row items-center bg-black shadow-md mx-auto rounded-lg lg:rounded-2xl px-3 py-3 lg:px-4 lg:py-6 text-white">
        {/* Left: Logo & Mobile Menu */}
        <div className="navbar-start flex items-center">
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl font-black hover:text-[#CAEB66]">
              {isOpen ? <AiOutlineClose /> : <HiMiniBars3BottomLeft />}
            </button>
            {isOpen && (
              <ul className="menu text-md dropdown-content font-bold mt-5 p-2 shadow bg-black rounded-box w-52 text-white absolute">
                {navItems}
              </ul>
            )}
          </div>
          <div className="ml-4">
            <ParcelioLogo />
          </div>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-md font-bold px-1 gap-4">{navItems}</ul>
        </div>

        {/* Right: CTA Button */}
        <div className="navbar-end">
          <NavLink
            to="/signup"
            className="bg-transparent font-bold text-sm md:text-md px-6 py-2 text-[#CAEB66] border-2 border-[#CAEB66] hover:bg-[#CAEB66] hover:text-black md:px-4 md:py-2 rounded-lg md:rounded-2xl transition-colors duration-300"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
