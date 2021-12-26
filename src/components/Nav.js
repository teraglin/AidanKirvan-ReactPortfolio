import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"

class Nav extends Component {
    render() {
        return (
            <header className="App-header">
                {/* NAV TOP */}
                <nav className="Nav-btn-container-top">
                    {/* NAV TOP LEFT */}
                    <nav className="Nav-btn-container-left">
                        <Link to="/" className="heading mx-5 px-2 flex flex-row">
                            <span className="heading-a font-bold text-xl px-2 sm:text-4xl mx-2">Aidan</span>
                            <span className="heading-b font-bold text-xl sm:text-4xl">KIRVAN</span>
                        </Link>
                    </nav>
                    {/* NAV TOP RIGHT */}
                    <nav className="Nav-btn-container-right">
                        <a href="https://github.com/teraglin" target="_blank" rel="noopener noreferrer">
                            <img className="svg-icon w-10 transform hover:scale-110 transition delay-50 ease-in-out" src={require('../images/github-icon.svg').default} alt='github-link' />
                        </a>

                        <a href="https://twitter.com/kakaposaur" target="_blank" rel="noopener noreferrer">
                            <img className="svg-icon w-10 transform hover:scale-110 transition delay-50 ease-in-out" src={require('../images/twitter-icon.svg').default} alt='twitter-link' />
                        </a>
                    </nav>
                </nav>
                {/* NAV BOTTOM */}
                <nav className="Nav-btn-container-bottom">
                    {/* PROJECTS */}
                    <button className="px-2">
                        <Link to="projects">PROJECTS</Link>
                    </button>
                    {/* ABOUT */}
                    <button className="px-2">
                        <Link to="about">ABOUT</Link>
                    </button>
                    <button className="px-2">
                        <Link to="contact">CONTACT</Link>
                    </button>
                </nav>
            </header>
        )
    }
}

export default Nav