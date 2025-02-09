import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import { BsHeartbreak } from "react-icons/bs";

const Wishlist = () => {
  const { currency, wishlist, handleAddToCart, handleRemoveFromWishlist, fetching } =
    useContext(ShopContext);

  // If fetching is true, display a loading spinner
  if (fetching) {
    return <LoadingSpinner />;
  }

  // If wishlist is empty
  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-xl font-mono font-semibold text-rose-400 text-center py-10">
          Your wishlist is empty!!
        </p>
        <BsHeartbreak className="text-8xl text-red-300" />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl text-rose-300 mb-6 text-left font-heading tracking-wider px-4">
        Your wishlist:
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="relative bg-white dark:bg-neutral-950 dark:shadow-neutral-800 rounded-xl shadow-md p-4 sm:p-5 flex flex-col items-center gap-3 transition-all transform hover:scale-105 hover:shadow-xl hover:cursor-pointer" // Hover effect applied here
          >
            {/* Product Image */}
            <div className="w-full h-48 flex justify-center items-center overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>

            {/* Product Title */}
            <div>
            <h3 className="text-lg text-lime-800 dark:text-lime-200 mt-2 line-clamp-1 text-center">
              {item.title}
            </h3>

            {/* Price */}
            <p className="text-lime-950 dark:text-lime-200 text-xl font-heading text-center tracking-wider">
              {currency} {item.price.toFixed(2)}
            </p>
            </div>
            

            <div className="flex items-center justify-between w-full gap-2">
              {/* Add to Cart Button */}
              <Link
                to="/cart"
                onClick={() => handleAddToCart(item)}
                className="w-full bg-lime-200 text-lime-950 hover:text-rose-900 px-4 py-2 rounded-lg hover:bg-red-300 transition font-heading tracking-widest text-lg cursor-pointer items-center justify-center text-center flex gap-2"
              >
                Add to Cart
                <FaShoppingCart className="text-xl mb-1" />
              </Link>

              {/* Remove from Wishlist Button */}
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
                className="text-rose-400 hover:text-rose-600 text-xl transition-all duration-300"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
