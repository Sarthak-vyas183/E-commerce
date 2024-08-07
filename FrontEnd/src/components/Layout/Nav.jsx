import React from 'react'
import Logo from "../../../public/images/Logo.png"
import search from "../../../public/images/search-line.png"
import { Link } from 'react-router-dom'
import '../../App.css'

function Nav() {
  return (
    <section id='Nav' className='w-[100vw] bg-[#FFFFFF] shadow h-[11vh] flex'> 

      <div id='NavLeft' className="left w-[40%] h-full flex"> 

        <span id='logo' className="h-full w-[20%] flex justify-evenly items-center">
          <img className='w-28 h-10' src={Logo} alt="Logo" />
          <p className='hidden'><i className="ri-menu-2-line"></i><br /></p>
          <p className='hidden'>Zyntra</p>
        </span>

        <span id='NavLinks' className="w-[80%] text-[14px] font-[700] pl-4 h-full flex justify-start items-end gap-10 navigation">
          <li><Link to="shop/men">MEN</Link> <p></p></li>
          <li><Link to="shop/women">WOMEN</Link><p></p></li>
          <li><Link to="shop/kids">KIDS</Link><p></p></li>
          <li><Link to="shop/home-living">HOME&Living</Link><p></p></li>
          <li><Link to="personal-care">Beauty</Link><p></p></li>
        </span>
      </div>

      <div id='NavRight' className="right w-[60%] h-full flex justify-end items-center">
        <div id='search' className="w-[60%] h-full flex items-center justify-center">
          <span className='w-[10%] h-[50%] rounded-l-sm flex justify-center bg-[#F5F5F6] items-center'>
            <i className="ri-search-line"></i>
          </span>
          <input type="text" placeholder='search for product, brands, and more' className='p-2 h-[50%] w-[85%] bg-[#F5F5F6] outline-none rounded-r-sm' />
        </div>

        <div id='userCredentail' className="w-[25%] h-full userCredentail flex justify-evenly items-center">
          <p id='profileIcon'><i className="ri-user-line text-2xl"></i><br /><span>Profile</span></p>
          <p id="searchIcon" className='hidden'><img src={search} alt="Search" /><br /></p>
          <p><i className="ri-heart-line text-2xl"></i><br /><span>wishlist</span></p>
          <p><i className="ri-shopping-bag-4-fill text-2xl"></i><br /><span>Bag</span></p>
        </div>
      </div> 

    </section>
  )
}

export default Nav
