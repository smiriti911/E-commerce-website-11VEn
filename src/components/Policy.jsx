import React from 'react';
import { TfiExchangeVertical } from "react-icons/tfi";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import Title from './Title';

const Policy = () => {
  return (
    <div className="my-16 px-4 sm:px-10">
      <div className="text-center py-8 text-4xl md:text-5xl">
        <Title text={"Our"} highlight={"Policy"} />
        <p className="text-2xl md:text-2xl text-lime-800 dark:text-lime-200 font-heading tracking-wide">
          Discover the benefits and peace of mind with our hassle-free policies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Hassle Free Exchange */}
        <div className="group flex flex-col items-center text-center p-8 bg-gradient-to-tl from-rose-200 to-amber-200 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-gradient-to-tl dark:from-rose-300  dark:to-indigo-900 ">
          <TfiExchangeVertical className="text-6xl text-rose-700 mb-4 group-hover:text-rose-800 transition-colors dark:text-rose-100 dark:group-hover:text-indigo-950 duration-300" />
          <p className="text-base font-semibold text-rose-800 dark:text-rose-100 mb-2">Hassle-Free Exchange</p>
          <p className="text-sm text-rose-400 dark:text-rose-100">
            Exchange your purchase with no questions asked within 30 days of purchase. 
          </p>
        </div>

        {/* Free Returns */}
        <div className="group flex flex-col items-center text-center p-8 bg-gradient-to-tl from-rose-200 to-amber-200 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-gradient-to-tl dark:from-rose-300  dark:to-indigo-900 ">
          <TbTruckReturn className="text-6xl text-rose-700 mb-4 group-hover:text-rose-800 transition-colors dark:text-rose-100 dark:group-hover:text-indigo-950 duration-300" />
          <p className="text-base font-semibold text-rose-800 dark:text-rose-100 ">Free Returns</p>
          <p className="text-sm text-rose-400 dark:text-rose-100">
            Free returns on all orders, ensuring that you’re completely satisfied with your purchase. 

          </p>
        </div>

        {/* 24/7 Support */}
        <div className="group flex flex-col items-center text-center p-8 bg-gradient-to-tl from-rose-200 to-amber-200 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-gradient-to-tl dark:from-rose-300  dark:to-indigo-900 ">
          <BiSupport className="text-6xl text-rose-700 mb-4 group-hover:text-rose-800 transition-colors dark:text-rose-100 dark:group-hover:text-indigo-950 duration-300" />
          <p className="text-base font-semibold text-rose-800 mb-2 dark:text-rose-100">24/7 Customer Support</p>
          <p className="text-sm text-rose-400 dark:text-rose-100">
            Our customer support team is available around the clock to assist with any issues. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
