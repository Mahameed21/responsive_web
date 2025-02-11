import React from 'react'
import Laptop from '../assets/Laptop.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
            <img src={Laptop} alt="/" className='w-[200px] h-[200px] md:h-[300px] md:w-[300px] mx-auto my-4'  />
            <div className='flex flex-col justify-center'>
                <p className='text-green-400 font-bold md:text-2xl text-1xl py-2'>DATA ANALYTICS DASHBOARD</p>
                <h1 className=' md:text-4xl sm:text-3xl text-1xl text-black py-1 font-bold'>Manage data analytics centrally</h1>
                <p className='text-gray-500 '>Data Analytics is the process of examining, transforming, and interpreting raw data to extract useful insights, support decision-making, and optimize performance. It involves various techniques such as statistics, machine learning,
                     and data visualization to uncover patterns, trends, and relationships in data.</p>
                     <button className="bg-black text-green-400 font-bold items-center justify-center 
                     w-[150px] rounded px-1 py-2 mx-auto md:mx-0 my-6 hover:cursor-pointer">Get Started</button>

            </div>

        </div>

    </div>
  )
}

export default Analytics