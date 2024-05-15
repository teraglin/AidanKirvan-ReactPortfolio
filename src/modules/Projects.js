import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";
import { projects } from "../data/projects";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  return (
    <Container id="projects">
      <Heading>Some Projects...</Heading>
      {projects.map(
        (project, index) =>
          project.show && (
            <ProjectsCard
              key={index}
              projectName={project.projectName}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          )
      )}
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-margin-top: 64px;
`;
const Heading = styled.h2`
  display: inline-block;
  border-bottom: 2px solid ${color.white};
  padding: 8px;
  text-transform: uppercase;
`;
