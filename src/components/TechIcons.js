import React from 'react';

import {
  Box,
  Typography,
  ImageList,
} from '@mui/material';

import { techIcons } from '../data/tech-icons';

import { colourScheme } from '../styles/colourScheme';

import { Icon } from '@iconify/react'

const backgroundImage = "../../images/star-vector.jpg";

const containerBackground = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  maskImage: `linear-gradient(to top , #ffffff00, ${colourScheme.black})`
};

const TechIcons = (props) => {
  const { mobileView } = props;
  return (
    // BLACK BACKGROUND
    <Box
      id="top"
      style={{
        background: colourScheme.black,
        display: 'flex',
        height: '100%',
        width: '100%',
      }}
    >
      {/* IMAGE */}
      <Box
        className="
        h-screen 
        w-screen
        "
        style={{
          display: 'flex',
        }}
        sx={containerBackground}
      >
      </Box>

      {/* ABSOLUTE OVERLAY CONTAINER */}
      <Box
        style={{
          display: 'flex',
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          flexDirection: mobileView ? 'column' : 'row',

        }}
      >
        <Box
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: mobileView ? 'center' : 'flex-start',
            alignItems: 'center',
            paddingLeft: mobileView ? undefined : 15,
          }}
        >
          <Typography
            variant={mobileView ? "h3" : "h2"}
            color="text.primary"
            margin={5}
          >
            Hi, I'm Aidan Kirvan
          </Typography>
        </Box>
        <Box
          style={{
            width: 'auto',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 50px 0 50px',
          }}
        >
          <ImageList
            sx={{
              width: 500,
              height: 500,
              overflow: 'visible'
            }}
            cols={4}
            rowHeight={4}
          >
            {techIcons.map((icon, index) => (
              <div
                style={{
                  borderRadius: '25%',
                  padding: '8px',
                  aspectRatio: '1/1',
                  backgroundColor: 'rgb(255,255,255)',
                  boxShadow: '0 4px 24px rgb(0,0,0,0.5)'
                }}
              >
                <Icon
                  key={index}
                  icon={icon.icon}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                </Icon>
              </div>
            ))}

          </ImageList>
        </Box>
      </Box>
    </Box>
  )
}

export default TechIcons;