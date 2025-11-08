import React from 'react'
import AppleIphone from '../assets/images/iphone.jpg'

const Header = () => {
  return (
    <section>
      <div className='bg-black text-center'>
        <h1 className='text-6xl text-white font-bold p-2'>iPhone17 Pro</h1>
        <p className='text-white text-3xl p-2'>All out Pro</p>
        <button className='bg-blue-800 text-xl text-white hover:bg-blue-600 rounded-lg p-5 mt-2 mb-1'>Learn more</button>
        <button className='text-white text-xl border hover:bg-blue-600 rounded-lg p-5  mt-2 m-4 mb-1'>Buy</button>
        <img
          src={AppleIphone} 
          alt="iPhone 17 Pro"
          className="w-full h-80 object-contain "
        />


      </div>
    </section>
  )
}

export default Header