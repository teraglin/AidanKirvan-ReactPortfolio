import './styles/App.css';
import React, { useEffect, useState } from 'react'

import {
  Box,
  ThemeProvider,
  Typography,
} from '@mui/material';

import { appTheme } from './styles/appTheme';

import Nav from './components/Nav'
import { StaticMenu } from './components/StaticMenu';
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
// import Home from './components/Home';

// import pages from pages folder
import { MainPage } from './pages'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(null)

  const screenBreakPoint = 620;

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (screenWidth < screenBreakPoint) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }, [screenWidth])

  return (
    <ThemeProvider theme={appTheme}>
      {mobileView !== null ?
        <Box className="w-screen overscroll-none">
          <Router>
            {/* NAVIGATION COMPONENT */}
            {mobileView ? <StaticMenu /> : <Nav />}
            {/* SWITCHBOARD */}
            <Switch>
              <Route exact path="/">
                {/* <Home /> */}
                <MainPage mobileView={mobileView} />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Router>
        </Box>
        :
        <Box
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'text.secondary',
            color: 'text.primary',
          }}
        >
          <Typography variant="h1">
            Please Wait
          </Typography>
        </Box>
      }
    </ThemeProvider>
  )
}

export default App;
