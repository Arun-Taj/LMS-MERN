import React, { createContext,useContext,useState,useEffect } from "react";
import { getMe } from "../components/services/api";
import dummyCourses from '../assets/dummyCourses'


export const AuthContext=createContext()

export const AuthContextProvider=(props)=>{
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await getMe(token);
          setUser(response.data.user);
        } catch (err) {
          localStorage.removeItem('token');
        }
      }  setLoading(false);
    };
    checkAuth();
  }, []);

  const login = (token, user) => {
    localStorage.setItem('token', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const [allCourses,setAllCourses]=useState([])

  const fetchAllCourses=async()=>{
    setAllCourses(dummyCourses)
  }

  useEffect(()=>{
    fetchAllCourses()
  },[])

  const value = { user, loading, allCourses, login, logout };


    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}