'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-orange text-black font-bold py-3 px-6 uppercase transition-all hover:bg-yellow disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Signing in...' : 'Sign In'}
    </button>
  );
}

export default function LoginPageClient() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/admin';

  return (
    <div className="min-h-screen w-screen bg-dark-charcoal flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-charcoal p-8 shadow-card">
          <h1 className="text-white text-2xl uppercase mb-6 text-center">
            Admin Login
          </h1>

          <form action={dispatch} className="flex flex-col gap-4">
            <input
              type="hidden"
              name="callbackUrl"
              value={callbackUrl}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-white text-sm">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                className="bg-dark-charcoal text-white border border-charcoal px-4 py-2 focus:outline-none focus:border-orange"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-white text-sm">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="bg-dark-charcoal text-white border border-charcoal px-4 py-2 focus:outline-none focus:border-orange"
              />
            </div>

            <LoginButton />

            {errorMessage && (
              <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-2 text-sm">
                {errorMessage}
              </div>
            )}
          </form>
        </div>

        <a
          href="/"
          className="block text-center text-white mt-6 hover:text-orange transition-colors"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
