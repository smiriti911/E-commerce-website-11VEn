import React, { useEffect } from "react";
import { taeHero1, jungkookHero1 } from "../assets/assets";

const Hero = () => {
  const images = [taeHero1, jungkookHero1];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row bg-gradient-to-tl from-rose-400 to-amber-100 dark:from-rose-300  dark:to-indigo-950 rounded-2xl border-rose-800 dark:border-gray-900 border-2 w-[80%] sm:w-[75%] lg:w-[70%] h-[65vh] mx-auto">
      {/* Left Side - Text Content */}
      <div className="w-full sm:w-1/2 h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[85%] sm:max-w-[80%] lg:max-w-[70%] text-center sm:text-left">
          <div className="text-rose-800 dark:text-white">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <p className="w-6 md:w-8 lg:w-10 h-[2px] bg-rose-800 dark:bg-white"></p>
              <p className="font-mono font-extrabold text-lg lg:text-xl dark:text-white">
                OUR BESTSELLERS
              </p>
            </div>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl sm:py-2 lg:py-3 leading-tight font-script font-extrabold dark:text-white">
              LATEST ARRIVALS
            </h1>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <p className="font-mono font-extrabold text-lg lg:text-xl dark:text-white">
                SHOP NOW
              </p>
              <p className="w-6 md:w-8 lg:w-10 h-[2px] bg-rose-800 dark:bg-white"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image (Now Fills Height) */}
      <div className="w-full sm:w-1/2 h-[100vh] sm:h-full flex justify-center items-center overflow-hidden">
        <img
          src={images[currentIndex]} 
          alt="jungkook"
          className="w-full h-full object-cover object-top sm:object-top rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
