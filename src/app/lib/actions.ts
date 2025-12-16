'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { headers } from 'next/headers';
import {
  isLockedOut,
  recordFailedLogin,
  clearLoginAttempts,
  LOCKOUT_DURATION_MS,
} from '@/lib/blobs';

function getClientIdentifier(): string {
  const headersList = headers();
  // Try to get real IP from various headers (Netlify/proxies set these)
  const forwardedFor = headersList.get('x-forwarded-for');
  const realIp = headersList.get('x-real-ip');
  const netlifyIp = headersList.get('x-nf-client-connection-ip');

  // Use the first available IP, or fallback to 'unknown'
  const ip = netlifyIp || realIp || forwardedFor?.split(',')[0]?.trim() || 'unknown';
  return ip;
}

function formatLockoutTime(ms: number): string {
  const minutes = Math.ceil(ms / 60000);
  if (minutes === 1) return '1 minute';
  return `${minutes} minutes`;
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  const clientId = getClientIdentifier();

  // Check if locked out
  const lockStatus = await isLockedOut(clientId);
  if (lockStatus.locked) {
    const timeRemaining = formatLockoutTime(lockStatus.remainingMs || LOCKOUT_DURATION_MS);
    return `Too many failed attempts. Please try again in ${timeRemaining}.`;
  }

  try {
    const username = formData.get('username');
    const password = formData.get('password');
    const callbackUrl = formData.get('callbackUrl');

    console.log('Auth attempt - Username:', username, 'Has password:', !!password);

    await signIn('credentials', {
      username: username ? String(username) : '',
      password: password ? String(password) : '',
      redirectTo: callbackUrl ? String(callbackUrl) : '/admin',
    });

    // If we get here, login was successful - clear any failed attempts
    await clearLoginAttempts(clientId);
  } catch (error) {
    console.error('Auth error:', error);
    if (error instanceof AuthError) {
      // Record failed attempt
      const result = await recordFailedLogin(clientId);

      if (result.locked) {
        const timeRemaining = formatLockoutTime(LOCKOUT_DURATION_MS);
        return `Too many failed attempts. Please try again in ${timeRemaining}.`;
      }

      const attemptsLeft = result.attemptsRemaining;
      const warningMsg = attemptsLeft <= 2 && attemptsLeft > 0
        ? ` (${attemptsLeft} attempt${attemptsLeft === 1 ? '' : 's'} remaining)`
        : '';

      switch (error.type) {
        case 'CredentialsSignin':
          return `Invalid credentials.${warningMsg}`;
        case 'CallbackRouteError':
          return `Invalid credentials.${warningMsg}`;
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: '/' });
}
