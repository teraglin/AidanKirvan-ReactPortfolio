import React from 'react';

import {
  Box,
  Typography,
} from '@mui/material';

import { projects } from '../data/projects';

import { colourScheme } from '../styles/colourScheme';

import { ProjectsCard } from '../services/projects/ProjectsCard';

const Projects = (props) => {
  const { mobileView } = props;

  return (
    <Box
      id="projects"
      background="primary"
      style={{
        background: `linear-gradient(to bottom, ${colourScheme.black}, ${colourScheme.gray}`,
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
      }}
    >
      <Typography
        color="text.primary"
        variant={mobileView ? 'h4' : 'h3'}
        width="100%"
        textAlign={mobileView ? "center" : "left"}
        padding={mobileView ? 1 : '64px 0 15px 64px'}
      >
        PROJECTS
      </Typography>
      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          mobileView={mobileView}
          projectName={project.projectName}
          image={project.image}
          description={project.description}
          link={project.link}
        />
      ))}
    </Box>
  )
}

export default Projects
