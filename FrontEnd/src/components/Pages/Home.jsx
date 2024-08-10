import React, { useRef, useEffect } from 'react';
import '../../../public/Stylesheets/home.css';
import { gsap } from 'gsap';

function Home() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const scrollAmount = window.innerWidth; // Scroll by the viewport width
    const middleIndex = Math.floor(banner.children.length/2);
    const initialOffset = -middleIndex * scrollAmount;

    
    gsap.set(banner, { x: initialOffset });
  }, []);

  const scrollBanner = (direction) => {
    const banner = bannerRef.current;
    const scrollAmount = window.innerWidth; 
    const currentPosition = gsap.getProperty(banner, 'x');
    const maxScrollLeft = 0;
    const maxScrollRight = -(banner.scrollWidth - banner.clientWidth);

    
    let newPosition = direction === 'left' ? currentPosition + scrollAmount : currentPosition - scrollAmount;

    
    if (newPosition > maxScrollLeft) {
      newPosition = maxScrollLeft;
    } else if (newPosition < maxScrollRight) {
      newPosition = maxScrollRight;
    }

   
    gsap.to(banner, {
      x: newPosition,
      duration : 0.1,
    });

    gsap.from(banner, {
       scale : 0,
    });
  };

  return (
    <section id='home-main' className='relative top-[11vh] w-[100vw] min-h-[89vh] z-1 overflow-x-hidden'> 
      <div className='relative w-full h-[70vh]'>
        <div id='banner-02' ref={bannerRef} className='flex transition-transform duration-500 ease-in-out pt-2'>
          <img className='w-full h-full object-cover' src='https://richborn.s3.ap-south-1.amazonaws.com/banner2.jpg' alt='Discount Banner 1' />
          <img className='w-full h-full object-cover' src='https://richborn.s3.ap-south-1.amazonaws.com/banner%203%20part%20b.jpg' alt='Discount Banner 2' />
          <img className='w-full h-full object-cover' src='https://richborn.s3.ap-south-1.amazonaws.com/richborn-banner-bag.jpg' alt='Discount Banner 3' />
          <img className='w-full h-full object-cover' src='https://richborn.s3.ap-south-1.amazonaws.com/4th%20banner%20copy.jpg' alt='Discount Banner 4' />
        </div>
        <button 
          className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2'
          onClick={() => scrollBanner('left')}
        >
          &#8249;
        </button>
        <button 
          className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2'
          onClick={() => scrollBanner('right')}
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default Home;
