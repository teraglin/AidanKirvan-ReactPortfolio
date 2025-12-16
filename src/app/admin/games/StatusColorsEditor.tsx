'use client';

import { useState } from 'react';
import type { StatusColors } from '@/lib/types';
import { updateStatusColors } from '@/app/lib/data-actions';

interface StatusColorsEditorProps {
  initialColors: StatusColors;
}

export default function StatusColorsEditor({ initialColors }: StatusColorsEditorProps) {
  const [colors, setColors] = useState<StatusColors>(initialColors);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const result = await updateStatusColors(colors);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError(result.error || 'Failed to update colors');
    }

    setLoading(false);
  };

  return (
    <div className="bg-charcoal p-6">
      <h2 className="text-white uppercase mb-4">Status Colors</h2>
      <p className="text-white/50 text-sm mb-4">
        Set the colors displayed for each game status. Use hex color codes (e.g., #ffff65).
      </p>

      {error && (
        <div className="bg-red-500/20 border border-red-500 p-3 text-red-300 text-sm mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-500/20 border border-green-500 p-3 text-green-300 text-sm mb-4">
          Colors updated successfully!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-white/70 text-sm uppercase mb-2">
            Developing
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="color"
              value={colors.developing}
              onChange={(e) => setColors({ ...colors, developing: e.target.value })}
              className="w-12 h-10 cursor-pointer bg-transparent border border-white/20"
            />
            <input
              type="text"
              value={colors.developing}
              onChange={(e) => setColors({ ...colors, developing: e.target.value })}
              placeholder="#ffff65"
              className="flex-1 bg-dark-charcoal text-white p-2 border border-white/20 focus:border-orange outline-none font-mono text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/70 text-sm uppercase mb-2">
            Testing
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="color"
              value={colors.testing}
              onChange={(e) => setColors({ ...colors, testing: e.target.value })}
              className="w-12 h-10 cursor-pointer bg-transparent border border-white/20"
            />
            <input
              type="text"
              value={colors.testing}
              onChange={(e) => setColors({ ...colors, testing: e.target.value })}
              placeholder="#99ffee"
              className="flex-1 bg-dark-charcoal text-white p-2 border border-white/20 focus:border-orange outline-none font-mono text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/70 text-sm uppercase mb-2">
            Published
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="color"
              value={colors.published}
              onChange={(e) => setColors({ ...colors, published: e.target.value })}
              className="w-12 h-10 cursor-pointer bg-transparent border border-white/20"
            />
            <input
              type="text"
              value={colors.published}
              onChange={(e) => setColors({ ...colors, published: e.target.value })}
              placeholder="#99ee99"
              className="flex-1 bg-dark-charcoal text-white p-2 border border-white/20 focus:border-orange outline-none font-mono text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-orange text-black font-bold py-2 px-6 uppercase transition-all hover:bg-yellow disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Colors'}
        </button>

        <div className="flex gap-2 items-center text-sm text-white/50">
          <span>Preview:</span>
          <span
            className="px-2 py-1 text-black font-bold uppercase text-xs"
            style={{ backgroundColor: colors.developing }}
          >
            Developing
          </span>
          <span
            className="px-2 py-1 text-black font-bold uppercase text-xs"
            style={{ backgroundColor: colors.testing }}
          >
            Testing
          </span>
          <span
            className="px-2 py-1 text-black font-bold uppercase text-xs"
            style={{ backgroundColor: colors.published }}
          >
            Published
          </span>
        </div>
      </div>
    </div>
  );
}
