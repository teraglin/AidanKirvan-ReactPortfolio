import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";
import { projects } from "../data/projects";
import { ProjectsCard } from "../components/ProjectsCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px 0 128px;
`;
const Heading = styled.h2`
  display: inline-block;
  border-bottom: 2px solid ${color.white};
  padding: 8px;
  text-transform: uppercase;
`;

const Projects = () => {
  return (
    <Container>
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
