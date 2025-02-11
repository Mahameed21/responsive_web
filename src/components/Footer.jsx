import React from 'react'
import {FaLinkedinIn, FaFacebookSquare, FaInstagram, FaGithubSquare, FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-black mx-auto max-w-[1240px] py-6 grid lg:grid-cols-3 px-4 '>
                <div>
                <h1 className='w-full text-3xl font-bold text-green-500 py-2'>Responsive web</h1>
                <p className='text-gray-400 '>Data Analytics is the process of examining, transforming, and interpreting raw data to extract useful insights, support decision-making, and optimize performance. It involves various techniques such as statistics, machine learning,
                     and data visualization to uncover patterns, trends, and relationships in data.</p>
                     <div className='flex text-white justify-between md:w-[75%] my-6 '>
                        <FaLinkedinIn size={30} className='hover:cursor-pointer hover:scale-125'/>
                        <FaFacebookSquare size={30} className='hover:cursor-pointer hover:scale-125'/>
                        <FaInstagram size={30} className='hover:cursor-pointer hover:scale-125'/>
                        <FaGithubSquare size={30} className='hover:cursor-pointer hover:scale-125'/>
                        <FaTwitterSquare size={30} className='hover:cursor-pointer hover:scale-125'/>
                     </div>
                </div>
                <div className='lg:col-span-2 justify-between flex max-w-[1240] md:px-0 md:justify-around gap-2 md:mt-8'>

                    <div>
                        <h1 className='font-bold text-gray-500 text-[12px] md:text-xl'>Solutions</h1>
                        <ul className='py-2 text-[10px] md:text-sm'>
                            <li className=' text-gray-300 py-1'>Analytics</li>
                            <li className=' text-gray-300 py-1'>Commerce</li>
                            <li className=' text-gray-300 py-1'>Marketing</li>
                            <li className=' text-gray-300 py-1'>Insights</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold text-gray-500 text-[12px] md:text-xl'>Support</h1>
                        <ul className='py-2 text-[10px] md:text-sm'>
                            <li className=' text-gray-300 py-1'>Pricing</li>
                            <li className=' text-gray-300 py-1'>Documentation</li>
                            <li className=' text-gray-300 py-1'>Guides</li>
                            <li className=' text-gray-300 py-1'>API Stauts</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold text-gray-500 text-[12px] md:text-xl'>Company</h1>
                        <ul className='py-2 text-[10px] md:text-sm'>
                            <li className=' text-gray-300 py-1'>About</li>
                            <li className=' text-gray-300 py-1'>Jobs</li>
                            <li className=' text-gray-300 py-1'>blog</li>
                            <li className=' text-gray-300 py-1'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold text-gray-500 text-[12px] md:text-xl'>Legal</h1>
                        <ul className='py-2 text-[10px] md:text-sm'>
                            <li className=' text-gray-300 py-1'>Claim</li>
                            <li className=' text-gray-300 py-1'>Policy</li>
                            <li className=' text-gray-300 py-1'>Terms</li>
                        </ul>
                    </div>

                </div>
    </div>
  )
}

export default Footer