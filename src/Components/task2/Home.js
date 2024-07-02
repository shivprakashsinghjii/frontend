import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate("/signin"); // Redirect to sign-in if no email is found
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/signin"); // Navigate to the sign-in page
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome, {email}</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
