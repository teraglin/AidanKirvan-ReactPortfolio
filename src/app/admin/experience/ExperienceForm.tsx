'use client';

import { useState } from 'react';
import type { Experience, NewExperience } from '@/lib/types';

interface ExperienceFormProps {
  experience?: Experience;
  onSubmit: (data: NewExperience) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

export default function ExperienceForm({
  experience,
  onSubmit,
  onCancel,
  loading,
}: ExperienceFormProps) {
  const [formData, setFormData] = useState({
    jobTitle: experience?.jobTitle || '',
    company: experience?.company || '',
    dateRange: experience?.dateRange || '',
    responsibilities: experience?.responsibilities || [''],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Filter out empty responsibilities
    const cleanedData = {
      ...formData,
      responsibilities: formData.responsibilities.filter((r) => r.trim() !== ''),
    };
    await onSubmit(cleanedData);
  };

  const handleResponsibilityChange = (index: number, value: string) => {
    const newResponsibilities = [...formData.responsibilities];
    newResponsibilities[index] = value;
    setFormData({ ...formData, responsibilities: newResponsibilities });
  };

  const addResponsibility = () => {
    setFormData({
      ...formData,
      responsibilities: [...formData.responsibilities, ''],
    });
  };

  const removeResponsibility = (index: number) => {
    if (formData.responsibilities.length <= 1) return;
    const newResponsibilities = formData.responsibilities.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, responsibilities: newResponsibilities });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 text-sm uppercase mb-1">
            Job Title
          </label>
          <input
            type="text"
            value={formData.jobTitle}
            onChange={(e) =>
              setFormData({ ...formData, jobTitle: e.target.value })
            }
            required
            placeholder="e.g., Frontend Developer"
            className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          />
        </div>

        <div>
          <label className="block text-white/70 text-sm uppercase mb-1">
            Company
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            required
            placeholder="e.g., Acme Corp"
            className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-white/70 text-sm uppercase mb-1">
          Date Range
        </label>
        <input
          type="text"
          value={formData.dateRange}
          onChange={(e) =>
            setFormData({ ...formData, dateRange: e.target.value })
          }
          required
          placeholder="e.g., Jul 2024 – Present"
          className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
        />
      </div>

      <div>
        <label className="block text-white/70 text-sm uppercase mb-2">
          Responsibilities
        </label>
        <div className="space-y-2">
          {formData.responsibilities.map((responsibility, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={responsibility}
                onChange={(e) =>
                  handleResponsibilityChange(index, e.target.value)
                }
                placeholder="Enter a responsibility..."
                className="flex-1 bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
              />
              <button
                type="button"
                onClick={() => removeResponsibility(index)}
                disabled={formData.responsibilities.length <= 1}
                className="bg-red-500/20 text-red-400 px-3 hover:bg-red-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addResponsibility}
          className="mt-2 text-sm text-orange hover:text-yellow transition-colors"
        >
          + Add Responsibility
        </button>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-orange text-black font-bold py-2 px-6 uppercase transition-all hover:bg-yellow disabled:opacity-50"
        >
          {loading ? 'Saving...' : experience ? 'Update' : 'Add Experience'}
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
