import { projects } from "@/data/projects";
import ProjectsCard from "@/components/ProjectsCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col gap-4 scroll-mt-16">
      <h2 className="inline-block border-b-2 border-white p-2 uppercase">
        Some Projects...
      </h2>
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
    </div>
  );
};

export default Projects;
