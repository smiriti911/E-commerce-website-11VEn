import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";

const Toggle = () => {
  // This function decides dark mode based on the current time (after 10 AM)
  const getInitialTheme = () => {
    const currentHour = new Date().getHours();
    console.log("Current Hour:", currentHour); // Log current hour for debugging
    return currentHour >= 19; // Dark mode enabled after 10 AM
  };

  // Initialize darkMode based on the time
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    // Apply the theme change to the document element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log("Dark Mode on load:", darkMode); // Log after applying darkMode
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); // Manual toggle for the theme
    setRotate(!rotate); // Toggle the rotate state when the button is clicked
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gradient-to-tl from-rose-300 via-amber-200 to-amber-100 dark:bg-gradient-to-tl dark:from-rose-300 dark:via-indigo-800 dark:to-indigo-950 transition-all transform hover:scale-110 hover:shadow-lg hover:rotate-12"
    >
      <div
        className={`transition-transform duration-500 ${rotate ? 'rotate-360' : ''}`}
      >
        {darkMode ? (
          <BsMoonStarsFill className="text-amber-200" size={20} />
        ) : (
          <FaSun className="text-rose-700" size={20} />
        )}
      </div>
    </button>
  );
};

export default Toggle;
