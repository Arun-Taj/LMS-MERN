import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'
import Navbar from '../../components/educator/Navbar'
import SideBar from '../../components/educator/SideBar'
import Footer from '../../components/educator/Footer'
const Educator = () => {
  return (
    <>
    <div className='min-h-screen bg-white'>
      <Navbar/>
      <div className='flex'>
        <SideBar/>
        <div className='flex-1'>
          {<Outlet/>}
        </div>
        
      </div>
      
    </div>
    <Footer className="w-full"/>
    </>
  )
}

export default Educator
