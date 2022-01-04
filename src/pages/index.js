import React, {useRef} from 'react'

import {
  Box,  
  Button
} from '@mui/material'

import { StaticMenu } from '../components/StaticMenu'

//import page components
import TechIcons from '../components/TechIcons'
import Projects from '../components/Projects'
import About from '../components/About'

export const MainPage = () => {
  
  const weeee = useRef()
  const handleClick = () => {
    weeee.current.scrollIntoView({ behavior: 'smooth' })
  }

  // stack page components here
  return (
    <Box className="w-screen">
      <StaticMenu />
      <TechIcons id="techicons" />
      <Projects id="projects" />
      <About id="about" />
    </Box>
  )
}