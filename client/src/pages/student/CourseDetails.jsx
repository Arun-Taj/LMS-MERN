import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../../assets/dummyCourses"; // Adjust path as needed
import { FaStar } from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();
  // Find the course by comparing the id from the URL
  const course = courses.find((course) => String(course.id) === id);
  const [activeTab, setActiveTab] = useState("overview"); // "overview", "curriculum", or "reviews"

  // If no course is found, display an error message
  if (!course) {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-red-600">Course not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Top Overview Section */}
      <div className="flex flex-col md:flex-row border-b pb-4">
        {/* Left: Course Image & Preview Video */}
        <div className="md:w-1/2">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-auto object-cover rounded-lg"
          />
          {course.previewVideo && (
            <div className="mt-4">
              <video 
                src={course.previewVideo} 
                controls 
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
        {/* Right: Course Info */}
        <div className="md:ml-6 mt-4 md:mt-0 md:w-1/2">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-gray-600 mt-2">By {course.instructor}</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.floor(course.rating) ? "fill-current" : "fill-gray-300"}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              ({course.reviews} reviews)
            </span>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              {course.description || "No detailed description provided yet."}
            </p>
          </div>
          <div className="mt-4">
            <span className="text-xl font-bold">
              ${course.price.toFixed(2)}
            </span>
            {course.discount > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${(course.price / (1 - course.discount / 100)).toFixed(2)}
              </span>
            )}
          </div>
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mt-8">
        <div className="border-b">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-2 focus:outline-none ${
                activeTab === "overview"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`pb-2 focus:outline-none ${
                activeTab === "curriculum"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Curriculum
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-2 focus:outline-none ${
                activeTab === "reviews"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-gray-700">
                {course.fullDescription || course.description || "No additional overview available."}
              </p>
            </div>
          )}
          {activeTab === "curriculum" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
              {course.curriculum && course.curriculum.length > 0 ? (
                <div className="space-y-4">
                  {course.curriculum.map((section, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <h3 className="font-semibold text-xl mb-2">
                        {section.sectionTitle}
                      </h3>
                      <ul className="list-disc list-inside">
                        {section.lessons.map((lesson, idx) => (
                          <li key={idx}>{lesson}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700">No curriculum data available.</p>
              )}
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Course Reviews</h2>
              {/* Replace with dynamic review content in a real app */}
              <p className="text-gray-700">No reviews yet. Be the first to review this course!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
