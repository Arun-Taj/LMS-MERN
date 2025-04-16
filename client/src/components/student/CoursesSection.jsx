import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import courses from '../../assets/dummyCourses';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  // Filter courses that are both new and best sellers, sort by rating, and take the top 4
  const topCourses = courses
    .filter(course => course.new || course.bestSeller)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-12 pt-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Learn from the Best
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated courses featuring the latest best sellers. Start your journey with a course that fits your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link 
            to="/courseList" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
          >
            Show All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
