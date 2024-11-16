/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Men from "../components/Pages/Men";
import Women from "../components/Pages/Women";
import HomeLives from "../components/Pages/HomeLives";
import Cart from "../components/Pages/Cart";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
             <Route path="/shop">
                 <Route path="/shop/men" element={<Men/>}/>
                 <Route path="/shop/women" element={<Women/>}/>
                 <Route path="/shop/home-living" element={<HomeLives/>}/>
                 <Route path="/shop/cart" element={<Cart/>}/>
            </Route>
      </Routes>
    </div>
  );
}

export default Router;
