'use client';

import { useState } from 'react';
import type { Project, NewProject } from '@/lib/types';
import {
  addProject,
  updateProject,
  deleteProject,
} from '@/app/lib/data-actions';
import ProjectForm from './ProjectForm';

interface ProjectsListProps {
  initialProjects: Project[];
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const [projects, setProjects] = useState(initialProjects);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = async (data: NewProject) => {
    setLoading('add');
    setError(null);

    const result = await addProject(data);

    if (result.success) {
      setShowAddForm(false);
      // Refresh will happen via revalidatePath
      window.location.reload();
    } else {
      setError(result.error || 'Failed to add project');
    }

    setLoading(null);
  };

  const handleUpdate = async (id: string, data: Partial<Project>) => {
    setLoading(id);
    setError(null);

    const result = await updateProject(id, data);

    if (result.success) {
      setProjects((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...data } : p))
      );
      setEditingId(null);
    } else {
      setError(result.error || 'Failed to update project');
    }

    setLoading(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    setLoading(id);
    setError(null);

    const result = await deleteProject(id);

    if (result.success) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } else {
      setError(result.error || 'Failed to delete project');
    }

    setLoading(null);
  };

  const handleToggleVisibility = async (project: Project) => {
    await handleUpdate(project.id, { show: !project.show });
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-500/20 border border-red-500 p-4 text-red-300">
          {error}
        </div>
      )}

      <button
        onClick={() => setShowAddForm(true)}
        className="bg-blue text-black font-bold py-2 px-6 uppercase transition-all hover:bg-opacity-90"
      >
        + Add Project
      </button>

      {showAddForm && (
        <div className="bg-charcoal p-6">
          <h2 className="text-white uppercase mb-4">Add New Project</h2>
          <ProjectForm
            onSubmit={handleAdd}
            onCancel={() => setShowAddForm(false)}
            loading={loading === 'add'}
          />
        </div>
      )}

      <div className="space-y-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-charcoal p-4 flex flex-col lg:flex-row lg:items-center gap-4"
          >
            {editingId === project.id ? (
              <div className="flex-1">
                <ProjectForm
                  project={project}
                  onSubmit={(data) => handleUpdate(project.id, data as Partial<Project>)}
                  onCancel={() => setEditingId(null)}
                  loading={loading === project.id}
                />
              </div>
            ) : (
              <>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-white font-bold">
                      {project.projectName}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 uppercase ${
                        project.show
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {project.show ? 'Visible' : 'Hidden'}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm mt-1 line-clamp-1">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleToggleVisibility(project)}
                    disabled={loading === project.id}
                    className="bg-white/10 text-white py-1 px-3 text-sm hover:bg-white/20 transition-colors disabled:opacity-50"
                  >
                    {project.show ? 'Hide' : 'Show'}
                  </button>
                  <button
                    onClick={() => setEditingId(project.id)}
                    disabled={loading === project.id}
                    className="bg-yellow text-black font-bold py-1 px-3 text-sm hover:bg-orange transition-colors disabled:opacity-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    disabled={loading === project.id}
                    className="bg-red-500 text-white font-bold py-1 px-3 text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
                  >
                    {loading === project.id ? '...' : 'Delete'}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="bg-charcoal p-8 text-center">
          <p className="text-white/50">No projects yet. Add one above!</p>
        </div>
      )}
    </div>
  );
}
