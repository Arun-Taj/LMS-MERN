import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegClock } from 'react-icons/fa';

const CourseCard = ({ course }) => {
  // Calculate the original price if a discount exists
  const originalPrice =
    course.discount > 0 ? course.price / (1 - course.discount / 100) : course.price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Link to={`/courseDetails/${course.id}`}>
          <img 
            src={course.image} 
            alt={`${course.title} course thumbnail`}
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
        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
