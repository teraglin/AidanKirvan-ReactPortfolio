import type { Metadata } from 'next';
import { fetchResumeMetadata } from '@/app/lib/data-actions';
import ResumeUploader from './ResumeUploader';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Manage Resume - Admin',
  description: 'Upload and manage your resume PDF',
};

export default async function ResumePage() {
  const metadata = await fetchResumeMetadata();

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="bg-charcoal p-4 lg:p-6">
        <h1 className="text-white text-xl lg:text-2xl uppercase mb-1 lg:mb-2">Resume</h1>
        <p className="text-white/70 text-sm lg:text-base">Upload and manage your downloadable resume</p>
      </div>

      <ResumeUploader initialMetadata={metadata} />
    </div>
  );
}
