import React, {Component} from 'react'

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <header className="App-header">
                <nav className="Nav-btn-container">
                    <button>HOME</button>
                    <button>PROJECTS</button>
                    <button>ABOUT</button>
                    <button>CONTACT</button>
                </nav>
            </header>
        )
    }
}

export default Nav