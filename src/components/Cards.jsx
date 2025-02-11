import React from 'react'
import { CardsData } from '../constant/constant'

const Cards = () => {
  return (
    <div className='w-full py-20 md:px-4 px:0 bg-gray-200 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 bg-gray '>

            {
                CardsData?.map((data, index)=>(
                    <div key={data.id} className='md:w-[250px] w-full shadow-xl flex flex-col rounded-md mx-auto bg-white
                    justify-center items-center p-4 hover:scale-110 duration-300 hover:bg-white md:my-0 my:5'>
                        <img src={data.img} alt="/" className='w-[40px] mx-auto py-4'/>
                        <h2 className='text-center font-bold text-2xl text-green-400 py-4'>{data.user}</h2>
                        <p className='my-1 font-bold text-2xl'>${data.price}</p>
                        <div className='text-center font-medium  py-1 text-gray-400'>
                            <p className='my-1 '>{data.storage} GB Storage</p>
                            <p className='my-1'>{data.userGranted} Granted User</p>
                            <p className='my-1'>Send up to {data.sendData} GB</p>
                        </div>
                        <button className='bg-green-400 w-[200px] px-1 py-2 rounded-full font-bold hover:cursor-pointer'>{data.buttonName}</button>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Cards