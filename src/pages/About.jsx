import React from 'react'
import about from "../assets/about.webp"

const About = () => {


  return (
    <section className="pb-5 ">

      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row items-center px-2">
            <div className="md:w-4/5 p-8 md:p-12 lg:px-16">
              <h1 className="text-6xl font-bold mb-8"
                >
                <span className="text-blue-900">About</span>{" "}
                <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-gray-500 text-lg md:text-xl mb-6 leading-relaxed"
                >
                Empire Blue Pvt. Ltd. Established July 2025 Based on Chhindwara Madhya Pradesh is a pioneering company in the bottled water industry recognized as the world's first manufacturer of non-expiry bacteria free water bottles.
              </p>
              <p className=" text-gray-500 text-lg md:text-xl mb-6 leading-relaxed
                    "
                >
                Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.
              </p>
              <button className="rounded-[20px] bg-blue-900 px-4 py-2 text-white" data-aos="fade-up">Learn more <i className="fa-solid fa-arrow-right"></i></button>

            </div>
            <div className="md:w-1/2 w-full h-[600px] md:h-[450px] relative shadow-xl border-8 border-white rounded-[30px] flex items-center justify-center" >
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-[30px]"
                src={about}
                alt="logo"
              />
            </div>

          </div>


        </div>
      </div>

    </section>
  )
}

export default About