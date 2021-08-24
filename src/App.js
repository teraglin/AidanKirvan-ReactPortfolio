import './styles/App.css';
import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

const App = () => {
  return (
    <div className="App overscroll-none">
      <Router>
        {/* NAVIGATION COMPONENT */}
        <Nav />
        {/* SWITCHBOARD */}
        <Switch>
          <Route exact path="/">
            <Home />
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
    </div>
  )
}

export default App;
