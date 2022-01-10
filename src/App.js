import './styles/App.css';
import React, { useEffect, useState } from 'react';

import {
  Box,
  ThemeProvider,
  Typography,
} from '@mui/material';

import { appTheme } from './styles/appTheme';

import Nav from './components/Nav';
import { StaticMenu } from './components/StaticMenu';
import { MainPage } from './pages';

import { colourScheme } from './styles/colourScheme';

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(null);

  const screenBreakPoint = 830;

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (screenWidth < screenBreakPoint) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }, [screenWidth]);

  return (
    <ThemeProvider theme={appTheme}>
      {mobileView !== null ?
        <Box className="w-screen overscroll-none">
          {/* NAVIGATION COMPONENT */}
          {mobileView ? <StaticMenu /> : <Nav />}
          <MainPage mobileView={mobileView} />
        </Box>
        :
        <Box
          style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            background: colourScheme.black,
          }}
        >
          <Typography
            variant="h1"
            color="primary"
            textAlign="center"
          >
            Please Wait...
          </Typography>
        </Box>
      }
    </ThemeProvider>
  )
}

export default App;
