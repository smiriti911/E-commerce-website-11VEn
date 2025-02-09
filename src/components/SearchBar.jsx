import React, { useContext, useRef, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { useLocation } from "react-router-dom";  // Import useLocation for pathname

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const searchRef = useRef(null);  // Reference for the search bar
  const location = useLocation();  // Get current location (pathname)

  // Check if the current location is Home or Collections page
  const isCollections = location.pathname === "/collection";

  // Close the search bar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);  // Close the search bar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSearch]); // Depend on setShowSearch, not location

  // Only render the search bar if the page is Home or Collections
  if (!isCollections) return null;

  return showSearch ? (
    <div className="flex justify-center items-center mb-4">
      <div
        ref={searchRef}  // Attach ref to the search bar div
        className="rounded-lg w-[80%] sm:w-[75%] lg:w-[70%] flex items-center gap-2 border-2 border-rose-700 h-8 bg-gradient-to-r from-amber-100 to-rose-300"
      >
        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="flex-grow p-2 border-none outline-none text-lg text-rose-700"
        />
        {/* Search Icon */}
        <button className="text-rose-800 hover:text-rose-400 transition">
          <FiSearch size={20} />
        </button>
        {/* Close Button */}
        <button
          onClick={() => setShowSearch(false)}
          className="text-rose-800 hover:text-rose-600 transition"
        >
          <MdOutlineClose size={20} />
        </button>
      </div>
    </div>
  ) : null;
};

export default SearchBar;
