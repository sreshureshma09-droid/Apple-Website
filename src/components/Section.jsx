import React from 'react'
import MacBook from '../assets/images/macbook-pro.png'

const Section = () => {
  return (
    <section className='bg-black text-white'>
    <div className='text-center '>
        <h2 className='text-4xl text-bold p-2'>MacBook Pro 14"</h2>
        <p className='mt-2 text-bold text-xl'>SuperCharged by M5</p>
         <button className='bg-blue-800  text-white hover:bg-blue-600 rounded-full p-3 mt-4 px-6'>Learn more</button>
            <button className='text-blue-400 border border-blue-400 rounded-full p-3  hover:bg-blue-600 mt-4 m-3 px-6 '>Buy</button>
   <img src={MacBook} alt="" className='items-center mx-auto bg-cover bg-center'/>
    </div>
    </section>
  )
}

export default Section