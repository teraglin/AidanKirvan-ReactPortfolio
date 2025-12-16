'use client';

import { useState } from 'react';
import type { SkillCategory, ColumnValue } from '@/lib/types';

interface SkillFormProps {
  categoryKey?: string;
  category?: SkillCategory;
  onSubmit: (key: string, data: SkillCategory) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
  isNew?: boolean;
}

export default function SkillForm({
  categoryKey,
  category,
  onSubmit,
  onCancel,
  loading,
  isNew,
}: SkillFormProps) {
  const [key, setKey] = useState(categoryKey || '');
  const [formData, setFormData] = useState<SkillCategory>({
    title: category?.title || '',
    skills: category?.skills || [],
    cols: category?.cols || [1, 2],
  });

  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(key, formData);
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      });
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isNew && (
        <div>
          <label className="block text-white/70 text-sm uppercase mb-1">
            Category Key (no spaces, lowercase)
          </label>
          <input
            type="text"
            value={key}
            onChange={(e) =>
              setKey(e.target.value.toLowerCase().replace(/\s+/g, ''))
            }
            required
            placeholder="e.g., programmingLanguages"
            className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none font-mono"
          />
        </div>
      )}

      <div>
        <label className="block text-white/70 text-sm uppercase mb-1">
          Display Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          placeholder="e.g., Programming Languages"
          className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
        />
      </div>

      <div>
        <label className="block text-white/70 text-sm uppercase mb-1">
          Skills
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a skill..."
            className="flex-1 bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          />
          <button
            type="button"
            onClick={addSkill}
            className="bg-blue text-black font-bold py-2 px-4 uppercase text-sm hover:bg-opacity-90"
          >
            Add
          </button>
        </div>
        {formData.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 p-3 bg-dark-charcoal border border-white/20">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-white/10 text-white px-2 py-1 text-sm"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="text-red-400 hover:text-red-300 ml-1"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 text-sm uppercase mb-1">
            Mobile Columns
          </label>
          <select
            value={formData.cols[0]}
            onChange={(e) =>
              setFormData({
                ...formData,
                cols: [Number(e.target.value) as ColumnValue, formData.cols[1]],
              })
            }
            className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          >
            <option value={1}>1 column</option>
            <option value={2}>2 columns</option>
            <option value={3}>3 columns</option>
          </select>
        </div>

        <div>
          <label className="block text-white/70 text-sm uppercase mb-1">
            Desktop Columns
          </label>
          <select
            value={formData.cols[1]}
            onChange={(e) =>
              setFormData({
                ...formData,
                cols: [formData.cols[0], Number(e.target.value) as ColumnValue],
              })
            }
            className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          >
            <option value={1}>1 column</option>
            <option value={2}>2 columns</option>
            <option value={3}>3 columns</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading || formData.skills.length === 0}
          className="bg-orange text-black font-bold py-2 px-6 uppercase transition-all hover:bg-yellow disabled:opacity-50"
        >
          {loading ? 'Saving...' : isNew ? 'Add Category' : 'Update'}
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
