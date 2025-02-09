import React, { useContext, useEffect, useState } from "react"; 
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import LoadingSpinner from "./LoadingSpinner";

const Latest = () => {
  const { products, fetching } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8)); // Update when products change
  }, [products]);

  return (
    <div className="my-10 px-10">

      <div className="text-center py-8 text-4xl md:text-5xl">
        <Title text={"Latest"} highlight={"Collection"} />
        <p className="text-xl md:text-2xl text-lime-800 dark:text-lime-200 font-heading tracking-wide">
          Discover the latest trends with our newest arrivals!
        </p>
      </div>
      {fetching && <LoadingSpinner/>}
      {/* Grid for Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem key={index} id={item.id} image={item.image} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
