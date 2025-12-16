import ProjectsCard from "@/components/ProjectsCard";
import type { Project } from "@/lib/types";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div id="projects" className="w-full flex flex-col gap-4 scroll-mt-16">
      <h2 className="inline-block border-b-2 border-white p-2 uppercase">
        Some Projects...
      </h2>
      {sortedProjects.map(
        (project) =>
          project.show && (
            <ProjectsCard
              key={project.id}
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
