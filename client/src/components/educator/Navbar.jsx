import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const goToStudentSection = () => {
    navigate('/myEnrollment');
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Get first letter from name or email
  const initial =
    user?.name?.charAt(0).toUpperCase() ||
    user?.email?.charAt(0).toUpperCase() ||
    '?';

  return (
    <nav className="bg-white shadow px-4 py-3 flex items-center justify-end relative">
      {/* Switch to Student Button */}
      <button
        onClick={goToStudentSection}
        className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Switch to Student
      </button>

      {/* Profile Icon & Dropdown */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={toggleMenu}
          aria-label="Profile menu"
          className="focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-xl font-semibold hover:bg-gray-400 transition">
            {initial}
          </div>
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            <div className="px-4 py-2 text-sm text-gray-800 border-b border-gray-100">
              {user?.email || 'No Email'}
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
