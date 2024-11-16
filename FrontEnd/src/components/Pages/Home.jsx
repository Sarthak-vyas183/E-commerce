// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from "react";
import "../../../public/Stylesheets/home.css";
import CategoryBanner from "../../../public/productImg/CategoryBanner.webp";
import axios from "axios";
import { gsap } from "gsap";

function Home() {
  const bannerRef = useRef(null);
  const [ProductLink, setProductLink] = useState([]);

  // Function to fetch products
  const getAllCategoryProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/")
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

  // Initial GSAP animation setup for the banner
  useEffect(() => {
    const banner = bannerRef.current;
    const scrollAmount = window.innerWidth; // Scroll by the viewport width
    const middleIndex = Math.floor(banner.children.length / 2);
    const initialOffset = -middleIndex * scrollAmount;

    gsap.set(banner, { x: initialOffset });
  }, []);

  // Function to scroll the banner left or right
  const scrollBanner = (direction) => {
    const banner = bannerRef.current;
    const scrollAmount = window.innerWidth;
    const currentPosition = gsap.getProperty(banner, "x");
    const maxScrollLeft = 0;
    const maxScrollRight = -(banner.scrollWidth - banner.clientWidth);

    let newPosition =
      direction === "left"
        ? currentPosition + scrollAmount
        : currentPosition - scrollAmount;

    if (newPosition > maxScrollLeft) {
      newPosition = maxScrollLeft;
    } else if (newPosition < maxScrollRight) {
      newPosition = maxScrollRight;
    }

    gsap.to(banner, {
      x: newPosition,
      duration: 0.1,
    });

    gsap.from(banner, {
      scale: 0,
    });
  };

  return (
    <section
      id="home-main"
      className="relative top-[11vh] w-full min-h-[89vh] z-1 overflow-x-hidden"
    >
      {/* Banner Section */}
      <div className="relative w-full h-[70vh] max-sm:h-auto">
        <div
          id="banner-02"
          ref={bannerRef}
          className="flex transition-transform duration-500 ease-in-out pt-2"
        >
          <img
            className="w-full h-full object-cover"
            src="https://richborn.s3.ap-south-1.amazonaws.com/banner2.jpg"
            alt="Discount Banner 1"
          />
          <img
            className="w-full h-full object-cover"
            src="https://richborn.s3.ap-south-1.amazonaws.com/banner%203%20part%20b.jpg"
            alt="Discount Banner 2"
          />
          <img
            className="w-full h-full object-cover"
            src="https://richborn.s3.ap-south-1.amazonaws.com/richborn-banner-bag.jpg"
            alt="Discount Banner 3"
          />
          <img
            className="w-full h-full object-cover"
            src="https://richborn.s3.ap-south-1.amazonaws.com/4th%20banner%20copy.jpg"
            alt="Discount Banner 4"
          />
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 max-sm:p-[2px]"
          onClick={() => scrollBanner("left")}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 max-sm:p-[2px]"
          onClick={() => scrollBanner("right")}
        >
          &#8250;
        </button>
      </div>

      {/* Product Section */}
      <div className="w-full min-h-[100vh] bg-[#EEE2CB]">
        <img src={CategoryBanner} alt="Category Banner" className="w-full" />
        <div className="boxes flex flex-wrap justify-center md:justify-evenly">
          {ProductLink.map((product, index) => (
            <span
              key={index}
              className="w-[150px] h-[276px] bg-white rounded-md p-2 m-2 shadow-md flex flex-col items-center"
            >
              <img
                className="w-full h-[200px] object-contain"
                src={product.image}
                alt={product.title}
              />
              <p className="text-center text-sm font-medium mt-2">
                {product.category}
              </p>
              <p>{Math.floor(Math.random() * 70) + '% off'}</p>
            </span>
          ))}
        </div>
      </div>

      {/* Promotion Section */}
      <div className="w-full h-auto">
        <img
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/14/0221b3c1-8b25-4e0d-8f2b-d16e24ea5a651731585627151-App-Install-Banner.jpg"
          alt=""
          className="w-full"
        />
      </div>
    </section>
  );
}

export default Home;