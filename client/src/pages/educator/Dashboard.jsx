// src/pages/educator/Dashboard.jsx
import React from 'react';
import SideBar from '../../components/educator/SideBar';
import Navbar from '../../components/educator/Navbar';
// If you add charts, import your chart component here:
// import PerformanceChart from '../../components/educator/PerformanceChart';

const Dashboard = () => {
  // TODO: replace these with real data from your API or Context
  const stats = [
    { label: 'Courses', value: 12, icon: '📚', bg: 'bg-blue-100' },
    { label: 'Students', value: 240, icon: '🎓', bg: 'bg-green-100' },
    { label: 'Assignments', value: 18, icon: '✏️', bg: 'bg-yellow-100' },
    { label: 'Messages', value: 5, icon: '💬', bg: 'bg-red-100' },
  ];

  const upcomingClasses = [
    { time: 'Apr 21, 9:00 AM', course: 'Data Structures', room: 'A101' },
    { time: 'Apr 22, 11:00 AM', course: 'Algorithms', room: 'B204' },
    { time: 'Apr 23, 2:00 PM', course: 'Web Development', room: 'C303' },
  ];

  const announcements = [
    { date: 'Apr 19, 2025', text: 'Grades for Q1 have been published.' },
    { date: 'Apr 18, 2025', text: 'New assignment template available.' },
    { date: 'Apr 17, 2025', text: 'Faculty meeting on Fri at 3 PM.' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <SideBar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Top navbar */}
        <Navbar />

        {/* Page body */}
        <main className="p-6 overflow-y-auto">
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center p-4 bg-white rounded-lg shadow"
              >
                <div className={`p-3 rounded-full ${s.bg}`}>
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-500">{s.label}</h4>
                  <p className="text-2xl font-bold">{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Charts and tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Performance chart */}
            <div className="bg-white p-6 rounded-lg shadow h-96">
              <h3 className="text-xl font-semibold mb-4">Student Performance</h3>
              {/* Replace with a real chart component */}
              <div className="flex items-center justify-center h-full text-gray-400">
                [Performance Chart Goes Here]
              </div>
            </div>

            {/* Upcoming classes */}
            <div className="bg-white p-6 rounded-lg shadow h-96 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4">Upcoming Classes</h3>
              <table className="w-full text-left text-sm">
                <thead className="border-b">
                  <tr>
                    <th className="pb-2">Time</th>
                    <th className="pb-2">Course</th>
                    <th className="pb-2">Room</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingClasses.map((cls, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="py-2">{cls.time}</td>
                      <td className="py-2">{cls.course}</td>
                      <td className="py-2">{cls.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Announcements</h3>
            <ul className="space-y-3">
              {announcements.map((a, i) => (
                <li key={i} className="flex">
                  <span className="w-24 text-gray-500">{a.date}</span>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
