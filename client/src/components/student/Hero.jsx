import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import Features from "./Features";
import Footer from "./Footer";
import Companies from "./Companies";
import Testimonial from "./Testominal";
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
                Join millions of students and gain access to thousands of
                courses on technology, business, design, and more.
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

      <section>
        <CourseCard />
      </section>
      <section>
        <Features />
        <Companies />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Hero;
