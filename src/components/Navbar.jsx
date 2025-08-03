import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUser } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#00bcd4] to-[#26a69a] shadow-lg">
      <div className="mx-auto  sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              A.P. SHAH INSTITUTE OF <span className="text-[#ffc107]">TECHNOLOGIES</span>
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-15">
            <FaBell className="text-white hover:text-[#ffc107] text-xl cursor-pointer" />
            <FaUser className="text-white hover:text-[#ffc107] text-xl cursor-pointer" />
          </div>

          {/* Mobile Menu Button (Optional) */}
          <div className="md:hidden">
            <button className="text-white hover:text-[#ffc107] focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;