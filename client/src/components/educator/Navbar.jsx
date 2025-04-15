import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBell, FaChalkboardTeacher, FaSignOutAlt, FaCog } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import Logo from '../../assets/Edu-Logo.png'
const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [unreadNotifications] = useState(3); // Replace with actual notification count

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section - Logo and Main Navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">EduPlatform</span>
            </Link>
            
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 inline-flex items-center px-1 pt-1 text-sm font-medium">
                <FaChalkboardTeacher className="mr-2" /> Dashboard
              </Link>
              <Link to="/my-courses" className="text-gray-700 hover:text-blue-600 inline-flex items-center px-1 pt-1 text-sm font-medium">
                My Courses
              </Link>
              <Link to="/students" className="text-gray-700 hover:text-blue-600 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Students
              </Link>
              
            </div>
          </div>

          {/* Right Section - Search and Profile */}
          <div className="flex items-center">
            {/* Search Bar */}
            {/* <div className="hidden md:flex items-center mr-4">
              <input
                type="text"
                placeholder="Search courses..."
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div> */}

            {/* Notifications */}
            {/* <button className="p-2 text-gray-600 hover:text-blue-600 relative mr-4">
              <FaBell className="h-6 w-6" />
              {unreadNotifications > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                  {unreadNotifications}
                </span>
              )}
            </button> */}

            {/* Profile Dropdown */}
            <div className="ml-3 relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center text-sm focus:outline-none"
              >
                <FaUserCircle className="h-8 w-8 text-gray-600" />
               
                {/* <FiChevronDown className="ml-1 text-gray-600" /> */}
              </button>

              {isProfileOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="none">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-medium text-gray-900">Dr. Sarah Johnson</p>
                      <p className="text-xs text-gray-500">Educator</p>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaUserCircle className="inline mr-2" /> Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FaCog className="inline mr-2" /> Settings
                    </Link>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => console.log('Logout')}
                    >
                      <FaSignOutAlt className="inline mr-2" /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;