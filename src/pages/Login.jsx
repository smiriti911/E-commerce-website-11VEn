import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient"; // Import Supabase client

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Authenticate with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/"); // Navigate to home page on successful login
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="bg-white dark:bg-neutral-950 p-8 rounded-lg shadow-2xl dark:shadow-neutral-800 shadow-rose-300 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-rose-700 dark:text-rose-200">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-rose-700 dark:text-rose-200 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-rose-800 dark:border-rose-200 text-rose-800 dark:text-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-rose-700 dark:text-rose-200 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-rose-800 dark:border-rose-200 text-rose-800 dark:text-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-200 text-lime-800 hover:text-rose-900 px-4 py-2 rounded-lg hover:bg-red-300 transition font-bold tracking-widest text-lg cursor-pointer"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center dark:text-white">
          Don't have an account?{" "}
          <NavLink to="/sign-up" className="text-lime-600 dark:text-rose-400 hover:underline">
            Sign up
          </NavLink>
        </p>
        <p className="mt-4 text-center dark:text-white">
          Forgot password?{" "}
          <NavLink to="/reset" className="text-lime-600 dark:text-rose-400 hover:underline">
            Reset password
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
