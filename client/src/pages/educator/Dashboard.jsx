import React, { useEffect, useState } from 'react';
import { dummyDashboardData } from '../../assets/dummyCourses';
import Loading from '../../components/student/Loading';
import { FaUserGraduate, FaBook, FaMoneyBillWave } from 'react-icons/fa';

const Dashboard = () => {
  const [dashBoardData, setDashBoardData] = useState(null);

  const fetchDashboardData = async () => {
    // simulate fetching data
    setDashBoardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  

  if (!dashBoardData) return <Loading />;
  console.log(dashBoardData.enrolledStudentsData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Educator Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
          <div className="text-blue-600 text-4xl">
            <FaUserGraduate />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">
              {dashBoardData.enrolledStudentsData.length}
            </p>
            <p className="text-gray-500">Total Enrollments</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
          <div className="text-green-600 text-4xl">
            <FaBook />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">
              {dashBoardData.totalCourses}
            </p>
            <p className="text-gray-500">Total Courses</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
          <div className="text-yellow-500 text-4xl">
            <FaMoneyBillWave />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">
              ${dashBoardData.totalEarnings}
            </p>
            <p className="text-gray-500">Total Earnings</p>
          </div>
        </div>
      </div>

      {/* Latest Enrollments Table */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Latest Enrollments</h2>
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.N
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enrolled On
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {dashBoardData.enrolledStudentsData.map((item, index) => (
                <tr key={item.student._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center">
                    <img
                      src={item.student.imageUrl}
                      alt={item.student.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div className="truncate">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.student.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {item.student.email}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {item.courseTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {new Date(item.purchaseDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
