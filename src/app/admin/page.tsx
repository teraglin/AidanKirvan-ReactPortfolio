import type { Metadata } from 'next';
import { checkDataSeeded, fetchProjects, fetchGames, fetchSkills } from '@/app/lib/data-actions';
import AdminDashboard from './AdminDashboard';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Admin Control - Aidan Kirvan',
  description: 'Admin dashboard for handling site content',
};

export default async function AdminPage() {
  const [isSeeded, projects, gamesData, skills] = await Promise.all([
    checkDataSeeded(),
    fetchProjects(),
    fetchGames(),
    fetchSkills(),
  ]);

  return (
    <AdminDashboard
      isSeeded={isSeeded}
      projectCount={projects.length}
      gameCount={gamesData.games.length}
      skillCategoryCount={Object.keys(skills).length}
    />
  );
}
