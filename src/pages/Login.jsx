import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // using lucide-react for back icon
import { useNavigate } from "react-router-dom"
import { useState } from "react";


export default function Login() {
  
  const [ID, setID] = useState("")
  const [Password, setPassword] =useState("")
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(ID=="admin" && Password=="1234"){
      navigate("/admindashboard")
    }
    else if(ID=="harry" && Password=="1234"){
      navigate("/dashboard")
    }
    else{
      alert("Invalid ID or Password")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">

      <div className="p-6 flex items-center space-x-4">
        <NavLink to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition">
          <ArrowLeft size={22} className="mr-1" />
          Back
        </NavLink>
      </div>

      {/* Centered Login Card */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-blue-100">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
            Login to your account
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Welcome back to Santulan
          </p>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Email address" 
              onChange={(e)=>{setID(e.target.value)}}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e)=>{setPassword(e.target.value)}}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold shadow-md transition"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <NavLink to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
