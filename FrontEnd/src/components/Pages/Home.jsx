import React, { useEffect } from 'react'
import { useRef } from "react";
import "../../../public/Stylesheets/home.css"
import { gsap } from "gsap"; 

function Home() { 
  const discountRef = useRef(null);

   useEffect(()=> {
        gsap.from(discountRef.current , {
           opacity : 0,
           scale : 0,
           duration : 0.8,
           
        })
   },[])

  return (
    <section ref={discountRef} id='home-main'  className='relative top-[11vh] w-[100vw] min-h-[89vh]  z-1 overflow-x-hidden '>
         <div className='w-full h-auto'>
          <img src="../../../TempImg/discount.png" alt="" />
         </div>

         <div id='banner-02' className='flex justify-center'>
           <img className='w-full' src="../../../TempImg/discountBanner.png" alt="" />
         </div> 

         <div></div>
         <div></div>
    </section>
  )
}

export default Home
