import React from 'react';
import SideBar from '../../components/educator/SideBar';
import Navbar from '../../components/educator/Navbar';

const Dashboard = () => {
  return (
    <div className="p-5 font-sans">
      <Navbar/>
      <h1 className="text-2xl font-bold">Educator Dashboard</h1>
      <div className="flex gap-5 mt-5">
        <SideBar/>
        {/* Sidebar */}<div className="w-1/5 border-r border-gray-300 pr-3"></div>
        {/* 
          <h3 className="text-lg font-semibold">Menu</h3>
          <ul className="list-none p-0 space-y-2">
            <li><a href="/courses" className="text-blue-500 hover:underline">My Courses</a></li>
            <li><a href="/students" className="text-blue-500 hover:underline">Students</a></li>
            <li><a href="/assignments" className="text-blue-500 hover:underline">Assignments</a></li>
            <li><a href="/profile" className="text-blue-500 hover:underline">Profile</a></li>
            <li><a href="/settings" className="text-blue-500 hover:underline">Settings</a></li>
          </ul>
        </div> */}

        {/* Main Content */}
        <div className="w-4/5">
          <h2 className="text-xl font-semibold">Welcome, Educator!</h2>
          <p className="mt-2">Here is an overview of your activities:</p>

          {/* Statistics Section */}
          <div className="flex gap-5 mt-5">
            <div className="flex-1 p-3 border border-gray-300 rounded-md">
              <h3 className="text-lg font-semibold">Total Courses</h3>
              <p className="text-gray-700">5</p>
            </div>
            <div className="flex-1 p-3 border border-gray-300 rounded-md">
              <h3 className="text-lg font-semibold">Total Students</h3>
              <p className="text-gray-700">120</p>
            </div>
            <div className="flex-1 p-3 border border-gray-300 rounded-md">
              <h3 className="text-lg font-semibold">Pending Assignments</h3>
              <p className="text-gray-700">8</p>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="mt-5">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Graded Assignment 1 for Course A</li>
              <li>Added new material to Course B</li>
              <li>Responded to 3 student queries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
