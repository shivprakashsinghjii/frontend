import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "../../Assets/Mobile-login.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      console.log("Form Data:", formData);
      const response = await axios.post(
        "http://localhost:3000/api/signup",
        formData
      );

      alert(response.data.message);
      // history.push("/signin");
    } catch (error) {
      console.error("There was an error!", error);
      alert(
        `Failed to create user: ${
          error.response?.data?.message || error.message
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:flex md:flex-1 items-center justify-center bg-gray-100">
        <img src={Image} alt="This is an Img" className="max-w-full h-auto" />
      </div>
      <div className="flex-1 flex flex-col justify-center p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center md:text-left">
          Already have an account?{" "}
          <Link to="/signin" className="text-indigo-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
