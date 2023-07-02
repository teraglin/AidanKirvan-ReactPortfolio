import React from 'react'

import {
  Button,
  IconButton
} from '@mui/material'

import { HomeOutlined } from '@mui/icons-material'

import { colourScheme } from '../styles/colourScheme'

import ScrollIntoView from 'react-scroll-into-view'

const Nav = () => {
  const {gray, black} = colourScheme;

  const navStyles = {
    navContainer: {
      width: '100%',
      height: 25,
      display: 'flex',
      justifyContent: 'space-evenly',
      backgroundImage: `linear-gradient(125deg, ${black} 25%, ${gray} 25%, ${gray} 50%, ${black} 50%, ${black} 75%, ${gray} 75%, ${gray} 100%)`,
      backgroundSize: `48.83px 69.74px`,
      zIndex: 10,
      position: 'fixed',
      top: 0,
    },
    navButton: {
      height: '100%',
      color: colourScheme.white,
      fontWeight: 'bold',
      padding: '0 20px 0 20px',
    }
  };

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