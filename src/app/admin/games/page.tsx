import type { Metadata } from 'next';
import { fetchGames } from '@/app/lib/data-actions';
import GamesList from './GamesList';
import StatusColorsEditor from './StatusColorsEditor';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Manage Games - Admin',
  description: 'Manage tabletop games',
};

export default async function GamesPage() {
  const gamesData = await fetchGames();
  const sortedGames = [...gamesData.games].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      <div className="bg-charcoal p-6 flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl uppercase mb-2">Tabletop Games</h1>
          <p className="text-white/70">Manage your tabletop game designs</p>
        </div>
      </div>

      <StatusColorsEditor initialColors={gamesData.statusColor} />

      <GamesList initialGames={sortedGames} statusColors={gamesData.statusColor} />
    </div>
  );
}
