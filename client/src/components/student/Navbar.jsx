import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              {/* Replace '/logo.png' with your own logo file */}
              <img className="h-8" src="/logo.png" alt="LMS Logo" />
            </Link>
          </div>

          {/* Center: Search bar (visible on medium screens and up) */}
          <div className="hidden md:block flex-1 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Navigation Items */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <Link
                to="/categories"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Categories
              </Link>
              <Link
                to="/instructors"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Instructors
              </Link>
              <Link
                to="/my-courses"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                My Learning
              </Link>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Cart
              </Link>
            </div>

            {/* Authentication Buttons */}
            <div className="hidden md:flex items-center ml-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="ml-2 px-3 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300 text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/categories"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Categories
            </Link>
            <Link
              to="/instructors"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Instructors
            </Link>
            <Link
              to="/my-courses"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              My Learning
            </Link>
            <Link
              to="/cart"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Cart
            </Link>
            <Link
              to="/login"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
