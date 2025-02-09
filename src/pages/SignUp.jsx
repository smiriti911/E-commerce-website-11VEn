import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center rounded-2xl">
      <div className="bg-white dark:bg-neutral-950 p-8 rounded-lg shadow-2xl dark:shadow-neutral-800 shadow-rose-300 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-rose-700 dark:text-rose-200">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-rose-700 dark:text-rose-200 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border border-rose-800 dark:border-rose-200 text-rose-800 dark:text-rose-200 rounded-lg focus:bg-rose-50 dark:focus:bg-rose-50 focus:text-rose-950 dark:focus:text-rose-950 focus:border-rose-300 dark:focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-300"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-rose-700 dark:text-rose-200 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-rose-800 dark:border-rose-200 text-rose-800 dark:text-rose-200 rounded-lg focus:bg-rose-50 dark:focus:bg-rose-50 focus:text-rose-950 dark:focus:text-rose-950 focus:border-rose-300 dark:focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-rose-700 dark:text-rose-200 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-rose-800 dark:border-rose-200 text-rose-800 dark:text-rose-200 rounded-lg focus:bg-rose-50 dark:focus:bg-rose-50 focus:text-rose-950 dark:focus:text-rose-950 focus:border-rose-300 dark:focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-rose-700 dark:text-rose-200 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-rose-800 dark:border-rose-200 text-rose-800 dark:text-rose-200 rounded-lg focus:bg-rose-50 dark:focus:bg-rose-50 focus:text-rose-950 dark:focus:text-rose-950 focus:border-rose-300 dark:focus:border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-300"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-200 text-lime-800 hover:text-rose-900 px-4 py-2 rounded-lg hover:bg-red-300 transition font-bold tracking-widest text-lg cursor-pointer items-center justify-center text-center"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-center dark:text-white">
          Already have an account?{" "}
          <NavLink to="/login" className="text-lime-600 dark:text-rose-400 hover:underline">
            Log In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
