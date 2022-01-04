import React from 'react'

import { Box } from '@mui/material'

import { techIcons } from '../data/tech-icons'

const backgroundImageURL = "https://res.cloudinary.com/djdozfiqv/image/upload/v1622770727/Winslow-Fernsby_or11gb.jpg"

const techContainerStyles = {
    techContainer:
    {
        minWidth: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '0px 50px',

    },
    containerBackground:
    {
        minWidth: 1,
        minHeight: '85%',
        backgroundImage: `url(${backgroundImageURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const Home = () => {
    return (
            <Box sx={techContainerStyles.containerBackground}>
                <Box
                    className="bg-white bg-opacity-80"
                    style={techContainerStyles.techContainer}
                >

                    {techIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.tech} className="tech-logo" />
                    ))}

                </Box>
            </Box>
    )
}

export default Home