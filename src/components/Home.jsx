import React from 'react'

import {techIcons} from '../data/tech-icons'

const Home = () => {
    return (
        <div className="page-component-container-home">
            <div className="tech-container bg-white bg-opacity-95">

                    {techIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.tech} className="tech-logo" />
                    ))}
                
            </div>
        </div>
    )
}

export default Home