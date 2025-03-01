/* eslint-disable no-unused-vars */
import React from 'react';

function Footer() {
  return (
    <div className='w-full h-auto bg-[#FAFBFC] flex flex-col justify-between p-5 md:p-10'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='mb-5 md:mb-0'>
          <h3 className='font-bold'>ONLINE SHOPPING</h3>
          <ul className='list-disc pl-5'>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </div>
        <div className='mb-5 md:mb-0'>
          <h3 className='font-bold'>CUSTOMER POLICIES</h3>
          <ul className='list-disc pl-5'>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Officer</li>
          </ul>
        </div>
        <div className='mb-5 md:mb-0'>
          <h3 className='font-bold'>USEFUL LINKS</h3>
          <ul className='list-disc pl-5'>
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
            <li>Cleartrip</li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold'>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className='flex flex-col'>
            <button className='bg-green-500 text-white p-2 rounded mb-2'>GET IT ON Google Play</button>
            <button className='bg-black text-white p-2 rounded'>Download on the App Store</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center mt-10'>
        <div className='flex flex-col mb-5 md:mb-0'>
          <span className='font-bold'>100% ORIGINAL</span>
          <span>guarantee for all products at myntra.com</span>
        </div>
        <div className='flex flex-col mb-5 md:mb-0'>
          <span className='font-bold'>Return within 14 days</span>
          <span>of receiving your order</span>
        </div>
      </div>

      <div className='flex justify-center mt-5'>
        <div className='flex space-x-4'>
          <a href='#' className='text-gray-600'>Facebook</a>
          <a href='#' className='text-gray-600'>Twitter</a>
          <a href='#' className='text-gray-600'>YouTube</a>
          <a href='#' className='text-gray-600'>Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;