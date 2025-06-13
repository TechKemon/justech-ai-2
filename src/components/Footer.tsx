
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-200">
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Justech AI. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Empowering Non-Profits with AI Technology.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <Link
            to="/privacy"
            className="text-gray-600 hover:text-gray-800 text-sm"
          >
            Privacy Policy
          </Link>
          <a
            href="mailto:contact.justech.ai@gmail.com"
            className="text-gray-600 hover:text-gray-800 text-sm"
          >
            contact.justech.ai@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
