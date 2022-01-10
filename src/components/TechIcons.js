import React from 'react';

import {
  Box,
  Typography,
  ImageList,
  ImageListItem
} from '@mui/material';

import { techIcons } from '../data/tech-icons';

import { colourScheme } from '../styles/colourScheme';

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
            }}
            cols={4}
            rowHeight={4}
          >
          {techIcons.map((icon, index) => (
            <ImageListItem key={index}>
              <img
                src={icon.src}
                alt={icon.tech}
                loading="lazy"
              />
            </ImageListItem>
          ))}

          </ImageList>
        </Box>
      </Box>
    </Box>
  )
}

export default TechIcons;