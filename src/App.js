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
  if (input === 'projects') {
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
        <Home />
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
        <Nav parentCallback={this.callbackFunction} />
        {renderPage(activePage)}
      </div>
    )
  }
}

export default App;
