'use client';

import { useState } from 'react';
import type { SkillsData, SkillCategory } from '@/lib/types';
import {
  addSkillCategory,
  updateSkillCategory,
  deleteSkillCategory,
} from '@/app/lib/data-actions';
import SkillForm from './SkillForm';

interface SkillsListProps {
  initialSkills: SkillsData;
}

export default function SkillsList({ initialSkills }: SkillsListProps) {
  const [skills, setSkills] = useState(initialSkills);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = async (key: string, data: SkillCategory) => {
    setLoading('add');
    setError(null);

    const result = await addSkillCategory(key, data);

    if (result.success) {
      setSkills({ ...skills, [key]: data });
      setShowAddForm(false);
    } else {
      setError(result.error || 'Failed to add skill category');
    }

    setLoading(null);
  };

  const handleUpdate = async (key: string, data: SkillCategory) => {
    setLoading(key);
    setError(null);

    const result = await updateSkillCategory(key, data);

    if (result.success) {
      setSkills({ ...skills, [key]: data });
      setEditingKey(null);
    } else {
      setError(result.error || 'Failed to update skill category');
    }

    setLoading(null);
  };

  const handleDelete = async (key: string) => {
    if (!confirm('Are you sure you want to delete this skill category?')) return;

    setLoading(key);
    setError(null);

    const result = await deleteSkillCategory(key);

    if (result.success) {
      const newSkills = { ...skills };
      delete newSkills[key];
      setSkills(newSkills);
    } else {
      setError(result.error || 'Failed to delete skill category');
    }

    setLoading(null);
  };

  const skillEntries = Object.entries(skills);

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
        + Add Skill Category
      </button>

      {showAddForm && (
        <div className="bg-charcoal p-6">
          <h2 className="text-white uppercase mb-4">Add New Skill Category</h2>
          <SkillForm
            onSubmit={handleAdd}
            onCancel={() => setShowAddForm(false)}
            loading={loading === 'add'}
            isNew
          />
        </div>
      )}

      <div className="space-y-2">
        {skillEntries.map(([key, category]) => (
          <div
            key={key}
            className="bg-charcoal p-4"
          >
            {editingKey === key ? (
              <SkillForm
                categoryKey={key}
                category={category}
                onSubmit={(_, data) => handleUpdate(key, data)}
                onCancel={() => setEditingKey(null)}
                loading={loading === key}
              />
            ) : (
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold">{category.title}</h3>
                    <span className="text-xs px-2 py-1 uppercase bg-white/10 text-white/70">
                      {key}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {category.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-sm px-2 py-1 bg-dark-charcoal text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/50 text-xs">
                    Grid columns: {category.cols[0]} (mobile) / {category.cols[1]} (desktop)
                  </p>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => setEditingKey(key)}
                    disabled={loading === key}
                    className="bg-yellow text-black font-bold py-1 px-3 text-sm hover:bg-orange transition-colors disabled:opacity-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(key)}
                    disabled={loading === key}
                    className="bg-red-500 text-white font-bold py-1 px-3 text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
                  >
                    {loading === key ? '...' : 'Delete'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {skillEntries.length === 0 && (
        <div className="bg-charcoal p-8 text-center">
          <p className="text-white/50">No skill categories yet. Add one above!</p>
        </div>
      )}
    </div>
  );
}
