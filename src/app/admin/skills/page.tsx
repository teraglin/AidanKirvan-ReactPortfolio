import type { Metadata } from 'next';
import { fetchSkills } from '@/app/lib/data-actions';
import SkillsList from './SkillsList';

export const metadata: Metadata = {
  title: 'Manage Skills - Admin',
  description: 'Manage skill categories',
};

export default async function SkillsPage() {
  const skills = await fetchSkills();

  return (
    <div className="space-y-6">
      <div className="bg-charcoal p-6 flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl uppercase mb-2">Skills</h1>
          <p className="text-white/70">Manage your skill categories</p>
        </div>
      </div>

      <SkillsList initialSkills={skills} />
    </div>
  );
}
