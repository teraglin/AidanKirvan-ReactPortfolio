import './styles/App.css';
import React, { Component } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

//CHANNEL CHANGER
const renderPage = (input) => {
  if (input === undefined) {
    input = 'home'
  }

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
      <div>
        {console.log('page status is: ', input)}
        <h1>ERROR: cannot find page. </h1>
      </div>
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

  //update tag title
  updateDocumentTitle = (input) => {
    if (input === undefined && typeof(input) !== String) {
      input = 'home'
    }
    document.title = "Aidan Kirvan - " + input
  }

  render() {
    const {activePage} = this.state
    return(
      <div className="App overscroll-none">
        <Nav parentCallback={this.callbackFunction} />
        {this.updateDocumentTitle(activePage)}
        {renderPage(activePage)}
      </div>
    )
  }
}

export default App;
