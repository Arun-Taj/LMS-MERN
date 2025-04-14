import React from 'react'

const SideBar = () => {
  return (
    
      <div className="w-1/5 border-r border-gray-300 pr-3">
          <h3 className="text-lg font-semibold">Menu</h3>
          <ul className="list-none p-0 space-y-2">
            <li><a href="/courses" className="text-blue-500 hover:underline">My Courses</a></li>
            <li><a href="/students" className="text-blue-500 hover:underline">Students</a></li>
            <li><a href="/assignments" className="text-blue-500 hover:underline">Assignments</a></li>
            <li><a href="/profile" className="text-blue-500 hover:underline">Profile</a></li>
            <li><a href="/settings" className="text-blue-500 hover:underline">Settings</a></li>
          </ul>
        </div>
  
  )
}

export default SideBar
