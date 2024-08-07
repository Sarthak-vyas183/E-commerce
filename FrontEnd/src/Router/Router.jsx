import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Men from "../components/Pages/Men";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
             <Route path="/shop">
                 <Route path="/shop/men" element={<Men/>}/>
            </Route>
      </Routes>
    </div>
  );
}

export default Router;
