'use client';

import { useState } from 'react';
import type { Project, NewProject } from '@/lib/types';

interface ProjectFormProps {
  project?: Project;
  onSubmit: (data: NewProject) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

export default function ProjectForm({
  project,
  onSubmit,
  onCancel,
  loading,
}: ProjectFormProps) {
  const [formData, setFormData] = useState({
    projectName: project?.projectName || '',
    description: project?.description || '',
    link: project?.link || '',
    image: project?.image || '',
    show: project?.show ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-white/70 text-sm uppercase mb-1">
          Project Name
        </label>
        <input
          type="text"
          value={formData.projectName}
          onChange={(e) =>
            setFormData({ ...formData, projectName: e.target.value })
          }
          required
          className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
        />
      </div>

      <div>
        <label className="block text-white/70 text-sm uppercase mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
          rows={3}
          className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none resize-y"
        />
      </div>

      <div>
        <label className="block text-white/70 text-sm uppercase mb-1">
          Link URL
        </label>
        <input
          type="url"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          required
          placeholder="https://..."
          className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
        />
      </div>

      <div>
        <label className="block text-white/70 text-sm uppercase mb-1">
          Image URL
        </label>
        <input
          type="url"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
          placeholder="https://..."
          className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
        />
        {formData.image && (
          <div className="mt-2">
            <img
              src={formData.image}
              alt="Preview"
              className="max-h-32 object-contain bg-white/5"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="show"
          checked={formData.show}
          onChange={(e) => setFormData({ ...formData, show: e.target.checked })}
          className="w-4 h-4 accent-orange"
        />
        <label htmlFor="show" className="text-white">
          Show on portfolio
        </label>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-orange text-black font-bold py-2 px-6 uppercase transition-all hover:bg-yellow disabled:opacity-50"
        >
          {loading ? 'Saving...' : project ? 'Update' : 'Add Project'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="bg-white/10 text-white py-2 px-6 uppercase hover:bg-white/20 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
