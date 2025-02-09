import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className=" p-8 rounded-2xl  w-full max-w-4xl flex flex-col md:flex-row gap-4">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 p-6 bg-gradient-to-r from-red-200 to-amber-100 flex flex-col rounded-2xl ">
          <h2 className="text-3xl font-bold text-rose-700 mb-4">Get in Touch</h2>
          <p className="text-rose-700 mt-7">
            Feel free to contact us through the form or reach out directly.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-rose-600" />
              <p className="text-rose-800 font-medium">+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-rose-600" />
              <p className="text-rose-800 font-medium">contact@example.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-rose-600" />
              <p className="text-rose-800 font-medium">Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 p-6 bg-gradient-to-r from-red-200 to-amber-100 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-rose-700">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-rose-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-rose-800 text-rose-800 rounded-lg focus:bg-rose-50 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-rose-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-rose-800 text-rose-800 rounded-lg focus:bg-rose-50 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-rose-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-rose-800 text-rose-800 rounded-lg focus:bg-rose-50 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Write your message here..."
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-300 text-rose-800 hover:text-rose-100 px-4 py-2 rounded-lg hover:bg-rose-800 transition font-bold tracking-widest text-lg cursor-pointer items-center justify-center text-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
