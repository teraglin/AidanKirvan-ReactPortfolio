'use client';

import { useState } from 'react';
import { seedData } from '@/app/lib/data-actions';
import Link from 'next/link';

interface AdminDashboardProps {
  isSeeded: boolean;
  projectCount: number;
  gameCount: number;
  skillCategoryCount: number;
}

export default function AdminDashboard({
  isSeeded,
  projectCount,
  gameCount,
  skillCategoryCount,
}: AdminDashboardProps) {
  const [seeding, setSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<string | null>(null);

  const handleSeedData = async () => {
    setSeeding(true);
    setSeedResult(null);

    const result = await seedData();

    if (result.success && result.counts) {
      setSeedResult(
        `Seeded ${result.counts.projects} projects, ${result.counts.games} games, ${result.counts.skills} skill categories`
      );
    } else {
      setSeedResult(result.error || 'Failed to seed data');
    }

    setSeeding(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-charcoal p-6">
        <h1 className="text-white text-2xl uppercase mb-2">Dashboard</h1>
        <p className="text-white/70">Manage your portfolio content</p>
      </div>

      {!isSeeded && (
        <div className="bg-yellow/20 border border-yellow p-4">
          <h2 className="text-yellow font-bold uppercase mb-2">
            Initial Setup Required
          </h2>
          <p className="text-white/70 mb-4">
            No data found in Netlify Blobs. Click the button below to seed the
            database with your existing static data.
          </p>
          <button
            onClick={handleSeedData}
            disabled={seeding}
            className="bg-yellow text-black font-bold py-2 px-6 uppercase transition-all hover:bg-orange disabled:opacity-50"
          >
            {seeding ? 'Seeding...' : 'Seed Data'}
          </button>
          {seedResult && (
            <p className="mt-3 text-white/70">{seedResult}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/admin/projects"
          className="bg-charcoal p-6 hover:bg-charcoal/80 transition-colors group"
        >
          <h3 className="text-white uppercase mb-2 group-hover:text-orange transition-colors">
            Projects
          </h3>
          <p className="text-3xl font-bold text-orange">{projectCount}</p>
          <p className="text-white/50 text-sm">Manage portfolio projects</p>
        </Link>

        <Link
          href="/admin/games"
          className="bg-charcoal p-6 hover:bg-charcoal/80 transition-colors group"
        >
          <h3 className="text-white uppercase mb-2 group-hover:text-orange transition-colors">
            Games
          </h3>
          <p className="text-3xl font-bold text-orange">{gameCount}</p>
          <p className="text-white/50 text-sm">Manage tabletop games</p>
        </Link>

        <Link
          href="/admin/skills"
          className="bg-charcoal p-6 hover:bg-charcoal/80 transition-colors group"
        >
          <h3 className="text-white uppercase mb-2 group-hover:text-orange transition-colors">
            Skills
          </h3>
          <p className="text-3xl font-bold text-orange">{skillCategoryCount}</p>
          <p className="text-white/50 text-sm">Manage skill categories</p>
        </Link>
      </div>

      {isSeeded && (
        <div className="bg-charcoal p-6">
          <h2 className="text-white uppercase mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/projects"
              className="bg-blue text-black font-bold py-2 px-4 uppercase text-sm hover:bg-opacity-90 transition-opacity"
            >
              + Add Project
            </Link>
            <Link
              href="/admin/games"
              className="bg-blue text-black font-bold py-2 px-4 uppercase text-sm hover:bg-opacity-90 transition-opacity"
            >
              + Add Game
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
