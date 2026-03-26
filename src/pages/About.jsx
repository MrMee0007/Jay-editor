import React from 'react'
import Aboutmain from '../components/Aboutmain'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Workex from '../components/Workex'
import EducationSection from '../components/EducationSection'
import AwardsSection from '../components/Awards'

const About = () => {
  return (
    <div>
        <AboutSection />
        {/* <AwardsSection /> */}
        <ServicesSection />
        <Workex />
    </div>
  )
}

export default About
