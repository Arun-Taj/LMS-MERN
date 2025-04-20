import React from 'react'
import { FiHome } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
const SideBar = () => {

  const {isEducatorRoute}=useContext(AuthContext)

  const menuItems=[
    {name:"Dashboard", path:"/educator",icon:<FiHome />},
    {name:"Add Course", path:"/educator/addCourse",icon:<FaBookMedical />},
    {name:"My Courses", path:"/educator/myCourse",icon:<FaBook />},
    {name:"Student Enrolled", path:"/educator/studentEnrolled",icon:<FaUserGraduate />}

  ]
  return isEducatorRoute && (
    <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-500 py-2 flex flex-col'>
      {menuItems.map((item)=>(
          <NavLink
          to={item.path}
          key={item.name}
          end={item.path==='/educator'}>
            <img src={item.icon} alt="" className='w-6 h-6'/>
            <p className='md:block hidden text-center'>{item.name}</p>
          </NavLink>
      ))}
    </div>
  )
}

export default SideBar
