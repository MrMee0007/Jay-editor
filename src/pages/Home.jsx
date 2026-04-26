import React from 'react'
import AboutSection from '../components/AboutSection'
import HeroSection from '../components/HeroSection'
import ProfilePreview from '../components/ProfilePreview'
import ServicesSection from '../components/ServicesSection'
import Experience from '../components/Experience'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <ProfilePreview />
        <ServicesSection />
        <Experience />
        <ContactSection />
    </div>
  )
}

export default Home
