import './styles/App.css';
import React from 'react'

import { Box } from '@mui/material';

import Nav from './components/Nav'
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
  return (
    <Box className="w-screen overscroll-none">
      <Router>
        {/* NAVIGATION COMPONENT */}
        <Nav />
        {/* SWITCHBOARD */}
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
            <MainPage />
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
  )
}

export default App;
