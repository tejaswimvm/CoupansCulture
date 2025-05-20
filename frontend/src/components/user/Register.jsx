"use client";

import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/navigation";
import base_url from "../helper/baseurl"
export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const router=useRouter()
  const handleChange = async (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    router.push('/login')
    setError(false); 

    try {
     const response  = await axios.post(base_url + "/api/user/register", formData)
     setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
     })

     console.log(response.data)
    } catch (error) {
      setError(true);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
      {/* Left Side Image */}
      <div className="md:w-1/2 hidden md:flex justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
          alt="Sign up illustration"
          className="w-4/5 "
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 px-6 py-10 max-w-xl">
        <div className=" p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First & Last Name */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm text-black focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm text-black focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm text-black focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm text-black focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-300"
            >
              {loading ? "Registering..." : "Register"}
            </button>

            {err && (
              <p className="text-center text-red-500 mt-3">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
