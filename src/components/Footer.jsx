import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-rose-900 dark:text-rose-200 py-10 px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
        {/* Brand Section */}
        <div className="flex flex-col items-center sm:items-start">
          <img src={logo} alt="Brand Logo" className="w-32" />
          <p className="text-sm mt-2 text-rose-600 dark:text-rose-200 text-center sm:text-left">
            Discover quality and comfort with our exclusive collections.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-rose-900 dark:text-rose-200 mb-3">Company</h3>
          <ul className="text-sm space-y-2 text-rose-600 dark:text-rose-400">
            <li>
              <a href="#" className="hover:text-rose-800 dark:hover:text-rose-300 transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-800 dark:hover:text-rose-300 transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-800 dark:hover:text-rose-300 transition">Delivery</a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-800 dark:hover:text-rose-300 transition">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-rose-900 dark:text-rose-200 mb-3">Get in Touch</h3>
          <p className="flex justify-center sm:justify-start items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
            <FaPhoneAlt /> +1 234 567 890
          </p>
          <p className="flex justify-center sm:justify-start items-center gap-2 text-sm text-rose-600 dark:text-rose-400 mt-2">
            <HiLocationMarker /> 123 Fashion St, NY, USA
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-rose-300 max-w-5xl mx-auto" />

      {/* Copyright */}
      <p className="text-center text-sm text-rose-700 dark:text-rose-400">
        © {new Date().getFullYear()} 11VEn. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
