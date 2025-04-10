import React, { createContext,useContext,useState,useEffect } from "react";
import { getMe } from "../components/services/api";

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


    // const value={

    // }


    return(
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {props.children}
        </AuthContext.Provider>
    )
}