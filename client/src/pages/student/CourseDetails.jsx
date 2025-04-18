import React, { useContext, useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {
  FaStar,
  FaChevronRight,
  FaHeart,
  FaShareAlt,
  FaPlay,
  FaClock,
  FaList,
  FaTags,
  FaUsers,
  FaCalendarAlt,
  FaArrowLeft
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses } = useContext(AuthContext);
  const [course, setCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const found = allCourses.find(c => c.id === parseInt(id));
    if (found) {
      setCourse(found);
      setSelectedVideo(found.courseContent[0]?.lectureUrl || '');
    }
  }, [allCourses, id]);

  const totalLectures = useMemo(
    () => course?.courseContent.reduce((sum, chap) => sum + chap.chapterContent.length, 0),
    [course]
  );
  const totalMinutes = useMemo(
    () =>
      course?.courseContent.reduce(
        (sum, chap) => sum + chap.chapterContent.reduce((s, lec) => s + lec.lectureDuration, 0),
        0
      ),
    [course]
  );
  const totalHours = (totalMinutes / 60).toFixed(1);
  const averageRating = useMemo(() => {
    if (!course?.courseRatings?.length) return course?.rating;
    const sum = course.courseRatings.reduce((s, r) => s + r.rating, 0);
    return (sum / course.courseRatings.length).toFixed(1);
  }, [course]);
  const enrolledCount = course?.enrolledStudents.length || 0;
  const discountedPrice = (course?.price * (100 - course?.discount) / 100).toFixed(2);

  if (!course) {
    return <div className="text-center py-10 text-gray-600">Loading course details...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <Link to="/courseList" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
        <FaArrowLeft className="mr-2" /> Back to Courses
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full rounded-xl overflow-hidden shadow-lg aspect-video"
          >
            <video
            key={selectedVideo}
              src={selectedVideo}
              poster={course.image}
              controls
              className="w-full h-full object-cover"
            />
            {!isEnrolled && (
              <button
                onClick={() => setIsEnrolled(true)}
                className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition"
              >
                Enroll Now
              </button>
            )}
          </motion.div>

          <div className="space-y-6">
            <motion.header
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-extrabold text-gray-900 flex items-center">
                {course.title}
                {course.bestSeller && <span className="ml-4 bg-yellow-300 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">Bestseller</span>}
                {course.new && <span className="ml-2 bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">New</span>}
              </h1>
              <div className="flex flex-wrap items-center text-gray-500 gap-4">
                <div className="flex items-center"><FaStar className="text-yellow-500 mr-1" /> {averageRating} ({course.reviews} reviews)</div>
                <div className="flex items-center"><FaUsers className="mr-1" /> {enrolledCount} students</div>
                <div className="flex items-center"><FaCalendarAlt className="mr-1" /> {new Date(course.createdAt).toLocaleDateString()}</div>
                {!course.isPublished && <span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded">Draft</span>}
              </div>
            </motion.header>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-none bg-gray-50 rounded-xl p-8"
            >
              <h2>About this Course</h2>
              <div dangerouslySetInnerHTML={{ __html: course.courseDescription }} />
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
              {course.courseContent.map(ch => (
                <AnimatePresence key={ch.chapterId}>
                  <motion.details
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group border-b last:border-none pb-4 mb-4"
                  >
                    <summary className="flex justify-between items-center cursor-pointer py-2 font-medium">
                      <span>Chapter {ch.chapterOrder}: {ch.chapterTitle}</span>
                      <FaChevronRight className="transform group-open:rotate-90 transition" />
                    </summary>
                    <ul className="mt-4 space-y-2">
                      {ch.chapterContent.map(lec => (
                        <li
                          key={lec.lectureId}
                          onClick={() => lec.isPreviewFree && setSelectedVideo(lec.lectureUrl)}
                          className={`flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition ${lec.isPreviewFree ? 'cursor-pointer' : 'opacity-50'}`}
                        >
                          <div className="flex items-center gap-3">
                            {lec.isPreviewFree ? <FaPlay className="text-green-600" /> : <div className="w-4 h-4 bg-gray-300 rounded-full" />}
                            <span>{lec.lectureOrder}. {lec.lectureTitle}</span>
                          </div>
                          <span className="text-sm text-gray-500">{lec.lectureDuration} min</span>
                        </li>
                      ))}
                    </ul>
                  </motion.details>
                </AnimatePresence>
              ))}
            </motion.section>
          </div>
        </div>

        <aside className="space-y-8 sticky top-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border border-gray-200 rounded-2xl p-6 bg-white shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Purchase</h3>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-gray-900">${discountedPrice}</span>
              <span className="text-sm text-gray-500 line-through">${course.price.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setIsEnrolled(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              {isEnrolled ? 'Enrolled' : 'Enroll Now'}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border border-gray-200 rounded-2xl p-6 bg-white shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Instructor</h3>
            <div className="flex items-center gap-4">
              <img
                src={course.instructorImage || 'https://cdn.pixabay.com/photo/2024/09/12/21/20/ai-generated-9043367_960_720.png'}
                alt={course.instructor}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{course.instructor}</p>
                <p className="text-gray-500 text-sm mt-1">Senior Developer & Educator</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col gap-3"
          >
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-lg hover:bg-gray-100 transition">
              <FaHeart className="text-red-500" /> Add to Wishlist
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-lg hover:bg-gray-100 transition">
              <FaShareAlt className="text-blue-500" /> Share Course
            </button>
          </motion.div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetails;
