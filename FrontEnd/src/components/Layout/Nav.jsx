/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Logo from "../../../public/images/Logo.png";
import search from "../../../public/images/search-line.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "../../App.css";

function Nav() {
  const sidebarRef = useRef(null);

  const openSidebar = () => {
    gsap.to(sidebarRef.current, { x: 0, duration: 0.5, ease: "power3.inOut" });
  };

  const closeSidebar = () => {
    gsap.to(sidebarRef.current, { x: "-100%", duration: 0.5, ease: "power3.inOut" });
  };

  return (
    <>
      <section id="Nav" className="w-[100vw] bg-[#FFFFFF] shadow h-[11vh] flex fixed z-10">
        <div id="NavLeft" className="left w-[40%] h-full flex">
          <span
            id="logo"
            className="h-full w-[20%] flex justify-evenly items-center"
          >
            <Link to="/"> <img  className="w-28 h-10" src={Logo} alt="Logo" /></Link>
            <p className="hidden" onClick={openSidebar}>
              <i className="ri-menu-2-line"></i>
            </p>
            <p className="hidden">Myntra</p>
          </span>

          <span
            id="NavLinks"
            className="w-[80%] text-[14px] font-[700] pl-4 h-full flex justify-start items-end gap-10 navigation"
          >
            <li>
              <Link to="shop/men">MEN</Link>
              <p></p>
            </li>
            <li>
              <Link to="shop/women">WOMEN</Link>
              <p></p>
            </li>
            <li>
              <Link to="shop/kids">KIDS</Link>
              <p></p>
            </li>
            <li>
              <Link to="shop/home-living">HOME&LIVING</Link>
              <p></p>
            </li>
            <li>
              <Link to="personal-care">BEAUTY</Link>
              <p></p>
            </li>
          </span>
        </div>

        <div
          id="NavRight"
          className="right w-[60%] h-full flex justify-end items-center"
        >
          <div
            id="search"
            className="w-[60%] h-full flex items-center justify-center"
          >
            <span className="w-[10%] h-[50%] rounded-l-sm flex justify-center bg-[#F5F5F6] items-center">
              <i className="ri-search-line"></i>
            </span>
            <input
              type="text"
              placeholder="search for product, brands, and more"
              className="p-2 h-[50%] w-[85%] bg-[#F5F5F6] outline-none rounded-r-sm"
            />
          </div>

          <div
            id="userCredentail"
            className="w-[25%] h-full userCredentail flex justify-evenly items-center"
          >
            <p id="profileIcon">
              <i className="ri-user-line text-2xl"></i>
              <br />
              <span>Profile</span>
            </p>
            <p id="searchIcon" className="hidden">
              <img src={search} alt="Search" />
              <br />
            </p>
            <p>
              <i className="ri-heart-line text-2xl"></i>
              <br />
              <span>wishlist</span>
            </p>
            <p>
              <i className="ri-shopping-bag-4-fill text-2xl"></i>
              <br />
              <Link to="/shop/cart">Bag</Link>
            </p>
          </div>
        </div>
      </section>

     
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 w-[75%] h-full bg-white z-20 shadow-lg -translate-x-full"
      >
        <div className="p-4 flex justify-between items-center border-b">
          <img src={Logo} alt="Logo" className="w-24 h-10" />
          <button onClick={closeSidebar}>
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <ul className="p-4">
          <li className="py-2">
            <Link to="/" onClick={closeSidebar}>Home</Link>
          </li>
          <li className="py-2">
            <Link to="shop/men" onClick={closeSidebar}>MEN</Link>
          </li>
          <li className="py-2">
            <Link to="shop/women" onClick={closeSidebar}>WOMEN</Link>
          </li>
          <li className="py-2">
            <Link to="shop/kids" onClick={closeSidebar}>KIDS</Link>
          </li>
          <li className="py-2">
            <Link to="shop/home-living" onClick={closeSidebar}>HOME & LIVING</Link>
          </li>
          <li className="py-2">
            <Link to="personal-care" onClick={closeSidebar}>BEAUTY</Link>
          </li>
        </ul>
      </div> 
    </>
  );
}

export default Nav;
