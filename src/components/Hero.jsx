import React from 'react'
import IphoneAir from '../assets/images/iphoneAir.jpg'

function Hero() {
    return (
        <section>
            <div className='text-center mt-10'>
            <h2 className='text-5xl font-semibold '>iPhone Air</h2>
            <p className='text-2xl mt-2'>The thinnest iPhone ever.</p>
            <p className='text-2xl mt-2'>With the power of pro inside</p>
            <button className='bg-blue-800  text-white hover:bg-blue-600 rounded-full p-3 mt-4 px-6'>Learn more</button>
            <button className='text-blue-400 border border-blue-400 rounded-full p-3  hover:bg-blue-600 mt-4 m-3 px-6 '>Buy</button>
        <img 
        src={IphoneAir}
        alt="IphoneAir" className='w-full ml-60' />
        </div>
        
        </section>
    )
}

export default Hero