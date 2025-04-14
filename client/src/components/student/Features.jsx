import React from 'react'

const Features = () => {
  return (
    <div>
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
    </div>
  )
}

export default Features
