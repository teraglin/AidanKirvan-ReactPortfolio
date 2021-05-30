import './styles/App.css';
import React, { Component } from 'react'
import Nav from './components/Nav'

//CHANNEL CHANGER
const renderPage = (input) => {
  console.log('input: ',input)
  if (input === 'home') {
      return (
          <h1>I'm home</h1>
      )
  } else if (input === 'projects') {
      return (
          <h1>Here are my projects</h1>
      )
  } else if (input === 'about') {
      return (
          <h1>This is my about me page</h1>
      )
  } else if (input === 'contact') {
      return (
          <h1>here is my number</h1>
      )
  } else {
      return (
          <h1>We have an Error</h1>
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
        <Nav parentCallback={this.callbackFunction}  />
        <h1>hello world</h1>
        {renderPage(activePage)}
        {console.log("active page =", activePage)}
      </div>
    )
  }
}

export default App;
