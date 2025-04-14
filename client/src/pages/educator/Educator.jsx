import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'
const Educator = () => {
  return (
    <div>
      <Dashboard/>
      <div>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default Educator
