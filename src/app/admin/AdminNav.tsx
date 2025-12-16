'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFormStatus } from 'react-dom';
import { logout } from '@/app/lib/actions';

interface AdminNavProps {
  username: string;
}

function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-orange text-black font-bold py-2 px-4 uppercase transition-all hover:bg-yellow disabled:opacity-50 text-sm"
    >
      {pending ? 'Signing out...' : 'Sign Out'}
    </button>
  );
}

const navItems = [
  { href: '/admin', label: 'Dashboard', exact: true },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/games', label: 'Games' },
  { href: '/admin/skills', label: 'Skills' },
  { href: '/admin/experience', label: 'Experience' },
];

export default function AdminNav({ username }: AdminNavProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full lg:w-64 bg-charcoal p-4 lg:min-h-screen lg:sticky lg:top-0">
      <div className="flex flex-col gap-4">
        <div className="border-b border-white/20 pb-4">
          <h1 className="text-white text-lg uppercase font-bold">Admin Panel</h1>
          <p className="text-white/70 text-sm">{username}</p>
        </div>

        <ul className="flex flex-row lg:flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-3 transition-colors uppercase text-sm ${
                  isActive(item.href, item.exact)
                    ? 'bg-orange text-black font-bold'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-white/20 pt-4 mt-auto">
          <Link
            href="/"
            className="block text-white/70 hover:text-white text-sm mb-3 transition-colors"
          >
            ← View Site
          </Link>
          <form action={logout}>
            <LogoutButton />
          </form>
        </div>
      </div>
    </nav>
  );
}
