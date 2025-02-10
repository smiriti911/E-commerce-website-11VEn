import React, { useContext, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { gsap } from "gsap";

const ProductItem = ({ image, title, price, id }) => {
  const { currency, wishlist, handleWishlist } = useContext(ShopContext);
  const cardRef = useRef(null);

  const isInWishlist = wishlist.some((item) => item.id === id);

  const addToWishlist = () => {
    handleWishlist({ id, title, price, image });

    if (!isInWishlist) {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      
      gsap.to(card, {
        x: window.innerWidth - rect.right - 20,
        y: -rect.top,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        zIndex: 9999, // Ensure it appears above other elements
        onComplete: () => {
          gsap.set(card, { opacity: 1, x: 0, y: 0, zIndex: "auto" });
        },
      });
    }
  };

  return (
    <div className="relative" ref={cardRef} style={{ position: "relative" }}>
      <div className="block group">
        <div className="bg-white dark:bg-neutral-950 rounded-xl shadow-md dark:shadow-neutral-800 p-4 sm:p-5 flex flex-col items-center gap-3 transition-transform transform hover:scale-105 hover:shadow-lg ">
          <Link to={`/product/${id}`} className="w-full h-30 flex justify-center items-center overflow-hidden">
            <img className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" src={image} alt={title} />
          </Link>
          <Link to={`/product/${id}`} className="text-center">
            <h2 className="text-base md:text-lg font-medium text-lime-950 dark:text-lime-200 line-clamp-1">{title}</h2>
            <p className="text-lime-950 text-lg sm:text-xl font-medium font-heading tracking-widest dark:text-lime-200">{currency} {price.toFixed(2)}</p>
          </Link>
          <div className="flex justify-end w-full gap-2">
            {/* <Link to={`/product/${id}`} className="w-full bg-lime-200 text-lime-950 hover:text-rose-900 px-4 py-2 rounded-lg hover:bg-red-300 transition font-heading tracking-widest text-lg cursor-pointer items-center justify-center text-center">Buy Now</Link> */}
            <button onClick={addToWishlist} className={` ${isInWishlist ? "text-red-600" : "text-rose-300"} hover:text-red-600 focus:text-red-600 transition-all duration-200 active:scale-90`}>
              <IoIosHeart className="text-xl sm:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
