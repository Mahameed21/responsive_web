import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu  } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = ()=>{
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-gray-300'>
        <h1 className='w-full text-3xl font-bold text-green-500 '>Responsive web.</h1>
        <ul className='hidden md:flex font-bold text-[15px] '>
          <li className='p-4 hover:text-green-400 hover:cursor-pointer'>Home</li>
          <li className='p-4 hover:text-green-400 hover:cursor-pointer'>Company</li>
          <li className='p-4 hover:text-green-400 hover:cursor-pointer'>Resources</li>
          <li className='p-4 hover:text-green-400 hover:cursor-pointer'>About</li>
          <li className='p-4 hover:text-green-400 hover:cursor-pointer'>Contact</li>
        </ul>
        <div onClick={handleNav} className='md:hidden block'>
          {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
          
        </div>
        <div className={nav ? 'top-0 left-0 fixed border-r border-r-gray-600 w-[60%] ease-in-out transition-all duration-500 bg-gray-400 h-full' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-xl font-bold text-green-700 md:text-4xl sm:text-3xl p-4'>Responsive web.</h1>
        <ul className='uppercase p-4 font-bold'>
          <li className='p-4 border-b-1 border-gray-500 hover:text-green-400 hover:cursor-pointer'>Home</li>
          <li className='p-4 border-b-1 border-gray-500 hover:text-green-400 hover:cursor-pointer'>Company</li>
          <li className='p-4 border-b-1 border-gray-500 hover:text-green-400 hover:cursor-pointer'>Resources</li>
          <li className='p-4 border-b-1 border-gray-500 hover:text-green-400 hover:cursor-pointer'>About</li>
          <li className='p-4 hover:text-green-400 hover:cursor-pointer'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar