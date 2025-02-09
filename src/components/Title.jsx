import React from "react";

const Title = ({ text, highlight }) => {
  return (
    <div className="w-full flex gap-2  items-center justify-center text-center">
      {/* Title with Highlight */}
      <p className="font-heading text-rose-800 dark:text-rose-300 tracking-wide">
        {text} <span className="text-rose-800 dark:text-rose-300 tracking-wide">{highlight}</span>
      </p>
    </div>
  );
};

export default Title;
