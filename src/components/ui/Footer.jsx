import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 flex flex-col justify-center items-center py-4">
      <Link to="/" className="font-poppins font-bold text-xl text-white">
        TASTIFY.GE
      </Link>
      <p className="text-gray-300">All rights reserved&copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
