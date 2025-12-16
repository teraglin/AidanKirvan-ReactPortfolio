'use client';

import { useState } from 'react';
import type { TabletopGame, NewTabletopGame, GameStatus } from '@/lib/types';

interface GameFormProps {
  game?: TabletopGame;
  onSubmit: (data: NewTabletopGame) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

export default function GameForm({
  game,
  onSubmit,
  onCancel,
  loading,
}: GameFormProps) {
  const [formData, setFormData] = useState({
    title: game?.title || '',
    description: game?.description || '',
    players: game?.players || '',
    time: game?.time || '',
    titleImage: game?.titleImage || '',
    images: game?.images || [],
    status: game?.status || ('developing' as GameStatus),
    displayOn: game?.displayOn ?? true,
  });

  const [newImageUrl, setNewImageUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const addImage = () => {
    if (newImageUrl.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, newImageUrl.trim()],
      });
      setNewImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 text-sm uppercase mb-1">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
            className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          />
        </div>

        <div>
          <label className="block text-white/70 text-sm uppercase mb-1">
            Status
          </label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value as GameStatus })
            }
            className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          >
            <option value="developing">Developing</option>
            <option value="testing">Testing</option>
            <option value="published">Published</option>
          </select>
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 text-sm uppercase mb-1">
            Players (e.g., "2-4")
          </label>
          <input
            type="text"
            value={formData.players}
            onChange={(e) =>
              setFormData({ ...formData, players: e.target.value })
            }
            required
            placeholder="2-4"
            className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          />
        </div>

        <div>
          <label className="block text-white/70 text-sm uppercase mb-1">
            Time in minutes (e.g., "30-60")
          </label>
          <input
            type="text"
            value={formData.time}
            onChange={(e) =>
              setFormData({ ...formData, time: e.target.value })
            }
            required
            placeholder="30-60"
            className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-white/70 text-sm uppercase mb-1">
          Title Image URL
        </label>
        <input
          type="url"
          value={formData.titleImage}
          onChange={(e) =>
            setFormData({ ...formData, titleImage: e.target.value })
          }
          placeholder="https://..."
          className="w-full bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
        />
        {formData.titleImage && (
          <div className="mt-2">
            <img
              src={formData.titleImage}
              alt="Title Preview"
              className="max-h-32 object-contain bg-white/5"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      <div>
        <label className="block text-white/70 text-sm uppercase mb-1">
          Gallery Images
        </label>
        <div className="flex gap-2 mb-2">
          <input
            type="url"
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            placeholder="https://..."
            className="flex-1 bg-dark-charcoal text-white p-3 border border-white/20 focus:border-orange outline-none"
          />
          <button
            type="button"
            onClick={addImage}
            className="bg-blue text-black font-bold py-2 px-4 uppercase text-sm hover:bg-opacity-90"
          >
            Add
          </button>
        </div>
        {formData.images.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {formData.images.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={url}
                  alt={`Gallery ${index + 1}`}
                  className="h-20 w-20 object-cover bg-white/5"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                  }}
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="displayOn"
          checked={formData.displayOn}
          onChange={(e) =>
            setFormData({ ...formData, displayOn: e.target.checked })
          }
          className="w-4 h-4 accent-orange"
        />
        <label htmlFor="displayOn" className="text-white">
          Show on tabletop page
        </label>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-orange text-black font-bold py-2 px-6 uppercase transition-all hover:bg-yellow disabled:opacity-50"
        >
          {loading ? 'Saving...' : game ? 'Update' : 'Add Game'}
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
