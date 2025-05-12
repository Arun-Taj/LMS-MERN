import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";
import { signup } from "../services/api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {
const [formData,setFormData]=useState({
name:'',
email:'',
password:'',
})
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const { login } = useContext(AuthContext);

const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("")
    setLoading(true)
    try{
        const res=await signup(formData)
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user));
        login(res.data.token,res.data.user);
        navigate('/')

    }
    catch(err){
        setError(
            err.response?.data?.message || "Registration failed. Please try again."
          );
    }
    finally {
        setLoading(false);
      }
}


const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-500 to-blue-600">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">LMS Signup</h2>
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-200"
          >
             {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
