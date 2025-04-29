import React, { useEffect, useState, useRef } from "react";
import Quill from "quill";
import uniqid from "uniqid";
import axios from "axios";
import "quill/dist/quill.snow.css";
import { IoCloudUploadOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiDeleteBack2Line } from "react-icons/ri";

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [chapters, setChapters] = useState([]);

  const [showLecturePopup, setShowLecturePopup] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  // initialize Quill editor
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write course description...",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
          ],
        },
      });
    }
  }, []);

  // handle adding, removing, toggling chapters
  const handleChapter = (action, chapterId = null) => {
    if (action === "add") {
      const title = prompt("Enter chapter name:");
      if (!title) return;
      const newChapter = {
        chapterId: uniqid(),
        chapterTitle: title,
        chapterContent: [],
        collapsed: false,
      };
      setChapters(prev => [...prev, newChapter]);
    }
    if (action === "remove" && chapterId) {
      if (window.confirm("Are you sure you want to delete this chapter?")) {
        setChapters(prev => prev.filter(ch => ch.chapterId !== chapterId));
      }
    }
    if (action === "toggle" && chapterId) {
      setChapters(prev =>
        prev.map(ch =>
          ch.chapterId === chapterId ? { ...ch, collapsed: !ch.collapsed } : ch
        )
      );
    }
    if (action === "openLecturePopup" && chapterId) {
      setActiveChapterId(chapterId);
      setShowLecturePopup(true);
    }
  };

  // handle lecture form submit
  const handleAddLecture = () => {
    if (!lectureDetails.lectureTitle || !lectureDetails.lectureDuration || !lectureDetails.lectureUrl) {
      alert("Please fill all lecture fields.");
      return;
    }
    setChapters(prev =>
      prev.map(ch => {
        if (ch.chapterId === activeChapterId) {
          return {
            ...ch,
            chapterContent: [...ch.chapterContent, { ...lectureDetails }],
          };
        }
        return ch;
      })
    );
    // reset
    setLectureDetails({ lectureTitle: "", lectureDuration: "", lectureUrl: "", isPreviewFree: false });
    setShowLecturePopup(false);
    setActiveChapterId(null);
  };

  // handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    const descriptionHtml = quillRef.current.root.innerHTML;

    const formData = new FormData();
    formData.append("title", courseTitle);
    formData.append("description", descriptionHtml);
    formData.append("price", coursePrice);
    formData.append("discount", discount);
    if (imageFile) formData.append("thumbnail", imageFile);

    formData.append("chapters", JSON.stringify(chapters));

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post("/api/courses", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Course created successfully!");
      // reset form
      setCourseTitle("");
      quillRef.current.setText("");
      setCoursePrice(0);
      setDiscount(0);
      setImageFile(null);
      setChapters([]);
    } catch (error) {
      console.error(error);
      alert("Error creating course. Please try again.");
    }
   
  };

  return (
    <div className="min-h-screen overflow-auto p-6 bg-gray-50">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Title</label>
          <input
            type="text"
            value={courseTitle}
            onChange={e => setCourseTitle(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <div ref={editorRef} className="mt-1 h-40" />
        </div>
        {/* Price & Discount */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm  font-medium text-gray-700">Price ($)</label>
            <input
              type="number"
              value={coursePrice}
              onChange={e => setCoursePrice(e.target.value)}
              className="mt-1 w-auto border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
            <input
              type="number"
              value={discount}
              onChange={e => setDiscount(e.target.value)}
              className="mt-1 w-auto border border-gray-300 rounded-md"
              min={0}
              max={100}
            />
          </div>
        </div>
        {/* Thumbnail */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Course Thumbnail</label>
          <div className="mt-1 flex items-center">
            <label className="flex items-center cursor-pointer">
              <IoCloudUploadOutline className="text-2xl text-gray-500" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => setImageFile(e.target.files[0])}
              />
            </label>
            {imageFile && (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Thumbnail Preview"
                className="ml-4 h-20 w-20 object-cover rounded"
              />
            )}
          </div>
        </div>
        {/* Chapters */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Chapters & Lectures</h3>
          {chapters.map((chapter, idx) => (
            <div key={chapter.chapterId} className="mb-4 bg-gray-100 rounded-lg">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <RiArrowDropDownLine
                    className={`cursor-pointer transform ${chapter.collapsed ? "-rotate-90" : ""}`}
                    onClick={() => handleChapter("toggle", chapter.chapterId)}
                  />
                  <span className="ml-2 font-semibold">{idx + 1}. {chapter.chapterTitle}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>{chapter.chapterContent.length} lectures</span>
                  <button type="button" onClick={() => handleChapter("openLecturePopup", chapter.chapterId)} className="text-blue-600 hover:underline">
                    + Add Lecture
                  </button>
                  <RiDeleteBack2Line
                    className="cursor-pointer text-red-500"
                    onClick={() => handleChapter("remove", chapter.chapterId)}
                  />
                </div>
              </div>
              {!chapter.collapsed && (
                <div className="px-6 pb-4">
                  {chapter.chapterContent.map((lec, i) => (
                    <div key={i} className="flex justify-between items-center py-1">
                      <span>{i + 1}. {lec.lectureTitle} ({lec.lectureDuration} mins) - {lec.isPreviewFree ? "Free" : "Paid"}</span>
                      <RiDeleteBack2Line
                        className="cursor-pointer text-gray-500"
                        onClick={() => {
                          setChapters(prev =>
                            prev.map(ch => {
                              if (ch.chapterId === chapter.chapterId) {
                                return { ...ch, chapterContent: ch.chapterContent.filter((_, idx) => idx !== i) };
                              }
                              return ch;
                            })
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button type="button" onClick={() => handleChapter("add")} className="text-blue-700 hover:underline">
            + Add Chapter
          </button>
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Course
        </button>
      </form>

      {/* Lecture Popup */}
      {showLecturePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Lecture Details</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  className="mt-1 w-full border-gray-300 rounded-md"
                  value={lectureDetails.lectureTitle}
                  onChange={e => setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration (mins)</label>
                <input
                  type="number"
                  className="mt-1 w-full border-gray-300 rounded-md"
                  value={lectureDetails.lectureDuration}
                  onChange={e => setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">URL</label>
                <input
                  type="text"
                  className="mt-1 w-full border-gray-300 rounded-md"
                  value={lectureDetails.lectureUrl}
                  onChange={e => setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })}
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="freePreview"
                  className="mr-2"
                  checked={lectureDetails.isPreviewFree}
                  onChange={e => setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })}
                />
                <label htmlFor="freePreview" className="text-sm">Free Preview</label>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button onClick={() => setShowLecturePopup(false)} className="px-4 py-2 rounded border">
                Cancel
              </button>
              <button onClick={handleAddLecture} className="px-4 py-2 bg-blue-600 text-white rounded">
                Add Lecture
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
