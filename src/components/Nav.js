import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"

class Nav extends Component {
    render() {
        return (
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
        )
    }
}

export default Nav