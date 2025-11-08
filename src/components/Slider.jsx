import React, { useState } from 'react'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.webp'
import img4 from '../assets/images/img4.jpeg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpeg'
import img8 from '../assets/images/img8.jpg'
import {
    FaChevronDown,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa'


const Images = [
    {
        ImgSrc: img1,
    },
    {
        ImgSrc: img2,
    },
    {
        ImgSrc: img3,
    },
    {
        ImgSrc: img4,
    },
    {
        ImgSrc: img5,
    },
    {
        ImgSrc: img6,
    },
    {
        ImgSrc: img7,
    },
    {
        ImgSrc: img8,
    }
]

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStartX, setTouchStartX] = useState(null)
      const [isHovered, setIsHovered] = useState(false) // ✅ Add this

  
    const handleRightSide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length)
    }
    const handleLeftSide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex) {
                return prevIndex - 1
            }
            return Images.length - 1
        })
    }
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX)
    }
    const handleTouchEnd = (e) => {
        if (touchStartX === null) return // 🛡️ Guard clause: exit if no valid touch start


        const touchEndX = e.changedTouches[0].clientX
        const diff = touchStartX - touchEndX

        if (diff > 50) {
            handleRightSide() // swipe left → next
        } else if (diff < -50) {
            handleLeftSide() // swipe right → previous
        }

        setTouchStartX(null) // reset after swipe
    }
    const handleHover = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length)
}


    return (
        <div className='flex justify-center items-center h-screen mt-2 relative'>
            <div className='relative w-[400px]  bg-cover bg-center object-cover flex-shrink-0 h-[600px] md:w-[1000px] md:bg-[center_top] rounded-2xl
            overflow-hidden'
                style={{ boxShadow: '0 0 40px rgba(0,0,0,0.7)',
                       touchAction: 'pan-y'
                     
                }}
                  onMouseEnter={handleHover}
                  onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  
            >
                <div className='flex transition-transform duration-700 ease-in-out'
                
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                      
                    }}>
                    {
                        Images.map((item, index) => (
                            <div key={index}
                                className='w-[400px] h-[600px] md:w-[1000px] md:bg-[center_top]
                                bg-cover bg-center object-cover flex-shrink-0'
                                style={{
                                    backgroundImage: `url(${item.ImgSrc})`
                                }}>
                                <div className='flex justify-center m-2 p-2 absolute bottom-0 left-0 w-full pointer-events-none'>
                                    <button className='bg-gray-200 text-xl hover:bg-gray-300 transition text-black rounded-full p-4'>Stream Now</button>
                                    <p className=' text-white p-2 text-2xl gap-2'>Commedy. Winner of 13 Emmy Awards</p>
                                </div>

                            </div>
                        ))
                    }

                </div>
                <button className='absolute text-5xl top-1/2 right-20 -translate-y-1/2 
                cursor-pointer hover:scale-110 duration-500'
                    onClick={handleRightSide}>
                    {/* <FaChevronLeft/> */}
                    <FaChevronRight />
                </button>

                <button className='absolute text-5xl top-1/2 left-20 -translate-y-1/2 
                cursor-pointer hover:scale-110 duration-500'
                    onClick={handleLeftSide}>
                    <FaChevronLeft />
                    {/* <FaChevronRight/> */}
                </button>
            </div>
        </div>
    )
}

export default Slider

