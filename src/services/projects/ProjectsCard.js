import React from "react";

import {
  Box,
  Typography,
  Link,
  Button,
} from '@mui/material';

import { colourScheme } from '../../styles/colourScheme';

export const ProjectsCard = (props) => {
  const {
    mobileView,
    projectName,
    image,
    description,
    link,
  } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #eee',
        width: 'auto',
        margin: mobileView ? 1 : '10px 64px',
        bgcolor: "text.secondary",
        borderRadius: "5px",
        boxShadow: `1px 3px 1px ${colourScheme.black}`
      }}
    >
      <Typography
        variant="h5"
        color="text.secondary"
        bgcolor="primary.main"
        padding="5px 10px 5px 10px"
        borderRadius="5px 5px 0 0"
        fontWeight="bold"
      >
        {projectName}
      </Typography>
      <Box
        style={{
          display: 'flex',
          flexDirection: mobileView ? 'column' : 'row',
          width: '100%',
        }}
      >
        <img
          width={mobileView ? 'auto' : '50%'}
          style={{
            border: '1px solid #eee',
            borderRadius: '5px',
            margin: 2,
          }}
          src={image}
          alt={projectName}
        />
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: mobileView ? '100%' : '50%',
            justifyContent: 'space-between',
            padding: 2,
          }}
        >
          <Typography
            variant="body1"
            color="text.primary"
            padding={2}
          >{description}</Typography>

          <Link
            href={link}
            variant="body1"
            color="text"
            target="_blank"
            rel="noreferrer noopener"
            underline='none'
            style={{ display: 'inline-block', width: '100%' }}
          >
            <Button
              variant="contained"
              color="secondary"
              style={{ width: "100%"}}
            >
              CLICK HERE TO CHECK IT OUT
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}