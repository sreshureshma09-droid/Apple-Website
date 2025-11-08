import React from 'react'
import {
    FaApple
} from "react-icons/fa"
import Watch from '../assets/images/watch.jpeg' 
import IpadPro from '../assets/images/ipadpro.webp'
import Airpods from '../assets/images/Airpods.jpeg'
import AppleWatch from '../assets/images/applewatch.webp'
import MacAir from '../assets/images/MacBookAir.jpeg'
import Iphone from '../assets/images/macphone.jpg'
const Product = () => {
    return (
        <section>
            <div className='p-2 m-1 grid grid-cols-1 md:grid-cols-2'>
                {/* watch  */}
                <div className='bg-gray-200 p-2 w-50 h-50 text-center'>
                    <h2 className='flex items-center gap-2 justify-center text-2xl font-bold'><FaApple className='text-2xl' />WATCH SERIES 11</h2>
                    <p className='text-l mt-2'>The Ultimate watch for a healthy life.</p>
                    <button className='bg-blue-800  text-white hover:bg-blue-600 rounded-full p-3 mt-4 px-6'>Learn more</button>
                    <button className='text-blue-400 border border-blue-400 rounded-full p-3  hover:bg-blue-600 mt-4 m-3 px-6 '>Buy</button>
                <img src={Watch} alt="" className='block object-cover w-96 h-60 mx-auto'/>
                </div>
                {/* ipad pro */}

                <div className='bg-black text-white p-2 w-50 h-50 ml-2 text-center'>
                    <h2 className='text-2xl font-bold'>iPad Pro</h2>
                    <p className='text-l mt-2'>Advanced AI performance and game-changing Capabilities</p>
                    <button className='bg-blue-800  text-white hover:bg-blue-600 rounded-full p-3 mt-4 px-6'>Learn more</button>
                    <button className='text-blue-400 border border-blue-400 rounded-full p-3  hover:bg-blue-600 mt-4 m-3 px-6 '>Buy</button>
                    <img src={IpadPro} alt="" className='w-96 h-60 mx-auto'/>
                </div>

                {/* Airpods Pro 3 */}

                <div className='bg-gray-200 p-2 w-50 h-50 text-center mt-4'>
                    <h2 className='text-2xl font-bold'>AirPods Pro 3</h2>
                    <p className='text-l mt-2'>The world's best in-ear Active Noise Cancellation.</p>
                    <button className='bg-blue-800  text-white hover:bg-blue-600 rounded-full p-3 mt-4 px-6'>Learn more</button>
                    <button className='text-blue-400 border border-blue-400 rounded-full p-3  hover:bg-blue-600 mt-4 m-3 px-6 '>Buy</button>
                    <img src={Airpods}alt="" className='block object-cover w-96 h-60 mx-auto' />
                </div>

                {/* Watch */}

                <div className='bg-gray-200 p-2 w-50 h-50 text-center mt-4 ml-2'>
                    <h2 className='flex items-center gap-2 justify-center text-2xl font-bold'><FaApple className='text-2xl' />WATCH SE 3</h2>
                    <p className='text-l mt-2'>Walk it. Talk it. Track it. Love it</p>
                    <button className='bg-blue-800  text-white hover:bg-blue-600 rounded-full p-3 mt-4 px-6'>Learn more</button>
                    <button className='text-blue-400 border border-blue-400 rounded-full p-3  hover:bg-blue-600 mt-4 m-3 px-6 '>Buy</button>
                    <img src={AppleWatch} alt=""  className='block object-cover w-96 h-60 mx-auto'/>


                </div>

                {/* Macbook Air */}
                <div className='bg-blue-50 p-2 w-50 h-50 text-center mt-4'>
                    <h2 className='text-2xl font-bold'>MacBook Air</h2>
                    <p className='text-l mt-2'>Sky blue Colour.</p>
                    <p className='text-l mt-2'>Sky high performance with M4</p>
                    <button className='bg-blue-800  text-white hover:bg-blue-600 rounded-full p-3 mt-4 px-6'>Learn more</button>
                    <button className='text-blue-400 border border-blue-400 rounded-full p-3  hover:bg-blue-600 mt-4 m-3 px-6 '>Buy</button>
                    <img src={MacAir} alt="" className='object-cover w-96 h-60 mx-auto' />
                </div>

                {/* Trade in */}

                <div className='bg-gray-200 p-2 w-50 h-50 text-center mt-4 ml-2'>
                    <h2 className='flex items-center justify-center gap-2 text-2xl font-bold'><FaApple className='text-2xl' />Trade In</h2>
                    <p className='text-l mt-2'>Upgrade and save.</p>
                    <p className='text-l mt-2'>It's that easy.</p>
                    <button className='text-white border bg-blue-800 border-blue-400 rounded-full p-4 hover:bg-blue-600 mt-2 mb-2' >Get your estimate</button>
                    <img src={Iphone} alt="" className='object-cover w-96 h-60 mx-auto' />
                </div>


            </div>
        </section>
    )
}

export default Product