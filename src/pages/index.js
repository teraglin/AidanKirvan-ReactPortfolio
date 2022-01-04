import React from 'react'

import {
  Box
} from '@mui/material'

import { StaticMenu } from '../components/StaticMenu'

//import page components
import TechIcons from '../components/TechIcons'
import Projects from '../components/Projects'
import About from '../components/About'

export const MainPage = () => {
  // stack page components here
  return (
    <Box className="w-screen">
      <Box className="w-100 pl=20">
        <TechIcons id="techicons" />
        <Projects id="projects" />
        <About id="about" />
      </Box>
    </Box>
  )
}