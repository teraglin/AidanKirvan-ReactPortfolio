import React, {Component} from 'react'

class Nav extends Component {

    handleClick = (event) => {
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
                        <button value="home" onClick={this.handleClick} >HOME</button>
                    </nav>
                    
                    {/* NAV MIDDLE  */}
                    <nav className="Nav-btn-container-middle">
                        <h1 className="font-bold">AIDAN KIRVAN</h1>
                    </nav>
                    {/* NAV BOTTOM */}
                    <nav className="Nav-btn-container-right">
                        <button>GIT</button>
                        <button>TWI</button>
                    </nav>
                </nav>
                {/* NAV BOTTOM */}
                <nav className="Nav-btn-container-bottom">
                    <button value="projects" onClick={this.handleClick} >PROJECTS</button>
                    <button value="about" onClick={this.handleClick} >ABOUT</button>
                    <button value="contact" onClick={this.handleClick} >CONTACT</button>
                </nav>
            </header>
        )
    }
}

export default Nav