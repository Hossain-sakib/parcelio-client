import React from "react";
import { NavLink } from "react-router";
import ParcelioLogo from "../ParcelioLogo/ParcelioLogo";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] font-semibold" : "hover:text-[#CAEB66]"
          }
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
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-6 z-50 ">
      <div className="navbar bg-black shadow-md rounded-2xl px-6 md:px-8 py-4 text-white">
        {/* Left: Logo & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 text-white"
            >
              {navItems}
            </ul>
          </div>
          <ParcelioLogo />
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navItems}</ul>
        </div>

        {/* Right: CTA Button */}
        <div className="navbar-end">
          <NavLink
            to="/signup"
            className="bg-transparent text-[#CAEB66] border-2 border-[#CAEB66] hover:bg-[#CAEB66] hover:text-black px-4 py-2 rounded-2xl transition-colors duration-300"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
