import type { Metadata } from 'next';
import { fetchProjects } from '@/app/lib/data-actions';
import ProjectsList from './ProjectsList';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Manage Projects - Admin',
  description: 'Manage portfolio projects',
};

export default async function ProjectsPage() {
  const projects = await fetchProjects();
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="bg-charcoal p-4 lg:p-6">
        <h1 className="text-white text-xl lg:text-2xl uppercase mb-1 lg:mb-2">Projects</h1>
        <p className="text-white/70 text-sm lg:text-base">Manage your portfolio projects</p>
      </div>

      <ProjectsList initialProjects={sortedProjects} />
    </div>
  );
}
