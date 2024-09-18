import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b-[1px] border-[#333] lg:py-6 lg:px-12 2xl:px-24">
      <Link to="/" className="font-poppins font-bold text-2xl">
        TASTIFY.GE
      </Link>
      <ul className="hidden lg:flex font-poppins justify-center items-center space-x-8 lg:font-semibold">
        <li>
          <Link to="/" className="flex justify-center items-center">
            <FaHome className="inline-block mr-2" /> Home
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="flex justify-center items-center">
            <FaBowlFood className="inline-block mr-2" /> Recipes
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex justify-center items-center">
            <FaQuestion className="inline-block mr-2" /> About
          </Link>
        </li>
      </ul>
      {/* Custom burger menu */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="flex flex-col space-y-2">
          <div
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute right-6 top-16 bg-white shadow-lg rounded-lg py-2 w-40">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <FaHome className="inline-block mr-2" /> Home
            </Link>
            <Link
              to="/recipes"
              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <FaBowlFood className="inline-block mr-2" /> Recipes
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <FaQuestion className="inline-block mr-2" /> About
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
