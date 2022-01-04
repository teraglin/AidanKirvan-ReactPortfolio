import React from 'react'

import { Box } from '@mui/material'

import { techIcons } from '../data/tech-icons'

const backgroundImageURL = "https://res.cloudinary.com/djdozfiqv/image/upload/v1622770727/Winslow-Fernsby_or11gb.jpg"

const techContainerStyles = {
  containerBackground: {
    backgroundImage: `url(${backgroundImageURL})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}

const TechIcons = () => {
  return (
    <Box
      sx={techContainerStyles.containerBackground}
      className="
      flex
      flex-column
      justify-center
      align-center
      h-screen
      w-screen
      "
    >
      <Box
        className="
        flex
        flex-row
        justify-center
        align-center
        bg-white
        bg-opacity-80 
        h-screen 
        w-screen
        "
      >
        <Box
          className="
          flex
          justify-center
          align-center
          w-fit
          h-fit
          bg-gradient-to-t
          from-white
          to-transparent
          "
        >
          <Box
            className="
            flex 
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
      </Box>
    </Box>
  )
}

export default TechIcons