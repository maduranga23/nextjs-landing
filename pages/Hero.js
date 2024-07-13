import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#6cd9f9] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            Your Ultimate Solution for Seamless Task Management
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
            A cutting-edge mobile application designed to streamline your daily tasks and boost productivity.
            </p>
            <button className="py-3 px-5  btn btn-sm lg:btn-lg bg-[#ea2b21] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</button>
          </div>
          <img src="/assets/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
