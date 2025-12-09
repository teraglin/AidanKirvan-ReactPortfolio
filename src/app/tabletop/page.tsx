import type { Metadata } from 'next';
import TabletopPageClient from './TabletopPageClient';

export const metadata: Metadata = {
  title: 'Tabletop Games - Aidan Kirvan',
  description: 'Tabletop game designs by Aidan Kirvan',
};

export default function TabletopPage() {
  return <TabletopPageClient />;
}
