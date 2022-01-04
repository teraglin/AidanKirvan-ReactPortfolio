import React from 'react'

import {techIcons} from '../data/tech-icons'

const TechIcons = () => {
  return (
    <div className="tech-container bg-white bg-opacity-80">

      {techIcons.map((icon, index) => (
        <img key={index} src={icon.src} alt={icon.tech} className="tech-logo" />
      ))}

    </div>
  )
}

export default TechIcons