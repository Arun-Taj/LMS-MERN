import React from 'react'
import { Route, Routes, useMatch, Navigate } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollment from './pages/student/MyEnrollment'
import Player from './pages/student/Player'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import MyCourses from './pages/educator/MyCourses'
import Navbar from './components/student/Navbar'
import LoginPage from './components/Auth/Login'
import SignupPage from './components/Auth/Signup'


const App = () => {
  const isEducatorRoute=useMatch('/educator/*')
  return (
    <div className='bg-white min-h-screen'>
      {!isEducatorRoute && <Navbar/>}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courseList' element={<CourseList/>}/>
        <Route path='/search' element={<CourseList/>}/>
       {/* Correct usage of a dynamic parameter */}
       <Route path='/courseDetails/:id' element={<CourseDetails />} />
        {/* Fallback route for /courseDetails without id */}
        <Route path='/courseDetails' element={<Navigate to="/courseList" replace />} />
        <Route path='/myEnrollment' element={<MyEnrollment/>}/>
        <Route path='/player/:id' element={<Player/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/educator' element={<Educator/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='addCourse' element={<AddCourse/>}/>
            <Route path='studentEnrolled' element={<StudentsEnrolled/>}/>
            <Route path='myCourses' element={<MyCourses/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
