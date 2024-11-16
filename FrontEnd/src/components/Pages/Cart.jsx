/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CiDiscount1 } from "react-icons/ci";

function Cart() {
  return (
    <div className="w-full min-h-[90vh] relative top-[10vh] bg-white flex justify-center py-4 gap-4">
      <div className="cardContainer w-full max-w-4xl flex flex-col md:flex-row items-start gap-4">
        <section className="w-full md:w-[60%] h-full">
          <div className="p-4 mb-4 bg-[#FFF6F4] border flex gap-2 justify-between border-gray-300 rounded-md">
            <div>
              <h2 className="text-lg font-semibold">
                Deliver to:{" "}
                <span className="font-bold">Sarthak Vyas, 456665</span>
              </h2>
              <p>Bhopal, (MP)</p>
            </div>
            <button className="mt-2 border border-red-500 text-red-500 rounded px-4 py-1 hover:bg-red-500 hover:text-white transition">
              CHANGE ADDRESS
            </button>
          </div>

          <div className="p-4 mb-4 bg-[#FAFBFC] border border-gray-300 rounded-md">
            <div className="flex items-center">
              <CiDiscount1 className="text-xl mr-2" />
              <h2 className="font-semibold">Available Offers</h2>
            </div>
            <p className="mt-2">
              <span>
                • 10% Instant Discount on RBL Bank Credit Cards on a min spend
                of $3,500. TCA
              </span>
            </p>
            <button className="mt-2 text-pink-500 hover:underline">
              Show More
            </button>
          </div>

          <div className="flex mb-4 items-center border border-gray-300 rounded-md p-4">
            <input type="checkbox" className="mr-2" />
            <img
              src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" // Placeholder image URL
              alt="Pink Floyd 1265 T Shirt"
              className="w-20 h-20 object-cover rounded-md"
            />

            <div className="ml-4 flex-1">
              <h4 className="font-bold">Entertainment Store</h4>
              <p className="text-sm">Snowboard Jacket Winter Coats</p>
              <p className="text-sm">Sold by: Entertainment Store</p>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <label className="mr-2">Size:</label>
                  <select className="border border-gray-300 rounded">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                  <br />

                  <label className="mr-2">Qty:</label>
                  <select className="border border-gray-300 rounded mt-2">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <button className="text-red-500">REMOVE</button>
              </div>
              <p className="mt-2">
                $56.91 <span className="line-through text-gray-500">$100</span>{" "}
                <span className="text-red-500">$43 OFF</span>
              </p>
              <p className="text-sm text-gray-600">14 days return available</p>
            </div>
          </div>
        </section>

        <section className="w-full md:w-[40%] h-full p-5 bg-white border border-gray-300 rounded-md">
          <h2 className="text-lg font-bold">COUPONS</h2>
          <div className="flex items-center justify-between mt-2">
            <span>Apply Coupons</span>
            <button className="bg-[#FF3F6C] text-white rounded px-4 py-1">
              APPLY
            </button>
          </div>

          <h3 className="mt-4 font-semibold">
            SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA
          </h3>
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            Donate and make a difference
          </label>
          <div className="flex space-x-2 mt-2 flex-wrap">
            <button className="border border-gray-300 rounded px-2 mb-2">$1</button>
            <button className="border border-gray-300 rounded px-2 mb-2">$2</button>
            <button className="border border-gray-300 rounded px-2 mb-2">$5</button>
            <button className="border border-gray-300 rounded px-2 mb-2">$10</button>
          </div>

          <p className="text-pink-500 mt-2 cursor-pointer">Know More</p>

          <hr className="my-4" />

          <h3 className="font-semibold">PRICE DETAILS (0 Item)</h3>
          <p>
            Total MRP: <span className="font-bold">$100</span>
          </p>
          <p className="font-bold">
            Total Amount: <span className="text-red-500">$56.91</span>
          </p>

          <button className="mt-4 w-full bg-[#FF3F6C] text-white p-2 rounded">
            PLACE ORDER
          </button>
        </section>
      </div>
    </div>
  );
}

export default Cart;