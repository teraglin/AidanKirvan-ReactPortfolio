import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// Get environment variables at module load time
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || '';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';
const AUTH_SECRET = process.env.AUTH_SECRET;

// Debug: Log env var status (not values) at startup
console.log('[Auth] Environment check:', {
  hasUsername: !!ADMIN_USERNAME,
  hasPasswordHash: !!ADMIN_PASSWORD_HASH,
  hashLength: ADMIN_PASSWORD_HASH.length,
  hashPrefix: ADMIN_PASSWORD_HASH.substring(0, 4),
  hasAuthSecret: !!AUTH_SECRET,
});

async function compareBcrypt(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  trustHost: true,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('[Auth] authorize called');

        if (!credentials?.username || !credentials?.password) {
          console.error('[Auth] Missing username or password');
          return null;
        }

        if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
          console.error('[Auth] ADMIN_USERNAME or ADMIN_PASSWORD_HASH not configured');
          console.error('[Auth] ADMIN_USERNAME length:', ADMIN_USERNAME.length);
          console.error('[Auth] ADMIN_PASSWORD_HASH length:', ADMIN_PASSWORD_HASH.length);
          return null;
        }

        // Verify username
        if (credentials.username !== ADMIN_USERNAME) {
          console.error('[Auth] Invalid username');
          return null;
        }

        // Verify password
        try {
          console.log('[Auth] Comparing password with hash...');
          const isValid = await compareBcrypt(
            credentials.password as string,
            ADMIN_PASSWORD_HASH
          );
          console.log('[Auth] Password comparison result:', isValid);

          if (!isValid) {
            console.error('[Auth] Invalid password');
            return null;
          }

          // Return user object
          console.log('[Auth] Login successful');
          return {
            id: '1',
            name: ADMIN_USERNAME,
            email: `${ADMIN_USERNAME}@admin.local`,
          };
        } catch (error) {
          console.error('[Auth] Bcrypt comparison error:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.AUTH_SECRET,
});
