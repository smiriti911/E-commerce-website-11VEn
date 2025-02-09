import React, { useState } from "react";
import Title from "./Title";

const Newsletter = () => {

  const[subscribe, setSubscribe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribe("");
    alert("You have subscribed successfully!");
  }
  return (
    <div className="my-16 px-4 sm:px-10 ">
      <div className="text-center py-8 text-4xl md:text-5xl">
        <Title text={"Subscribe"} highlight={"Now"} />
        <p className="text-xl md:text-2xl text-lime-800 dark:text-lime-200 font-heading tracking-wide">
        Stay updated with the latest trends, offers, and more. Sign up now!
        </p>
      </div>

      <form onSubmit={handleSubmit}
        action="#"
        method="post"
        className="flex flex-row sm:flex-row items-center justify-center gap-4"
      >
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email . . . . . ."
          required
          value={subscribe}
          onChange={(e) => setSubscribe(e.target.value)}
          className="px-4 py-2 w-80 sm:w-96 text-base rounded-xl border-2 border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all duration-300 bg-rose-100 dark:bg-rose-200 text-rose-900"
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          className="bg-lime-200 text-lime-950 hover:text-rose-900 px-4 py-2 rounded-lg hover:bg-red-300 transition font-heading tracking-widest text-lg cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;

