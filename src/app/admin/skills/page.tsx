import type { Metadata } from 'next';
import { fetchSkills } from '@/app/lib/data-actions';
import SkillsList from './SkillsList';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Manage Skills - Admin',
  description: 'Manage skill categories',
};

export default async function SkillsPage() {
  const skills = await fetchSkills();

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="bg-charcoal p-4 lg:p-6">
        <h1 className="text-white text-xl lg:text-2xl uppercase mb-1 lg:mb-2">Skills</h1>
        <p className="text-white/70 text-sm lg:text-base">Manage your skill categories</p>
      </div>

      <SkillsList initialSkills={skills} />
    </div>
  );
}
