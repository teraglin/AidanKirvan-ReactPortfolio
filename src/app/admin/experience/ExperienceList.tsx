'use client';

import { useState } from 'react';
import type { Experience, NewExperience } from '@/lib/types';
import {
  addExperience,
  updateExperience,
  deleteExperience,
} from '@/app/lib/data-actions';
import ExperienceForm from './ExperienceForm';

interface ExperienceListProps {
  initialExperience: Experience[];
}

export default function ExperienceList({ initialExperience }: ExperienceListProps) {
  const [experience, setExperience] = useState(initialExperience);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = async (data: NewExperience) => {
    setLoading('add');
    setError(null);

    const result = await addExperience(data);

    if (result.success) {
      setShowAddForm(false);
      // Refresh will happen via revalidatePath
      window.location.reload();
    } else {
      setError(result.error || 'Failed to add experience');
    }

    setLoading(null);
  };

  const handleUpdate = async (id: string, data: Partial<Experience>) => {
    setLoading(id);
    setError(null);

    const result = await updateExperience(id, data);

    if (result.success) {
      setExperience((prev) =>
        prev.map((e) => (e.id === id ? { ...e, ...data } : e))
      );
      setEditingId(null);
    } else {
      setError(result.error || 'Failed to update experience');
    }

    setLoading(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this experience entry?')) return;

    setLoading(id);
    setError(null);

    const result = await deleteExperience(id);

    if (result.success) {
      setExperience((prev) => prev.filter((e) => e.id !== id));
    } else {
      setError(result.error || 'Failed to delete experience');
    }

    setLoading(null);
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
        + Add Experience
      </button>

      {showAddForm && (
        <div className="bg-charcoal p-6">
          <h2 className="text-white uppercase mb-4">Add New Experience</h2>
          <ExperienceForm
            onSubmit={handleAdd}
            onCancel={() => setShowAddForm(false)}
            loading={loading === 'add'}
          />
        </div>
      )}

      <div className="space-y-2">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-charcoal p-4"
          >
            {editingId === exp.id ? (
              <div className="flex-1">
                <ExperienceForm
                  experience={exp}
                  onSubmit={(data) => handleUpdate(exp.id, data as Partial<Experience>)}
                  onCancel={() => setEditingId(null)}
                  loading={loading === exp.id}
                />
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">
                    {exp.jobTitle} at {exp.company}
                  </h3>
                  <p className="text-white/50 text-sm mb-2">{exp.dateRange}</p>
                  <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => setEditingId(exp.id)}
                    disabled={loading === exp.id}
                    className="bg-yellow text-black font-bold py-1 px-3 text-sm hover:bg-orange transition-colors disabled:opacity-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(exp.id)}
                    disabled={loading === exp.id}
                    className="bg-red-500 text-white font-bold py-1 px-3 text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
                  >
                    {loading === exp.id ? '...' : 'Delete'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {experience.length === 0 && (
        <div className="bg-charcoal p-8 text-center">
          <p className="text-white/50">No experience entries yet. Add one above!</p>
        </div>
      )}
    </div>
  );
}
