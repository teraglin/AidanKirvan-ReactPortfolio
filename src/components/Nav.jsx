import React, {Component} from 'react'

class Nav extends Component {

    handleClick = (event) => {
        console.log("event:",event.target.value)
        const input = event.target.value
        console.log("You clicked", input)
        this.sendData(input)
    }

    sendData = (input) => {
        this.props.parentCallback(input)
    }

    render(){
        return (
            <header className="App-header">
                {/* NAV TOP */}
                <nav className="Nav-btn-container-top">
                    {/* NAV LEFT */}
                    <nav className="Nav-btn-container-left">
                        <button value="home" onClick={this.handleClick} className="heading mx-5 px-2 flex flex-row">
                            <span className="heading-a font-bold text-4xl px-2 mx-2">Aidan</span>
                            <span className="heading-b font-bold text-4xl">KIRVAN</span>
                        </button>
                    </nav>
                    {/* NAV BOTTOM */}
                    <nav className="Nav-btn-container-right">
                        <a href="https://github.com/teraglin" target="blank">
                            <img className="svg-icon w-10" src={require('../images/github-icon.svg').default} alt='github-link' />
                        </a>

                        <a href="https://twitter.com/kakaposaur" target="blank">
                            <img className="svg-icon w-10" src={require('../images/twitter-icon.svg').default} alt='twitter-link' />
                        </a>
                    </nav>
                </nav>
                {/* NAV BOTTOM */}
                <nav className="Nav-btn-container-bottom">
                    <button value="projects" onClick={this.handleClick} className="px-2" >PROJECTS</button>
                    <button value="about" onClick={this.handleClick} className="px-2" >ABOUT</button>
                    <button value="contact" onClick={this.handleClick} className="px-2" >CONTACT</button>
                </nav>
            </header>
        )
    }
}

export default Nav