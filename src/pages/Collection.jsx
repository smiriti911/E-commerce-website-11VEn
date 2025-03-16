import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowForward } from "react-icons/io";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import LoadingSpinner from "../components/LoadingSpinner";

const Collection = () => {
  const { products, fetching, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    applyFilters();
  }, [products, selectedCategories, sortOrder, search]);

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Function to apply filters and sorting
  const applyFilters = () => {
    let updatedProducts = [...products];

    // Filter by search query
    if (search && search.trim() !== "") {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category if any selected
    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Sort products based on selected sorting option
    if (sortOrder === "low to high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high to low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t-3 text-lime-100">
      
      {/* Left Sidebar */}
      <div className="sticky top-0 w-full sm:w-auto flex flex-row sm:flex-col gap-4 z-1 bg-white dark:bg-neutral-950 shadow-lg sm:shadow-none">
        <div className="sticky top-0 sm:top-20 sm:space-y-4 space-y-1 w-full flex flex-row sm:flex-col sm:w-60">
          
          {/* Filters Section */}
          <div className="flex-1">
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 text-xl flex items-center cursor-pointer gap-2 text-rose-800 dark:text-rose-300 font-heading tracking-wider px-1 "
            >
              Filters
              <IoIosArrowForward
                className={`mb-1 ${showFilter ? "rotate-90" : ""} sm:hidden`}
              />
            </p>

            {/* Category Filter */}
            <div
              className={`bg-rose-200 pl-5 py-3 rounded-2xl transition-all duration-300 ${showFilter ? "" : "hidden"} sm:block`}
            >
              <p className="mb-3 text-lg font-medium text-rose-800 font-heading tracking-wider">
                Categories
              </p>
              <div className="space-y-2">
                {["men's clothing", "women's clothing", "electronics", "jewelery"].map(
                  (category) => (
                    <p key={category} className="flex gap-2 text-rose-800">
                      <input
                        type="checkbox"
                        value={category}
                        onChange={() => handleCategoryChange(category)}
                        checked={selectedCategories.includes(category)}
                      />
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Sort By Section */}
          <div className="flex-1">
            <div className="sm:bg-rose-200 p-2 sm:p-3 rounded-xl flex flex-row sm:flex-col gap-10 sm:gap-4">
              <p className="text-xl font-medium text-rose-800 dark:text-rose-200 font-heading tracking-wider sm:mb-2">
                Sort By:
              </p>
              <select
                className="w-1/2 sm:w-full bg-rose-100 text-base px-2 sm:py-1 rounded-lg focus:outline-none transition-all duration-300 text-rose-700"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Relevance</option>
                <option value="low to high">Low to High</option>
                <option value="high to low">High to Low</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* Product Display Section */}
      <div className="flex-1">
        <div className="flex justify-between text-2xl sm:text-4xl mb-4 tracking-wider">
          <Title text="all" highlight="collection" />
        </div>

        {fetching && <LoadingSpinner />}

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 px-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-rose-800 text-xl">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
