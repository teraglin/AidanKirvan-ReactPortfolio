import React from "react";

import {
  Box,
  Typography,
  Link,
} from "@mui/material";

import { colourScheme } from '../../styles/colourScheme';

export const ContactLink = (props) => {
  const {
    contactTitle,
    contactImage,
    contactLink,
    hoverStatusRef,
    mobileView,
    onMouseEnter,
    onMouseLeave,
  } = props;

  return (
    <Box
        style={{
          display: 'flex',
          width: '90%',
          justifyContent: 'center',
          margin: 20,
          background: hoverStatusRef ? colourScheme.primary : colourScheme.black,
          borderRadius: '15px',
        }}
      >
        <img
        src={contactImage}
        alt="github-contact"
        style={{
          borderRadius: '10px',
          width: '100px',
          height: '100px',
        }}
        />
        <Link
          href={contactLink}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: hoverStatusRef ? colourScheme.white : colourScheme.primary,
            margin: '5px 0',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          underline='none'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Typography
            variant={mobileView ? 'h5' : 'h4'}
            style={{ fontWeight: 'bold' }}
          >
            {contactTitle}
          </Typography>
        </Link>
      </Box>
  )
}