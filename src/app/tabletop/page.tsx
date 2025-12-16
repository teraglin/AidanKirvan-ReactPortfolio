import type { Metadata } from 'next';
import TabletopPageClient from './TabletopPageClient';
import { fetchGames } from '@/app/lib/data-actions';

export const metadata: Metadata = {
  title: 'Tabletop Games - Aidan Kirvan',
  description: 'Tabletop game designs by Aidan Kirvan',
};

export default async function TabletopPage() {
  const gamesData = await fetchGames();

  return <TabletopPageClient gamesData={gamesData} />;
}
