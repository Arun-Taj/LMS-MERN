import React from 'react';
import courses from '../../assets/dummyCourses';
import { Link, useLocation } from 'react-router-dom';
import CourseCard from '../../components/student/CourseCard';

const CourseList = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchQuery = queryParams.get("query") || "";

  // Filter courses by matching title, category, or instructor name
  const filteredCourses = courses.filter(course => {
    const lowerQuery = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(lowerQuery) ||
      course.category.toLowerCase().includes(lowerQuery) ||
      course.instructor.toLowerCase().includes(lowerQuery)
    );
  });

  // Show filtered courses if there's a search query; otherwise, show all
  const coursesToDisplay = searchQuery.trim() ? filteredCourses : courses;

  // Optionally, display a message if no matches are found
  const noResults = coursesToDisplay.length === 0 && searchQuery.trim() !== "";

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {searchQuery.trim() ? (
        <h2 className="text-3xl font-extrabold mb-4">
          Search Results for &quot;{searchQuery}&quot;
        </h2>
      ) : (
        <h2 className="text-3xl font-extrabold mb-8">All Courses</h2>
      )}

      {noResults ? (
        <p className="text-gray-600">No courses found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coursesToDisplay.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

      <div className="mt-8">
        <Link to="/" className="text-indigo-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CourseList;
