import React from 'react'

import { Box } from '@mui/material'

//import page components
import TechIcons from '../components/TechIcons'
import Projects from '../components/Projects'
import About from '../components/About'

export const MainPage = () => {
  // stack page components here
  return (
    <Box className="w-screen">
      <TechIcons />
      <Projects />
      <About />
    </Box>
  )
}