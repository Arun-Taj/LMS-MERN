import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext,useState } from "react";
import { login } from "../services/api";

const LoginPage = () => {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    const {login: authLogin}=useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setError("")
        setLoading(true);

        try{
            const response=await login(formData)
            localStorage.setItem("token", response.data.token);
            authLogin(response.data.token, response.data.user);
            navigate("/"); // Redirect to dashboard or home page
        }
        catch(err){
            setError(
                err.response?.data?.message || "Login failed. Please try again."
              );
        }
        finally {
            setLoading(false);
          }
    }
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-purple-600">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">LMS Login</h2>
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
        <form className="space-y-4"onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-200"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
