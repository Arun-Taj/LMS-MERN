import React, { useEffect, useState } from 'react';
import { dummyDashboardData } from '../../assets/dummyCourses';
import Loading from '../../components/student/Loading';
import { FaUserGraduate, FaBook, FaMoneyBillWave } from 'react-icons/fa';

const Dashboard = () => {
  const [dashBoardData, setDashBoardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashBoardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashBoardData ? (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Educator Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Enrollments */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
          <div className="text-blue-600 text-4xl">
            <FaUserGraduate />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">{dashBoardData.enrolledStudentsData.length}</p>
            <p className="text-gray-500">Total Enrollments</p>
          </div>
        </div>

        {/* Total Courses */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
          <div className="text-green-600 text-4xl">
            <FaBook />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">{dashBoardData.totalCourses}</p>
            <p className="text-gray-500">Total Courses</p>
          </div>
        </div>

        {/* Total Earnings */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
          <div className="text-yellow-500 text-4xl">
            <FaMoneyBillWave />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">${dashBoardData.totalEarnings}</p>
            <p className="text-gray-500">Total Earnings</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
