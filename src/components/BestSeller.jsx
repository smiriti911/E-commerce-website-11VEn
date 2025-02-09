import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

import ProductItem from './ProductItem';
import LoadingSpinner from './LoadingSpinner';

const BestSeller = () => {
    const { products,fetching } = useContext(ShopContext
    );
    const [bestProducts, setBestProducts] = useState([]);
  
    useEffect(() => {
      if (products.length > 0) {
        const topRated = [...products]
        .filter(product => product.rating && product.rating.rate) // Ensure rating exists
          .sort((a, b) => b.rating.rate - a.rating.rate) // Sort by highest rating
          .slice(0, 4); // Get top 8 products
    
        setBestProducts(topRated);
      }
    }, [products]);
  
    return (
      <div className="my-10 px-10">
        <div className="text-center py-8 text-4xl md:text-5xl">
          <Title text={"Best"} highlight={"Sellers"} />
          <p className="text-xl md:text-2xl text-lime-800 dark:text-lime-200 font-heading tracking-wide">
          These top picks are trending Shop Now before they’re gone!
          </p>
        </div>
        {fetching && <LoadingSpinner/>}
        {/* Grid for Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
          {bestProducts.map((item, index) => (
            <ProductItem 
            key={index} 
            id={item.id} 
            image={item.image} 
            title={item.title} 
            price={item.price} />
          ))}
        </div>
      </div>
  )
}

export default BestSeller