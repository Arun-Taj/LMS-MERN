import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="flex justify-between px-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} EduPlatform LMS. All rights
          reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#terms"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#privacy"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#cookie"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
