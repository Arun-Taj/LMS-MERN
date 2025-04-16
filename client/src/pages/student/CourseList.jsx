import React from 'react';
import courses from '../../assets/dummyCourses'; // Adjust the path as needed
import { Link, useLocation } from 'react-router-dom';
import { FaStar, FaRegClock } from 'react-icons/fa';

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
          {coursesToDisplay.map((course) => {
            // Calculate original price if a discount exists
            const originalPrice = course.discount > 0 ? course.price / (1 - course.discount / 100) : course.price;
            console.log("Course ID:", course.id);
            return (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <Link to="/courseDetails">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover cursor-pointer"
                    />
                  </Link>
                  {course.bestSeller && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-sm font-semibold px-3 py-1 rounded-full">
                      Best Seller
                    </span>
                  )}
                  {course.new && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {course.discount > 0 && (
                    <span className="absolute bottom-2 right-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {course.discount}% OFF
                    </span>
                  )}
                </div>
  
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-indigo-600">
                      {course.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaRegClock className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">By {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < Math.floor(course.rating) ? 'fill-current' : 'fill-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        ({course.reviews.toLocaleString()})
                      </span>
                    </div>
                    <div>
                      <span className="text-lg font-bold text-gray-900">
                        ${course.price.toFixed(2)}
                      </span>
                      {course.discount > 0 && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
    
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="mt-8">
        <Link to="/" className="text-indigo-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default CourseList;
