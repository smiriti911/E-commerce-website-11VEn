import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTrash, FaMoneyBillWave, FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, delivery, currency, setCart } = useContext(ShopContext);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Remove item from cart
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Increase item quantity
  const handleIncrease = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease item quantity
  const handleDecrease = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Handle Checkout
  const handleCheckout = () => {
    setCart([]); // Clear cart first
    setOrderSuccess(true); // Show confirmation message
    
    // Hide message after 4 seconds
    setTimeout(() => {
      setOrderSuccess(false);
    }, 4000);
  };

  // Calculate total price
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + delivery;

  return (
    <div className="container mx-auto">
      {cart.length === 0 && !orderSuccess ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-xl font-mono font-semibold text-rose-400 dark:text-rose-200 text-center py-10">
            Your cart is empty!!
          </p>
          <FaOpencart className="text-8xl text-red-100" />
        </div>
      ) : (
        <div className="bg-white bg-gradient-to-r from-white dark:bg-gradient-to-r dark:from-neutral-950 dark:to-neutral-900 to-amber-100 p-6 rounded-2xl">
          <h2 className="text-3xl text-rose-400 dark:text-rose-300 mb-6 text-left font-heading tracking-wider">
            Your Cart:
          </h2>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b border-red-200 pb-4"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-md md:w-28 md:h-28 lg:w-32 lg:h-32"
                  />
                </Link>

                <div className="flex-1 ml-4">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-xl font-heading tracking-wider text-rose-700 dark:text-rose-200"
                  >
                    {item.title}
                  </Link>
                  <p className="text-lime-700 text-xl font-heading tracking-wider dark:text-lime-200">
                    {currency}
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="text-base tracking-tight sm:text-lg text-lime-500 mt-1 dark:text-lime-200">
                      Quantity:
                    </p>
                    {item.quantity > 1 && (
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="text-rose-600 hover:text-rose-700 text-4xl sm:text-5xl items-center mb-1 sm:mb-2 dark:text-rose-300"
                      >
                        -
                      </button>
                    )}
                    <span className="text-base sm:text-xl font-semibold items-center mt-1 dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="text-lime-600 hover:text-lime-700 text-2xl sm:text-3xl items-center sm:mb-0.5 dark:text-lime-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-rose-400 hover:text-rose-600 transition"
                >
                  <FaTrash className="text-xl" />
                </button>
              </li>
            ))}
          </ul>

          {/* Price Summary */}
          {cart.length > 0 && (
            <>
              <div className="w-full mt-4 text-lg font-heading tracking-wide flex justify-end dark:text-rose-200">
                <div className="text-right">
                  <p className="text-rose-700 dark:text-rose-200">
                    Subtotal: {currency}
                    {subtotal.toFixed(2)}
                  </p>
                  <p className="text-rose-700 dark:text-rose-200">
                    Delivery: {currency}
                    {delivery.toFixed(2)}
                  </p>
                  <p className="text-xl text-lime-900 mt-2 dark:text-lime-200">
                    Total: {currency}
                    {total.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="flex items-center gap-4 mx-auto bg-lime-200 rounded-xl py-3 px-2 w-full md:w-3/5 justify-center mt-4 text-lime-950 hover:text-rose-900 hover:bg-red-300 transition font-heading tracking-widest text-lg cursor-pointer"
              >
                Proceed to Checkout
                <FaMoneyBillWave />
              </button>
            </>
          )}
        </div>
      )}

      {/* Order Success Popup */}
      {orderSuccess && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rose-200 text-rose-700 px-8 py-4 rounded-lg shadow-lg z-50 transition-all duration-300 font-bold text-lg">
          <div className="flex items-center justify-center">
            Order placed successfully!
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;