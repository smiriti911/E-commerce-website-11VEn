import React from "react";

const About = () => {
  return (
    <div className="w-full h-full p-6 sm:p-12 flex justify-center items-cente">
      <div className="text-left max-w-3xl mx-auto bg-gradient-to-r from-rose-50 to-amber-100 p-8 rounded-2xl ">
        <h1 className="text-5xl sm:text-5xl  font-heading text-rose-700 mb-6">
          About Us
        </h1>
        <p className="text-lg sm:text-xl text-rose-600 leading-relaxed mb-6">
          We are a passionate e-commerce company dedicated to providing our
          customers with the best and most unique products. Our mission is to
          offer a seamless shopping experience, bringing you a wide variety of
          high-quality items at affordable prices. Our commitment to excellence
          ensures that you’ll find something special, no matter what you’re
          looking for.
        </p>
        <p className="text-lg sm:text-xl text-rose-700 leading-relaxed">
          Thank you for visiting us, and we hope you enjoy shopping with us.
        </p>
      </div>
    </div>
  );
};

export default About;
