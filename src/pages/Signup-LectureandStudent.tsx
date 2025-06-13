import React from "react";
import background from "../assets/background.png";
import logo from "../assets/Selection.png";

export default function SignUpLectureAndStudent() {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-archivo"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
        {/* Left Side - Logo */}
        <div className="relative md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="ProLearn Logo" className="w-20 h-20" />
            <span className="text-3xl font-bold text-white font-archivo">ProLearn</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white bg-opacity-90">
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2 font-archivo">
              Sign In to Your Account
            </h2>
            <p className="text-center text-gray-500 mb-6 text-sm font-archivo">
              Enter your credentials to access your courses.
            </p>
            <form className="space-y-4 font-archivo">
              <div>
                <label className="block text-sm font-medium text-gray-700 font-archivo">Email Address</label>
                <input
                  type="email"
                  className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 font-archivo"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 font-archivo">Password</label>
                <input
                  type="password"
                  className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 font-archivo"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-indigo-600" />
                  <span className="ml-2 text-sm text-gray-600 font-archivo">Remember me</span>
                </div>
                <a href="#" className="text-indigo-600 text-sm underline font-archivo">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded transition font-archivo"
              >
                Sign in
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600 font-archivo">
              Don't have an account?{" "}
              <a href="#" className="text-indigo-600 underline font-archivo">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}