import React, { useContext, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { FaBook, FaBookMedical, FaUserGraduate } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AuthContext } from '../../context/AuthContext';

const SideBar = () => {
  const { isEducatorRoute } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: FiHome },
    { name: 'Add Course', path: '/educator/addCourse', icon: FaBookMedical },
    { name: 'My Courses', path: '/educator/myCourses', icon: FaBook },
    { name: 'Student Enrolled', path: '/educator/studentEnrolled', icon: FaUserGraduate },
  ];

  return (
    <div
      className={`min-h-screen border-r border-gray-500 py-2 flex flex-col transition-all duration-300 ${
        isOpen ? 'md:w-64 w-64' : 'md:w-20 w-20'
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end px-2 mb-4">
        <button onClick={toggleSidebar} className="text-gray-600 hover:text-black">
          {isOpen ? <IoIosArrowBack size={24} /> : <IoIosArrowForward size={24} />}
        </button>
      </div>

      {/* Menu Items */}
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === '/educator'}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 hover:bg-gray-100 transition-colors ${
                isActive ? 'bg-gray-200 font-semibold' : ''
              }`
            }
          >
            <Icon className="w-6 h-6" />
            {isOpen && <span className={`${isOpen ? 'ml-2 block' : 'hidden'} md:block`}>
              {item.name}
            </span>}
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
