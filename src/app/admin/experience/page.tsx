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
    <div className="space-y-4 lg:space-y-6">
      <div className="bg-charcoal p-4 lg:p-6">
        <h1 className="text-white text-xl lg:text-2xl uppercase mb-1 lg:mb-2">Experience</h1>
        <p className="text-white/70 text-sm lg:text-base">Manage your work history</p>
      </div>

      <ExperienceList initialExperience={sortedExperience} />
    </div>
  );
}
