import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { CiYoutube } from "react-icons/ci";
import YouTube from "react-youtube";
import { MdAccessTime } from "react-icons/md";

import {
  FaStar,
  FaChevronRight,
  FaHeart,
  FaShareAlt,
  FaPlay,
  FaArrowLeft,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaExpand, FaCompress } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const CourseDetails = () => {
  const { id } = useParams();
  const {
    allCourses,
    selectedCourse: course,
    setSelectedCourse,
    totalLectures,
    totalHours,
    averageRating,
    enrolledCount,
    discountedPrice,
    enrollCourse,
    user,
  } = useAuth();

  const [selectedVideo, setSelectedVideo] = useState("");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const cardRating = useMemo(
    () => averageRating(course),
    [averageRating, course]
  );

  useEffect(() => {
    const found = allCourses.find((c) => c.id === parseInt(id, 10));
    if (found) {
      setSelectedCourse(found);
      const firstPreview = found.courseContent
        .flatMap((ch) => ch.chapterContent)
        .find((lec) => lec.isPreviewFree);
      setSelectedVideo(firstPreview?.lectureUrl || "");
      setIsEnrolled(user && found.enrolledStudents?.includes(user._id));
    }
  }, [allCourses, id, setSelectedCourse, user]);

  if (!course) {
    return (
      <div className="text-center py-10 text-gray-600">
        Loading course details...
      </div>
    );
  }

  const getEmbedUrl = (url) => {
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };

  const handleEnroll = async () => {
    if (user && !isEnrolled) {
      await enrollCourse(course.id);
      setIsEnrolled(true);
    }
  };

  const isYouTube = selectedVideo.includes("youtu");

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <Link
        to="/courseList"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back to Courses
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-6">
            {/* Header */}
            <motion.header
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-extrabold text-gray-900 flex items-center">
                {course.title}
                {course.bestSeller && (
                  <span className="ml-4 bg-yellow-300 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                    Bestseller
                  </span>
                )}
                {course.new && (
                  <span className="ml-2 bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </h1>
              <div className="flex flex-wrap items-center text-gray-500 gap-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(cardRating)
                            ? "fill-current"
                            : "fill-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {cardRating} ({course.reviews.toLocaleString()})
                  </span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="mr-1" /> {enrolledCount} students
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1" />
                  {new Date(course.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  By <span className="font-bold">{course.instructor}</span>
                </div>
                {!course.isPublished && (
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded">
                    Draft
                  </span>
                )}
              </div>
            </motion.header>

            {/* About */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-none bg-gray-50 rounded-xl p-8"
            >
              <h2>About this Course</h2>
              <div
                dangerouslySetInnerHTML={{ __html: course.courseDescription }}
              />
            </motion.section>

            {/* Curriculum */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
              <div className="text-sm text-gray-700 mb-4">
                Total Lectures: {totalLectures} • Total Hours: {totalHours}
              </div>
              {course.courseContent.map((ch) => (
                <AnimatePresence key={ch.chapterId}>
                  <motion.details
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group border-b last:border-none pb-4 mb-4"
                  >
                    <summary className="flex justify-between items-center cursor-pointer py-2 font-medium">
                      <span>
                        Chapter {ch.chapterOrder}: {ch.chapterTitle}
                      </span>
                      <FaChevronRight className="transform group-open:rotate-90 transition" />
                    </summary>
                    <ul className="mt-4 space-y-2">
                      {ch.chapterContent.map((lec) => (
                        <li
                          key={lec.lectureId}
                          onClick={() => {
                            if (lec.isPreviewFree) {
                             setPlayerData({videoId:lec.lectureUrl.split('/').pop()});
                              // setIsVideoPlaying(false);
                            }
                          }}
                          className={`flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition ${
                            lec.isPreviewFree ? "cursor-pointer" : "opacity-50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {lec.isPreviewFree ? (
                              <FaPlay className="text-green-600" />
                            ) : (
                              <div className="w-4 h-4 bg-gray-300 rounded-full" />
                            )}
                            <span>
                              {lec.lectureOrder}. {lec.lectureTitle}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">
                            {lec.lectureDuration} min
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.details>
                </AnimatePresence>
              ))}
            </motion.section>
          </div>
        </div>

        {/* Sidebar with Video Preview */}
        <aside className="space-y-8 sticky top-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
           className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg bg-black"
          >
            
            
              {playerData ? <YouTube  videoId={playerData.videoId} opts={{playerVars:{autoplay:1}}} iframeClassName='w-full aspect-video'/>:<img src={course.image} alt={course.title} className="" />}
          
              

          </motion.div>

          {/* Purchase Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border border-gray-200 rounded-2xl p-6 bg-white shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Purchase</h3>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-gray-900">
                ${discountedPrice}
              </span>
              {course.discount > 0 && (
                <span className="text-sm text-gray-500 line-through">
                  ${course.price.toFixed(2)}
                </span>
              )}
            </div>
            <button
              onClick={handleEnroll}
              disabled={isEnrolled}
              className={`w-full py-3 rounded-lg cursor-pointer font-semibold transition ${
                isEnrolled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isEnrolled ? "Already Enrolled" : "Enroll Now"}
            </button>
          </motion.div>

          {/* Actions */}
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
