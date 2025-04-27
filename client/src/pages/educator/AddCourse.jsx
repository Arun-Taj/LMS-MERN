import Quill from "quill";
import React, { useEffect, useState, useRef } from "react";
import uniqid from "uniqid";
import "quill/dist/quill.snow.css";
import EduLogo from "../../assets/Edu-Logo.png";
import { IoCloudUploadOutline } from "react-icons/io5";


const AddCourse = () => {
  // const quill = new Quill('#editor');
  const quillRef = useState(null);
  const editorRef = useRef(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(0);
  const [chapters, setChapters] = useState([]);

  const [showPopUp, setShowPopUp] = useState(null);
  const [currentChapterId, setCurrentChapterId] = useState(null);

  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            ["bold", "italic", "underline", "strike"],
            // lists
            [{ list: "ordered" }, { list: "bullet" }],
            // indentation
            // [{ indent: '-1' }, { indent: '+1' }],
            // // text direction
            // [{ direction: 'rtl' }],
            // blockquote and code-block
            ["blockquote", "code-block"],
            // insert options
            ["link", "image", "video"],
            // // clean styling
            // ['clean']
          ],
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <form
        action=""
        className="flex flex-col gap-4 max-w-md w-full text-gray-500"
      >
        <div className="flex flex-col gap-1">
          <p>Course Title</p>
          <input
            type="text"
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            placeholder="Enter course title"
            required
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
          />
        </div>
        <div>
          <p>Course Description</p>
          <div ref={editorRef}></div>
        </div>

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col gap-1">
            <p>Course Price</p>
            <input
              type="text"
              onChange={(e) => setCoursePrice(e.target.value)}
              value={coursePrice}
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500"
            />
          </div>
          <div className="flex md:flex-row felx-col items-center gap-3">
            <p>Course Thumbnail</p>
            <label htmlFor="thumbnailImage" className="flex items-center gap-3">
              <IoCloudUploadOutline/>
              <input type="file" id="thumbnailImage"onChange={e=>setImage(e.target.files[0])}accept="image/*" hidden/>
              <img src={image ? URL.createObjectURL(image):''} alt="" />
            </label>
          </div>
        </div>
        <div>
          <p>Discount %</p>
          <input type="number" onChange={e=>setDiscount(e.target.value)} value={discount} placeholder="0" min={0} max={100} className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border-gray-500" required/>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
