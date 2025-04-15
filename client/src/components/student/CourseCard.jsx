// CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegClock } from 'react-icons/fa';
import courses from '../../assets/dummyCourses'; // Adjust the path as needed

const CourseCard = () => {
  // Filter courses that are "new" and sort them by rating in descending order
  const filteredCourses = courses
    .filter(course => course.new)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4); // Display only the top 4 courses

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Learn from the Best
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => {
            // Calculate original price if a discount exists
            const originalPrice =
              course.discount > 0 ? course.price / (1 - course.discount / 100) : course.price;

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

        <div className="mt-12 text-center">
          <Link 
            to="/courseList" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            Show All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
