import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[800px] h-screen mx-auto w-full text-center justify-center flex flex-col">
        <p className="text-green-400 font-bold p-2 uppercase">
          Growing Data with Analytics
        </p>
        <h1 className="text-white md:text-7xl sm:text-4xl text-3xl md:py-6 font-bold">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-white">
            Fast, flexible financing for
          </p>
          <ReactTyped
          className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-white"
            strings={[
              "BTB",
              "BTC",
              "SASS",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:3xl text-xl font-bold mt-2 text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, SASS platforms</p>
            <button className="bg-green-400 text-black font-bold items-center justify-center w-[150px] rounded px-1 py-2 mx-auto my-6 hover:cursor-pointer">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
