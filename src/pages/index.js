import React from 'react'

import {
  Box
} from '@mui/material'

//import page components
import TechIcons from '../components/TechIcons'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export const MainPage = (props) => {
  const {mobileView} = props;
  // stack page components here
  return (
    <Box className="w-screen">
      <Box className="w-100 pl=20">
        <TechIcons id="techicons" mobileView={mobileView} />
        <Projects id="projects" mobileView={mobileView} />
        <About id="about" mobileView={mobileView} />
        <Contact id="contact" mobileView={mobileView} />
      </Box>
    </Box>
  )
}