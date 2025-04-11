import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {Link} from 'react-router-dom'
const Hero = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image and Overlay */}
      <section
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/53/17/6f/53176fe3c630e40bda78c003f529c087.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          {/* Conditionally display messages if user is logged in */}
          {user ? (
            <>
              {user.isNew ? (
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  Welcome to our platform, {user.name}!
                </h2>
              ) : (
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  Welcome back, {user.name}!
                </h2>
              )}
              <p className="text-lg md:text-xl mb-6 max-w-2xl">
                {user.isNew
                  ? "Start your journey by exploring our featured courses and personalized recommendations."
                  : "Catch up on your favorite courses and discover new topics curated for you."}
              </p>
              <Link
                to="/courseList"
                className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-8 rounded-full"
              >
                Explore Courses
              </Link>
            </>
          ) : (
            <>
              {/* For non-authenticated visitors: Show search bar and a CTA */}
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Learn New Skills Online
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Join millions of students and gain access to thousands of courses on technology, business, design, and more.
              </p>
              
              <Link
                to="/signup"
                className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-8 rounded-full"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4" role="img" aria-label="Courses">
              📚
            </div>
            <h3 className="text-xl font-semibold mb-2">Diverse Courses</h3>
            <p className="text-gray-700">
              Explore a wide range of courses tailored to meet your learning goals.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4" role="img" aria-label="Interactive">
              💻
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
            <p className="text-gray-700">
              Engage in interactive lessons, quizzes, and live sessions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4" role="img" aria-label="Community">
              🤝
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-700">
              Join our community of learners and instructors for support and insights.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">About Our Platform</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our Learning Management System offers a comprehensive approach to education by combining cutting-edge technology with expert instruction. We are dedicated to creating an engaging, accessible, and supportive environment that empowers you to succeed.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 py-4">
        <div className="container mx-auto text-center text-white">
          <p>&copy; {new Date().getFullYear()} LMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
