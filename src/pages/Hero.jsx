import React from 'react'

import can from "../assets/can1.webp"
import newtro from "../assets/image.webp"

const Hero = () => {
  return (

    <section >
      <div className="max-w-6xl mx-auto relative p-4 pt-[25px] " data-aos="fade-up">

        <div className=" rounded-[20px] sm:rounded-[40px] relative overflow-hidden shadow-[2px_3px_40px_8px_rgba(0,84,231,0.18),-1px_-1px_6px_0_rgba(0,84,231,0.06)] mt-1 sm:mt-3 lg:mt-4 ml-0 ">
          <div className="flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-16 lg:pb-24 text-center lg:text-left bg-[#E4E9ED]">
            <div className="left w-1/2 mx-7">
              <img src={can} alt="" />

            </div>
            <div className="right mx-7 " >
              <div className="flex justify-center lg:justify-start mb-3 sm:mb-2 lg:mb-2">
                <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] h-[60px] sm:h-[70px] lg:h-[90px]">
                  <img src={newtro} alt="logo" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-openSans font-bold mb-2 sm:mb-3 lg:mb-4 ">
                <span className="mr-2">World's</span>
                <span className="bg-blue-900 text-transparent bg-clip-text font-openSans mr-2">First Non-Expiry</span>
                <span>Water</span>
              </h1>

              <p className="font-openSans text-gray-500 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 max-w-lg mx-auto leading-relaxed">
                Empire Blue Pvt. Ltd. We prioritize health, innovation, and sustainability we are committed to seating new industry standards and providing a safe, reliable and beneficial hydration solution for people worldwide.
              </p>
              <div className=" flex justify-center">
                <button className=" rounded-[20px] bg-blue-900 px-3 py-1 text-white shadow-[2px_3px_40px_8px_rgba(0,84,231,0.18),-1px_-1px_6px_0_rgba(0,84,231,0.06)] ">Contact Us <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <svg className="w-full h-[120px] sm:h-[200px] lg:h-[220px] mb-[-100px] -translate-y-[90%]" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0" stroke="#fff" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0  L1440,500 L0,500 Z" fill="#D7E0E7" filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"></path>
      </svg>


    </section>

  )
}

export default Hero