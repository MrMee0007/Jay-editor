import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import HireMe from './components/HireMe'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="pt-5">
    <Routes>
      <Route path="/" element={<Home />} />     
      <Route path="/about" element={<About />} />
      <Route path='/hireme' element={<HireMe />} />
      <Route path='/contact' element={<ContactSection />} />
    </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
