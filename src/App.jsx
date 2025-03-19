import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import supabase from "./supabaseClient";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ShopContextProvider from "./context/ShopContext";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Define public routes that should NOT redirect to login
  const publicRoutes = ["/login", "/sign-up", "/reset", "/reset-password"];

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      } else if (!publicRoutes.includes(location.pathname)) {
        // ✅ Only redirect if NOT on a public route
        setUser(null);
      }
    };

    fetchUser();

    // Listen for authentication changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);

    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [navigate, location]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="dark:bg-neutral-950 px-0 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ShopContextProvider>
        <NavBar user={user} handleLogout={handleLogout} />
        <SearchBar />
        <Outlet />
        <Footer />
      </ShopContextProvider>
    </div>
  );
};

export default App;
