import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-12 h-12 border-4 border-t-rose-400 border-lime-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
