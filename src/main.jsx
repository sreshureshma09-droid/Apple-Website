import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import Product from './components/Product.jsx'
import Slider from './components/Slider.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Header/>
    <Hero/>
    <Section/>
    <Product/>
  <Slider/>
  <Footer/>
  </StrictMode>,
)
