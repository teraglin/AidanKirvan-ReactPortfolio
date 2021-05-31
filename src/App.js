import './styles/App.css';
import React, { Component } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

//CHANNEL CHANGER
const renderPage = (input) => {
  console.log('input: ',input)
  if (input === 'home') {
      return (
          <Home />
      )
  } else if (input === 'projects') {
      return (
          <Projects />
      )
  } else if (input === 'about') {
      return (
          <About />
      )
  } else if (input === 'contact') {
      return (
          <Contact />
      )
  } else {
      return (
          <h1>WE HAVE AN ERROR</h1>
      )
  }
}

class App extends Component {
  state = {
    activePage: "home"
  }

  callbackFunction = (childData) => {
    this.setState({activePage: childData})
  }

  render() {
    const {activePage} = this.state
    return(
      <div className="App overscroll-none">
        <Nav className="Nav-Bar" parentCallback={this.callbackFunction}  />
        {renderPage(activePage)}
      </div>
    )
  }
}

export default App;
