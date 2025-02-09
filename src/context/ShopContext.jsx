import { useEffect, createContext, useReducer, useState } from "react"; 

export const ShopContext = createContext({
  products: [],
  currency: "$",
  delivery: 10,
  fetching: false,
  cart: [],
  setCart: [],
  totalCart: 0,
  wishlist: [],
  setWishlist: [],
  handleAddToCart: () => {},
  handleWishlist: () => {},
  handleRemoveFromWishlist: () => {}, // Added function to remove items from wishlist
});

const productReducer = (currProducts, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return action.payload.products;
    default:
      return currProducts;
  }
};

const ShopContextProvider = ({ children }) => {
  const [products, dispatchProducts] = useReducer(productReducer, []);
  const [fetching, setFetching] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const currency = "$";  // You can change this to any other value or dynamically assign it
  const delivery = 10; 
  // Fetch products
  useEffect(() => {
    setFetching(true);
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      dispatchProducts({ type: "ADD_PRODUCT", payload: { products: json } });
      setFetching(false);
    };
    fetchProducts();
  }, []);

  // Update total items in cart
  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCart(totalItems);
  }, [cart]);

  // Add to Cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const cartClone = structuredClone(prevCart);
      const existingProduct = cartClone.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cartClone.push({ ...product, quantity: 1 });
      }
      return cartClone;
    });
  };

  // Add to Wishlist
  const handleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const wishlistClone = structuredClone(prevWishlist);
      const existingProduct = wishlistClone.find((item) => item.id === product.id);
      if (!existingProduct) {
        wishlistClone.push({ ...product });
      }
      return wishlistClone;
    });
  };

  // Remove from Wishlist
  const handleRemoveFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };

  return (
    <ShopContext.Provider 
      value={{ 
        products, 
        currency, 
        delivery, 
        fetching, 
        search, 
        setSearch, 
        showSearch, 
        setShowSearch, 
        cart, 
        setCart, 
        totalCart,
        handleAddToCart,
        handleWishlist, 
        wishlist,
        setWishlist,
        handleRemoveFromWishlist,  // Provide this function
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
