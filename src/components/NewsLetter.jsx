import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full bg-gray-950  text-white py-16 ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3  justify-center px-4">
        
        <div className="lg:col-span-2 my-4 ">
          <h1 className="md:4xl sm:3xl text-xl text-white font-bold py-2">
            Want tips and tricks to optimize your flow?
          </h1>
          <p className="md:2xl text-xl text-gray-500 font-bold ">
            Sign up for your newsletter and stay up to date
          </p>
        </div>

        <div>
          <div className="mt-4 flex sm:flex-row items-center justify-between w-full">
            <input
              type="text"
              placeholder="Enter email"
              className="w-full p-2 text-black border-1 border-white bg-white mx-2"
            />
            <button className="bg-green-400 rounded-md px-1 py-2 
            w-[200px] my-4 text-black font-medium hover:cursor-pointer">
              Notify Me
            </button>
          </div>
          <p className="md:4xl sm:3xl text-xl text-white font-bold py-2">
            We care about the protection of your data. Read our <span className="text-green-400">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
