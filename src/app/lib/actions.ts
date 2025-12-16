'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
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
  } catch (error) {
    console.error('Auth error:', error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        case 'CallbackRouteError':
          return 'Invalid credentials.';
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
