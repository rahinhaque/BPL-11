import React, { useState } from "react";
import { FaCoins, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = ({coins}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-11/12 mx-auto my-6 bg-base-100 shadow-sm rounded-xl px-5 py-3">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-10 cursor-pointer" />

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-sm">
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Teams
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Coins */}
          <button className="flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-500 font-semibold text-sm px-4 py-2 rounded-full hover:bg-yellow-400/20 transition-all">
            <FaCoins />
            <span>{coins} Coins</span>
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-xl p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-3 mt-4 pb-2 font-medium text-sm border-t pt-4">
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition-colors">
              Teams
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
