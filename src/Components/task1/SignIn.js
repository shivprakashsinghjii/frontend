import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Assets/Log_in.png";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Div with Image */}
      <div className="hidden md:flex md:flex-1 items-center justify-center bg-gray-100">
        <img src={Image} alt="Mobile Login" className="max-w-full h-auto" />
      </div>

      {/* Right Div with Sign Up Form */}
      <div className="flex-1 flex flex-col justify-center p-8 align-center bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {/* Sign Up Form */}
        <form className="space-y-4">
          {/* Mobile Number Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-sm text-gray-600">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          {/* Separator -OR- */}
          <div className="flex items-center mt-4">
            <div className="border-b border-gray-300 flex-1"></div>
            <div className="mx-4 text-sm text-gray-500">OR</div>
            <div className="border-b border-gray-300 flex-1"></div>
          </div>

          {/* Sign with Google Option */}
          <button
            type="button"
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.29 1.11h4.582c-.212 1.193-1.125 3.435-4.582 3.435-2.772 0-5.042-2.222-5.042-4.956s2.27-4.956 5.042-4.956c1.688 0 2.84.728 3.418 1.338l2.327-2.327C13.537 2.165 11.952 1 10 1 5.589 1 2 4.589 2 9s3.589 8 8 8c2.117 0 3.635-.879 4.516-2.112l-2.825-2.777z"
                clipRule="evenodd"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
          >
            Submit
          </button>
        </form>

        {/* Already have an account? Sign in Link */}
        <p className="mt-4 text-sm text-gray-600 text-center md:text-left">
          Does not have an Account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
