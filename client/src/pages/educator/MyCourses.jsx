import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/student/Loading';

const MyCourses = () => {
  const { allCourses } = useContext(AuthContext);
  const [courses, setCourses] = useState(null);

  const fetchEducatorCourses = async () => {
    // simulate fetch
    setCourses(allCourses);
  };

  useEffect(() => {
    fetchEducatorCourses();
  }, []);

  if (!courses) return <Loading />;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Courses</h1>
      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                All Courses
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Earnings
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Students
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Published On
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {courses.map((course) => (
              <tr key={course._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
                  <img
                    src={course.image}
                    alt={course.courseTitle}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <span className="text-gray-900 font-medium truncate">
                    {course.courseTitle}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  ${Math.floor(
                    course.enrolledStudents.length *
                      (course.price - (course.discount * course.price) / 100)
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {course.enrolledStudents.length}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {new Date(course.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
