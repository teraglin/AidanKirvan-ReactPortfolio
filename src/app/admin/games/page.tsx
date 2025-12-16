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
    <div className="space-y-4 lg:space-y-6">
      <div className="bg-charcoal p-4 lg:p-6">
        <h1 className="text-white text-xl lg:text-2xl uppercase mb-1 lg:mb-2">Tabletop Games</h1>
        <p className="text-white/70 text-sm lg:text-base">Manage your tabletop game designs</p>
      </div>

      <StatusColorsEditor initialColors={gamesData.statusColor} />

      <GamesList initialGames={sortedGames} statusColors={gamesData.statusColor} />
    </div>
  );
}
