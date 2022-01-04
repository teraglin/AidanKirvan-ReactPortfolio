import React from 'react'

//import page components
import TechIcons from '../components/TechIcons'
import Projects from '../components/Projects'
import About from '../components/About'

export const MainPage = () => {
  // stack page components here
  return (
    <div>
      <TechIcons />
      <Projects />
      <About />
    </div>
  )
}