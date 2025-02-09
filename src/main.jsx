import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Login  from "./pages/Login.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Orders from "./pages/Orders.jsx";
import WishList from "./pages/WishList.jsx";
import SignUp from "./pages/SignUp.jsx"

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main layout (Navbar, Footer, etc.)
    children: [
      { path: "/", element: <Home /> },
      { path: "/collection", element: <Collection /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/product/:id", element: <Product /> }, // Dynamic product page
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/place-order", element: <PlaceOrder /> },
      { path: "/orders", element: <Orders /> },
    ],
  }
])

createRoot(document.getElementById("root")).render(

    <RouterProvider router={router}/>

);
