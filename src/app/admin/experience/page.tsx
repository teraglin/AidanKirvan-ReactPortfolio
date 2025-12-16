import type { Metadata } from 'next';
import { fetchExperience } from '@/app/lib/data-actions';
import ExperienceList from './ExperienceList';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Manage Experience - Admin',
  description: 'Manage professional experience',
};

export default async function ExperiencePage() {
  const experience = await fetchExperience();
  const sortedExperience = [...experience].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      <div className="bg-charcoal p-6 flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl uppercase mb-2">Professional Experience</h1>
          <p className="text-white/70">Manage your work history</p>
        </div>
      </div>

      <ExperienceList initialExperience={sortedExperience} />
    </div>
  );
}
