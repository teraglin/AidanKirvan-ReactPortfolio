import React from 'react'

//import page components
import Projects from '../components/Projects'
import About from '../components/About'

import { techIcons } from '../data/tech-icons'

export const MainPage = () => {
  // stack page components here
  return (
    <div>
      <div className="tech-container bg-white bg-opacity-80">

        {techIcons.map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.tech} className="tech-logo" />
        ))}

      </div>
      <Projects />
      <About />
    </div>
  )
}