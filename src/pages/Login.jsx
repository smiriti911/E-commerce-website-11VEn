import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Store JWT token
        navigate("/"); // Redirect to Home
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="bg-white dark:bg-neutral-950 p-8 rounded-lg shadow-2xl dark:shadow-neutral-800 shadow-rose-300 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-rose-700 dark:text-rose-200">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-rose-700 dark:text-rose-200 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-rose-800 dark:border-rose-200 text-rose-800 dark:text-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-300"
              placeholder="Enter your username"
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
              className="w-full px-3 py-2 border border-rose-800 dark:border-rose-200 text-rose-800 dark:text-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-300"
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
          <a href="/sign-up" className="text-lime-600 dark:text-rose-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
