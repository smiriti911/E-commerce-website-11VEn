import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { FaShoppingCart } from "react-icons/fa";
import BestSeller from "../components/BestSeller";
import { IoIosHeart } from "react-icons/io";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, fetching, cart, handleAddToCart, wishlist, handleWishlist } = useContext(ShopContext);
  const product = products.find((item) => item.id.toString() === id);

  if (fetching) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return <p className="text-rose-500 text-xl font-heading text-center">Product not found</p>;
  }



  // Find the quantity of the product in the cart
  const productInCart = cart.find(item => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;

  // Check if the product is already in the wishlist
  const isInWishlist = wishlist.some(item => item.id === product.id);

  return (
    <div className="justify-center items-center px-5 py-10">
      <div className="w-full bg-gradient-to-r from-white via-white to-amber-100 dark:bg-gradient-to-r dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900 rounded-lg space-y-5 md:space-y-10 p-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl text-rose-800 dark:text-rose-300 font-heading mb-6 text-left">
          {product.title}
        </h2>

        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0">
          {/* Image Section */}
          <div className="flex-1 flex justify-center sm:w-1/3">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-80 sm:max-h-96 max-w-xs rounded-lg object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 space-y-6 sm:pl-16">
            <p className="text-lg text-rose-700 dark:text-rose-200 tracking-wider font-heading">{product.description}</p>
            <p className="text-2xl text-lime-800 dark:text-lime-200 font-heading">${product.price}</p>
            <p className="text-lg text-lime-800 dark:text-lime-200 font-heading">In Stock</p>

            <div className="flex justify-between items-center mt-8 flex-row sm:flex-row space-y-4 sm:space-y-0">
              {/* Add to Cart Button */}
              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full sm:w-3/4 bg-lime-200 text-lime-950 hover:text-rose-900 px-6 py-3 rounded-lg hover:bg-red-300 transition font-heading tracking-widest text-lg cursor-pointer flex gap-10 items-center justify-center"
              >
                <FaShoppingCart className="text-xl" />
                {quantity > 0 ? `Added (${quantity})` : "Add to Cart"}
              </button>

              {/* Wishlist Button */}
              <button
                className={`p-2 ${isInWishlist ? "text-red-600" : "text-rose-300"} 
                hover:text-red-600 focus:text-red-600 transition-all duration-200`}
                onClick={() => handleWishlist(product)}
              >
                <IoIosHeart className="text-4xl mb-4 sm:mb-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Best Seller Component */}
      <div className="mt-10">
        <BestSeller />
      </div>
    </div>
  );
};

export default ProductDetail;
