'use client';

import { useFormStatus } from 'react-dom';
import { logout } from '@/app/lib/actions';

interface AdminPageClientProps {
  username: string;
}

function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-orange text-black font-bold py-2 px-6 uppercase transition-all hover:bg-yellow disabled:opacity-50"
    >
      {pending ? 'Signing out...' : 'Sign Out'}
    </button>
  );
}

export default function AdminPageClient({ username }: AdminPageClientProps) {
  return (
    <div className="min-h-screen w-screen bg-dark-charcoal">
      <div className="max-w-[1440px] mx-auto px-8 py-8 lg:px-32">
        <div className="flex justify-between items-center mb-8 bg-charcoal p-6">
          <div>
            <h1 className="text-white text-2xl uppercase mb-2">
              Admin Dashboard
            </h1>
            <p className="text-white/70">Welcome, {username}</p>
          </div>

          <form action={logout}>
            <LogoutButton />
          </form>
        </div>

        <div className="bg-charcoal p-8 shadow-card">
          <h2 className="text-white text-xl uppercase mb-4">
            Site Administration
          </h2>
          <p className="text-white/70">
            This is your admin control panel. Future features will appear here.
          </p>
        </div>

        <a
          href="/"
          className="inline-block text-white mt-6 hover:text-orange transition-colors"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
