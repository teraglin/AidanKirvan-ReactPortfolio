import type { Metadata } from 'next';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import AdminPageClient from './AdminPageClient';

export const metadata: Metadata = {
  title: 'Admin Control - Aidan Kirvan',
  description: 'Admin dashboard for handling site content',
};

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return <AdminPageClient username={session.user.name || 'Admin'} />;
}
