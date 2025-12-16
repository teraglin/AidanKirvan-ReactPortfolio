'use client';

import { useState, useRef } from 'react';
import { uploadResume, removeResume } from '@/app/lib/data-actions';
import type { ResumeMetadata } from '@/lib/blobs';

interface ResumeUploaderProps {
  initialMetadata: ResumeMetadata | null;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleString('en-AU', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

export default function ResumeUploader({ initialMetadata }: ResumeUploaderProps) {
  const [metadata, setMetadata] = useState<ResumeMetadata | null>(initialMetadata);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError(null);
    setSuccess(null);

    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      setError('Only PDF files are allowed');
      setSelectedFile(null);
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    const result = await uploadResume(formData);

    if (result.success && result.metadata) {
      setMetadata(result.metadata);
      setSelectedFile(null);
      setSuccess('Resume uploaded successfully!');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } else {
      setError(result.error || 'Failed to upload resume');
    }

    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete the uploaded resume? The site will fall back to the static PDF.')) {
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    const result = await removeResume();

    if (result.success) {
      setMetadata(null);
      setSuccess('Resume deleted. Site will now use the static fallback PDF.');
    } else {
      setError(result.error || 'Failed to delete resume');
    }

    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Current Resume Status */}
      <div className="bg-charcoal p-6">
        <h2 className="text-white uppercase mb-4">Current Resume</h2>

        {metadata ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-sm px-2 py-1 bg-green-500/20 uppercase">
                Uploaded
              </span>
              <span className="text-white/70 text-sm">
                Using Netlify Blobs
              </span>
            </div>

            <div className="text-white/70 text-sm space-y-1">
              <p><span className="text-white">Filename:</span> {metadata.filename}</p>
              <p><span className="text-white">Size:</span> {formatFileSize(metadata.size)}</p>
              <p><span className="text-white">Uploaded:</span> {formatDate(metadata.uploadedAt)}</p>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="/api/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue text-black font-bold py-2 px-4 text-sm uppercase hover:bg-opacity-90 transition-colors"
              >
                Download Current
              </a>
              <button
                onClick={handleDelete}
                disabled={loading}
                className="bg-red-500 text-white font-bold py-2 px-4 text-sm uppercase hover:bg-red-600 transition-colors disabled:opacity-50"
              >
                {loading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-yellow text-sm px-2 py-1 bg-yellow/20 uppercase">
                Fallback
              </span>
              <span className="text-white/70 text-sm">
                Using static file: /downloads/AidanKirvanCV2025.pdf
              </span>
            </div>

            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue text-black font-bold py-2 px-4 text-sm uppercase hover:bg-opacity-90 transition-colors"
            >
              Download Current
            </a>
          </div>
        )}
      </div>

      {/* Upload New Resume */}
      <div className="bg-charcoal p-6">
        <h2 className="text-white uppercase mb-4">Upload New Resume</h2>
        <p className="text-white/50 text-sm mb-4">
          Upload a PDF file (max 5MB). This will replace any existing uploaded resume.
        </p>

        {error && (
          <div className="bg-red-500/20 border border-red-500 p-3 text-red-300 text-sm mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/20 border border-green-500 p-3 text-green-300 text-sm mb-4">
            {success}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileSelect}
              className="block w-full text-white/70 text-sm
                file:mr-4 file:py-2 file:px-4
                file:border-0
                file:text-sm file:font-bold file:uppercase
                file:bg-white/10 file:text-white
                hover:file:bg-white/20
                file:cursor-pointer file:transition-colors"
            />
          </div>

          {selectedFile && (
            <div className="text-white/70 text-sm">
              <p>Selected: <span className="text-white">{selectedFile.name}</span></p>
              <p>Size: {formatFileSize(selectedFile.size)}</p>
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={!selectedFile || loading}
            className="bg-orange text-black font-bold py-2 px-6 uppercase transition-all hover:bg-yellow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Uploading...' : 'Upload Resume'}
          </button>
        </div>
      </div>
    </div>
  );
}
