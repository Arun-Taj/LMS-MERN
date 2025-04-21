import React, { useContext, useState, } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { HiSearch, HiChevronRight, HiAcademicCap, HiClock, HiCheckCircle } from 'react-icons/hi'
import {Line} from 'rc-progress'
import Footer from '../../components/student/Footer'



const MyEnrollment = () => {
  const { enrolledCourses, totalHours,navigate } = useContext(AuthContext)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCourses = enrolledCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const completedCount = enrolledCourses.filter(course => course.status === 'Completed').length

  

  const [progressArray,setProgressArray]=useState([
    { lectureCompleted: 2, totalLectures: 5 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 8, totalLectures: 8 },
    { lectureCompleted: 7, totalLectures: 12 },
    { lectureCompleted: 5, totalLectures: 5 },
    { lectureCompleted: 9, totalLectures: 10 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 9 },
    { lectureCompleted: 10, totalLectures: 10 },
    { lectureCompleted: 2, totalLectures: 6 },
  ])

  return (
    <>
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6 flex items-center">
          <HiAcademicCap className="w-8 h-8 text-blue-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Courses</p>
            <p className="text-2xl font-semibold text-gray-800">{enrolledCourses.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex items-center">
          <HiClock className="w-8 h-8 text-indigo-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Hours</p>
            <p className="text-2xl font-semibold text-gray-800">{enrolledCourses.reduce((sum, course) => sum + course.duration,0)}  hr</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex items-center">
          <HiCheckCircle className="w-8 h-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Courses Completed</p>
            <p className="text-2xl font-semibold text-gray-800">{progressArray.filter(progress => 
          progress.lectureCompleted === progress.totalLectures
        ).length}</p>
          </div>
        </div>
      </div>


      {/* Enrollments Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCourses.map((course, idx) => (
              <tr
                key={course.id}
                className="hover:bg-gray-50 focus-within:bg-gray-50" tabIndex={0}
              >
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-14 h-14 rounded-md shadow mr-4"
                  />
                  <span className="text-sm font-medium text-gray-800">{course.title}
                    <Line strokeWidth={2} percent={progressArray[idx] ? (progressArray[idx].lectureCompleted * 100)/(progressArray[idx].totalLectures):0 } className='bg-gray-300 rounded-full'/>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{course.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {progressArray[idx] && `${progressArray[idx].lectureCompleted} / ${progressArray[idx].totalLectures}`}
                  <span className="text-xs text-gray-500 ml-2">{course.completed}Lectures</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span>
                    {progressArray[idx] && progressArray[idx].lectureCompleted / progressArray[idx].totalLectures ===1 ? 'completed':'ongoing'}
                  </span>
                
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="p-2 rounded-full hover:bg-gray-200" onClick={()=>navigate('/player' + course._id)}>
                    <HiChevronRight className="w-5 h-5 text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default MyEnrollment
