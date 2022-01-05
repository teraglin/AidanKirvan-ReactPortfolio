import React from 'react'
import {
  Link,
} from "react-router-dom"

import {
  Box,
  Button,
  IconButton
} from '@mui/material'

import { HomeOutlined } from '@mui/icons-material'

import { colourScheme } from '../styles/colourScheme'

import ScrollIntoView from 'react-scroll-into-view'

const Nav = () => {

  const navStyles = {
    navContainer: {
      width: '100%',
      height: 25,
      display: 'flex',
      justifyContent: 'space-evenly',
      backgroundImage: `linear-gradient(125deg, #ea9f00 25%, #ea9215 25%, #ea9215 50%, #ea9f00 50%, #ea9f00 75%, #ea9215 75%, #ea9215 100%)`,
      backgroundSize: `48.83px 69.74px`,
      color: colourScheme.black,
      zIndex: 10,
      position: 'fixed',
      top: 0,
    },
    navButton: {
      height: '100%',
      color: colourScheme.black,
      fontWeight: 'bold',
      padding: '0 20px 0 20px',
    }
  }

  return (
    <nav
      // className="Nav-btn-container-bottom"
      style={navStyles.navContainer}
    >
      {/* TOP */}
      <ScrollIntoView selector="#top">
        <IconButton
          style={navStyles.navButton}
        >
          <HomeOutlined />
        </IconButton>
      </ScrollIntoView>
      {/* PROJECTS */}
      <ScrollIntoView selector="#projects">
        <Button
          style={navStyles.navButton}
        >
          PROJECTS
        </Button>
      </ScrollIntoView>
      {/* ABOUT */}
      <ScrollIntoView selector="#about">
        <Button
          style={navStyles.navButton}
        >
          ABOUT
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#contact">
        <Button
          style={navStyles.navButton}
        >
          CONTACT
        </Button>
      </ScrollIntoView>
    </nav>
  )
}

export default Nav