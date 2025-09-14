import React, { useState } from "react";
import logo from "../assets/logo1.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 p-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="">
              <img src={logo} alt="Logo" className="w-32 sm:w-48  md:w-40 lg:w-48 xl:w-56 object-contain" />
            </a>
          </div>

          {/* Desktop Nav View */}
          <nav className="hidden md:flex gap-6 text-gray-500 font-medium">
            <Link to="/home" className="pt-2 hover:text-blue-600 transition">Home</Link>
            <Link to="/" className="pt-2 hover:text-blue-600 transition">About</Link>
            <Link to="/" className="pt-2 hover:text-blue-600 transition">Services</Link>
            <Link to="/" className="pt-2 hover:text-blue-600 transition">Contact</Link>
            <a href="/">
              <button className="bg-blue-900 text-white rounded-3xl px-3 py-2">
                Book Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-7 h-7 flex flex-col justify-between items-center p-1 mx-2"
            >
              {/* Top bar */}
              <span
                className={`block h-0.5 w-6 bg-gray-800 rounded transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
              ></span>
              {/* Middle bar */}
              <span
                className={`block h-0.5 w-6 bg-gray-800 rounded transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              {/* Bottom bar */}
              <span
                className={`block h-0.5 w-6 bg-gray-800 rounded transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col space-y-4 p-4 text-gray-500 font-medium">
          <Link to="/home" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/" className="hover:text-blue-600 transition">Contact</Link>
          <Link to="/" className="hover:text-blue-600 transition">About</Link>
          <button className="bg-blue-900 text-white rounded-[20px] py-2">
            Book Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
