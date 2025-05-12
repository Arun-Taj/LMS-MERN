import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { getMe } from "../components/services/api";
import dummyCourses from "../assets/dummyCourses";
import { useNavigate } from "react-router-dom";
import { becomeEducator as apiBecomeEducator } from "../components/services/api";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => { 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate=useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await getMe(token);
          setUser(response.data.user);
        } catch (err) {
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  //Auth Actions

  const login = (token, user) => {
    localStorage.setItem("token", token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

// const becomeEducator = async () => {
//   const token = localStorage.getItem("token");
//   if (!token) throw new Error("No auth token");

//   // call backend
//   const { data } = await apiBecomeEducator(token);

//   // `data.user` now has isEducator: true
//   setUser(data.user);
// };
const becomeEducator = async () => {
   const { data } = await apiBecomeEducator();
    setUser(data.data.user);                      // update the user object
  localStorage.setItem('token', data.data.token);
    return data;
};




  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  // const [isEducator,setIsEducator]=useState(true)
  const [enrolledCourses,setEnrolledCourses]=useState([])

  const fetchUserEnrolledCourse =async()=>{
    setEnrolledCourses(dummyCourses)
  }

  // Fetch courses on mount
  useEffect(() => {
    const fetchAllCourses = async () => {
      // Replace with real API call when available
      setAllCourses(dummyCourses);
    };
    fetchAllCourses();
    fetchUserEnrolledCourse()
  }, []);

  // Memoized course computations
  const totalLectures = useMemo(
    () =>
      selectedCourse?.courseContent.reduce(
        (sum, chap) => sum + chap.chapterContent.length,
        0
      ) || 0,
    [selectedCourse]
  );

  const totalMinutes = useMemo(
    () =>
      selectedCourse?.courseContent.reduce(
        (sum, chap) =>
          sum +
          chap.chapterContent.reduce((s, lec) => s + lec.lectureDuration, 0),
        0
      ) || 0,
    [selectedCourse]
  );

  const totalHours = useMemo(
    () => (totalMinutes / 60).toFixed(1),
    [totalMinutes]
  );

  // const averageRating = useMemo(() => {
  //   if (!selectedCourse) return 0;
  //   if (!selectedCourse.courseRatings?.length)
  //     return selectedCourse.rating || 0;
  //   const sum = selectedCourse.courseRatings.reduce((s, r) => s + r.rating, 0);
  //   return (sum / selectedCourse.courseRatings.length).toFixed(1);
  // }, [selectedCourse]);

  const averageRating=(course)=>{
    if (!course) return 0;
    if (!course.courseRatings?.length) return course.rating || 0;
    const sum = course.courseRatings.reduce((s, r) => s + r.rating, 0);
    return Number((sum / course.courseRatings.length).toFixed(1));
  }

  const enrolledCount = useMemo(
    () => selectedCourse?.enrolledStudents.length || 0,
    [selectedCourse]
  );

  const discountedPrice = useMemo(
    () =>
      (
        (selectedCourse?.price * (100 - selectedCourse?.discount)) /
        100
      ).toFixed(2) || "0.00",
    [selectedCourse]
  );

  // Enroll the current user in a course
   const enrollCourse = (courseId) => {
       setAllCourses(curr =>
         curr.map(c => {
           if (c.id !== courseId) return c;
           // prevent double‑enroll
          if (c.enrolledStudents.includes(user._id)) return c;
          return {
            ...c,
             enrolledStudents: [...c.enrolledStudents, user._id]
          };
         })
       );
     };

  const value = {
    user,
    // setIsEducator,
    becomeEducator,
    navigate,
    loading,
    allCourses,
    selectedCourse,
    setSelectedCourse,
    totalLectures,
    enrollCourse,             // ← expose it
    totalMinutes,
    totalHours,
    averageRating,
    enrolledCount,
    discountedPrice,
    enrolledCourses,
    fetchUserEnrolledCourse,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
// Hook helper
export const useAuth = () => useContext(AuthContext);
