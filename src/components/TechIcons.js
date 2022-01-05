import React from 'react'

import { Box } from '@mui/material'

import { techIcons } from '../data/tech-icons'

import { colourScheme } from '../styles/colourScheme'

const backgroundImage = "../../images/star-vector.jpg"

const containerBackground = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  maskImage: `linear-gradient(to top , #ffffff00, ${colourScheme.black})`
};

const TechIcons = () => {
  return (
    <Box
      id="top"
      className="
      flex
      flex-column
      justify-center
      align-center
      h-screen
      w-screen
      "
      style={{ background: colourScheme.black }}
    >
      <Box
        className="
        flex
        flex-row
        justify-center
        align-center
        h-screen 
        w-screen
        "
        sx={containerBackground}
      >
      <Box
        className="
          flex
          justify-center
          align-center
          w-fit
          h-fit
          m-0
          p-0
          "
      >
      </Box>
    </Box>
        <Box
          className="
            flex
            absolute
            top-0
            flex-wrap 
            align-center 
            justify-center 
            w-fit
            md:w-3/6
            pt-10
            "
        >
          {techIcons.map((icon, index) => (
            <img key={index} src={icon.src} alt={icon.tech} className="tech-logo m-2 md:m-5" />
          ))}
        </Box>
      </Box>
  )
}

export default TechIcons;