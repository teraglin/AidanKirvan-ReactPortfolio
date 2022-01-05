import React from 'react'

import {
  Box,
  Typography,
  Link,
  Button,
} from '@mui/material'

import { projects } from '../data/projects'

import { colourScheme } from '../styles/colourScheme'

const Projects = (props) => {
  const { mobileView } = props;

  const projectStyles = {
    projectsContainer: {
      background: `linear-gradient(to bottom, ${colourScheme.black}, ${colourScheme.gray}`,
      minWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    projectsCard: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #eee',
      width: 'auto',
      margin: 1,
      bgcolor: "text.secondary",
      borderRadius: "5px",
    },
    projectsCardHeading: {
      borderRadius: "5px",
    },
    projectsCardContents: {
      display: 'flex',
      flexDirection: mobileView ? 'column' : 'row',
      width: '100%',
    },
    projectsCardDescription: {
      display: 'flex',
      flexDirection: 'column',
      width: mobileView ? '100%' : '50%',
      justifyContent: 'space-between',
      padding: 2,
    },
    projectCardImage: {
      border: '1px solid #eee',
      borderRadius: '5px',
      margin: 2,
    }
  };

  return (
    <Box
      id="projects"
      background="primary"
      style={projectStyles.projectsContainer}
    >
      <Typography
        color="text.primary"
        variant={mobileView ? 'h4' : 'h3'}
        width="100%"
        textAlign="left"
        padding={2}
      >
        PROJECTS
      </Typography>
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={projectStyles.projectsCard}
        >
          <Typography
            variant="h5"
            color="text.primary"
            bgcolor="primary.main"
            padding="5px 10px 5px 10px"
            borderRadius="5px 5px 0 0"
          >
            {project.projectName}
          </Typography>
          <Box
            style={projectStyles.projectsCardContents}
          >
            <img
              width={mobileView ? 'auto' : '50%'}
              style={projectStyles.projectCardImage}
              src={project.image}
              alt={project.projectName}
            />
            <Box
              style={projectStyles.projectsCardDescription}
            >
              <Typography
                variant="body1"
                color="text.primary"
                padding={2}
              >{project.description}</Typography>
              <Button variant="contained" color="secondary">
                <Link
                  href={project.link}
                  variant="body2"
                  color="text"
                  target="_blank"
                  rel="noreferrer noopener"
                  underline='none'
                >
                  CLICK HERE TO CHECK IT OUT
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Projects
