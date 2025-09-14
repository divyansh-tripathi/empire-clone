import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About";
import Hero from "./pages/Hero";

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);


  return (
    <>
      <div className="bg-[#D7E0E7] h-screen overflow-auto ">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<> <Hero /><About /> </>} />
            <Route path="/home" element={<> <Hero /><About /> </>} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
