import React from 'react'
import htmlIcon from '../images/icon-html.png'
import cssIcon from '../images/icon-css.png'
import jsIcon from '../images/icon-javascript.png'
import reactIcon from '../images/icon-react.png'
import rubyIcon from '../images/icon-ruby.png'
import railsIcon from '../images/icon-rails.png'
import tailwindIcon from '../images/icon-tailwind.png'
import postgresqlIcon from '../images/icon-postgresql.png'

const Home = () => {
    return (
        <div className="page-component-container-home">
            <div className="tech-container bg-white bg-opacity-95">

                    {/* {techIcons.map(icon => (
                        <div className="tech-logo-backhground">
                            {console.log(icon.src)}
                            {console.log('type:', typeof(icon.src))}
                            <img src={icon.src} alt={icon.tech} className="tech-logo" />
                        </div>
                    ))} */}
                    {/* <div className="tech-logo-background"> */}
                        <img src={htmlIcon} className="tech-logo" alt="html" />
                    {/* </div> */}
                    
                    <img src={cssIcon} className="tech-logo" alt="css" />
                    <img src={jsIcon} className="tech-logo" alt="js" />
                    <img src={reactIcon} className="tech-logo" alt="react" />
                    <img src={rubyIcon} className="tech-logo" alt="ruby" />
                    <img src={railsIcon} className="tech-logo" alt="rails" />
                    <img src={tailwindIcon} className="tech-logo" alt="rails" />
                    <img src={postgresqlIcon} className="tech-logo" alt="rails" />
                
            </div>
        </div>
    )
}

export default Home