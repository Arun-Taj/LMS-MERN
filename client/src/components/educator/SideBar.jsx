import React, { useContext } from 'react';
import { FiHome } from 'react-icons/fi';
import { FaBook, FaBookMedical, FaUserGraduate } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const SideBar = () => {
  const { isEducatorRoute } = useContext(AuthContext);

  const menuItems = [
    { name: 'Dashboard',        path: '/educator',                icon: FiHome },
    { name: 'Add Course',       path: '/educator/addCourse',      icon: FaBookMedical },
    { name: 'My Courses',       path: '/educator/myCourses',       icon: FaBook },
    { name: 'Student Enrolled', path: '/educator/studentEnrolled', icon: FaUserGraduate },
  ];

  return (
    <div className="md:w-64 w-16 border-r min-h-screen border-gray-500 py-2 flex flex-col">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === '/educator'}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 hover:bg-gray-100 ${
                isActive ? 'bg-gray-200 font-semibold' : ''
              }`
            }
          >
            <Icon className="w-6 h-6" />
            <span className="md:block hidden ml-2">{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
