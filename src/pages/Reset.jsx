import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const ResetPassword = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Extract token from URL fragment (hash)
  useEffect(() => {
    console.log("Full URL:", window.location.href);

    let access_token = null;
    
    // Check if token is in the hash fragment (#access_token=...)
    if (window.location.hash.includes("access_token")) {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      access_token = hashParams.get("access_token");
    } else {
      // Fallback: Try extracting from query params (?access_token=...)
      const searchParams = new URLSearchParams(location.search);
      access_token = searchParams.get("access_token");
    }

    console.log("Extracted access_token:", access_token);

    if (!access_token) {
      setMessage("");
    } else {
      localStorage.setItem("supabase_reset_token", access_token); // Store it for usage
    }
  }, [location]);

  // ✅ Handle form submission to update the password
  const onSubmit = async (data) => {
    let access_token = localStorage.getItem("supabase_reset_token");

    if (!access_token) {
      setMessage("Invalid or expired reset link.");
      return;
    }

    setLoading(true);
    setMessage("");

    // ✅ Use updateUser() to change the password
    const { error } = await supabase.auth.updateUser({
      password: data.password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Reset Password
        </h2>

        {message && (
          <p className={`text-center mt-4 ${message.includes("successful") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}

        {!message.includes("successful") && (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-600">New Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Must be at least 6 characters" } })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === watch("password") || "Passwords do not match",
                })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
