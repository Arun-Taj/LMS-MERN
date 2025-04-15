import React, { useState, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import Book from "../../assets/Books.jpeg";
import Logo from '../../assets/Edu-Logo.png'
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [searchQuery,setSearchQuery]=useState('')
  const navigate=useNavigate()


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchSubmit=(e)=>{
    e.preventDefault()
    const trimmedQuery=searchQuery.trim()
    if(trimmedQuery !==''){
      navigate(`/search?query=${encodeURIComponent(trimmedQuery)}`)
    }
  }

  return (
    <nav className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-16 w-auto" src={Logo} alt="LMS Logo" />
            </Link>
          </div>

          {/* Search Bar (visible on md screens and up) */}
          <div className="hidden md:flex flex-1 mx-4 md:mx-8 max-w-xl">
          <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search courses, subjects, ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <HiSearch className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Navigation Items */}
          {user && (
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/educator"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Become Educator
              </Link>
              <Link
                to="/myEnrollment"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Student
              </Link>
            </div>
          )}

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  {user.name.charAt(0).toUpperCase()}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50">
                    <div className="px-4 py-2 text-sm text-gray-600 border-b border-gray-100">
                      {user.email}
                    </div>
                    <button
                      onClick={logout}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen pt-4" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4 space-y-2 border-t border-gray-200">
            {user ? (
              <>
                <Link
                  to="/educator"
                  onClick={toggleMobileMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Become Educator
                </Link>
                <Link
                  to="/myEnrollment"
                  onClick={toggleMobileMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Student
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={toggleMobileMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={toggleMobileMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
