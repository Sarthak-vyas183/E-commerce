/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

function Men() {
  const [ProductLink, setProductLink] = useState([]);

  const getAllCategoryProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => {
        console.log(res.data); // Logging the API response
        setProductLink(res.data); // Correctly setting the fetched products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  // Fetch products on component mount
  useEffect(() => {
    getAllCategoryProducts();
  }, []);

  const handleBuyNow = (id) => {
    console.log(`Product ID ${id} clicked for purchase`);
    // Additional functionality for the "Buy" button can be added here
  };

  const handleAddToCart = (id) => {
    console.log(`Product ID ${id} added to cart`);
    // Additional functionality for the "Add to Cart" button can be added here
  };

  return (
    <div className="relative top-[10vh] p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ProductLink.map((product) => (
          <div
            key={product.id}
            className="border p-4 shadow-md rounded-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleBuyNow(product.id)}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Buy Now
              </button>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;
