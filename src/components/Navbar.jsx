import React from 'react'
import { useState } from 'react'
import {
  FaApple, FaSearch, FaShoppingBag, FaBars, FaTimes
} from "react-icons/fa"


const dropdownContent = {
  Store: [
    {
      title: "Shop the Latest",
      links: ["Mac", "iPad", "iPhone", "Apple Watch", "AirPods", "Accessories"],
    },
    {
      title: "Quick Links",
      links: ["Find a Store", "Order Status", "Financing", "Apple Trade In"],
    },
  ],
  Mac: [
    {
      title: "Explore Mac",
      links: ["MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio"],
    },
    {
      title: "Mac Essentials",
      links: ["macOS", "Accessories", "Compare Mac", "AppleCare+"],
    },
  ],
  ipad: [
    {
      title: "Explore iPad",
      links: ["iPad Pro", "iPad Air", "iPad", "iPad mini"],
    },
    {
      title: "iPad Essentials",
      links: ["iPadOS", "Accessories", "Compare iPad", "AppleCare+"],
    },
  ],
  iphone: [
    {
      title: "Explore iPhone",
      links: ["iPhone 17 Pro", "iPhone 17", "iPhone SE", "Compare iPhone"],
    },
    {
      title: "iPhone Essentials",
      links: ["iOS", "Accessories", "AppleCare+", "Trade In"],
    },
  ],
  Watch: [
    {
      title: "Explore Watch",
      links: ["Apple Watch Series 9", "Apple Watch Ultra", "Apple Watch SE"],
    },
    {
      title: "Watch Essentials",
      links: ["watchOS", "Bands", "Compare Watch", "AppleCare+"],
    },
  ],
  Airpods: [
    {
      title: "Explore AirPods",
      links: ["AirPods Pro", "AirPods", "AirPods Max"],
    },
    {
      title: "AirPods Essentials",
      links: ["Accessories", "Compare AirPods", "AppleCare+"],
    },
  ],
  TVHome: [
    {
      title: "Explore TV  Home",
      links: ["Apple TV 4K", "HomePod", "Apple TV App"],
    },
    {
      title: "TV & Home Essentials",
      links: ["Accessories", "AppleCare+"],
    },
  ],
  Entertainment: [
    {
      title: "Explore Entertainment",
      links: ["Apple Music", "Apple TV+", "Apple Arcade", "Apple Podcasts"],
    },
    {
      title: "Entertainment Services",
      links: ["Apple One", "Gift Cards", "Support"],
    },
  ],
  Accessories: [
    {
      title: "Explore Accessories",
      links: ["Mac Accessories", "iPad Accessories", "iPhone Accessories"],
    },
    {
      title: "Featured",
      links: ["MagSafe", "Keyboards", "Cases", "Adapters"],
    },
  ],
  Support: [
    {
      title: "Get Support",
      links: ["Product Help", "Service & Repair", "AppleCare+", "Contact Support"],
    },
    {
      title: "Helpful Topics",
      links: ["Manage Apple ID", "Billing & Subscriptions", "Find a Store"],
    },
  ],
}
const NavLinks = Object.keys(dropdownContent).map((key) => ({ name: key }))



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null)
  return (
    <nav className=' bg-black text-blue-50 p-2 justify-center'>

      <div className='flex items-center justify-between md:justify-around gap-1 p-2'>
        <FaApple className='text-2xl cursor-pointer' />
        <ul className='hidden md:flex gap-4'>


          {NavLinks.map((link) => (
            <li
              key={link.name}
              className='relative'
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a href="#" className="hover:text-blue-700">{link.name}</a>

              {hoveredLink === link.name && dropdownContent[link.name] && (
                <div className="absolute top-full left-0 mt-2 bg-black text-white p-8 rounded-lg transition-all shadow-lg w-[1000px] grid grid-cols-2 z-50">
                  {dropdownContent[link.name].map((column, colIndex) => (
                    <div key={colIndex}>
                      <h4 className="font-bold mb-3">{column.title}</h4>
                      <ul className="space-y-2 text-sm">
                        {column.links.map((item, i) => (
                          <li key={i}>
                            <a href="#" className="hover:text-blue-400">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}




</ul>
      <div className='flex gap-4 items-center'>
        <FaSearch className='cursor-pointer' />
        <FaShoppingBag className='cursor-pointer' />
        {/* <FaBars className='text-xl cursor-pointer md:hidden'/> */}
        {menuOpen ? (
          <FaTimes
            className="text-xl cursor-pointer md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="cursor-pointer md:hidden"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
    </div>
      {
    menuOpen && (
      <ul className='flex flex-col mt-6 p-6 text-white text-4xl gap-4'>
        {NavLinks.map((link, index) => (
          <li>
            <a href="">{link.name}</a>
          </li>
        ))}

      </ul>
    )
  }
  <div className='bg-gray-900 p-2 text-center'>
    <h3>Get ₹5000 instant cashback on iPhone 17 Pro with eligible cards. Plus up to 6 months of No Cost EMI.‡ Buy

      iPhone 17 Pro
    </h3>
  </div>

      
    </nav >
    
  )
}

export default Navbar