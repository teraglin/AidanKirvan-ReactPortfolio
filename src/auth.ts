import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// Get environment variables at module load time
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || '';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';

async function compareBcrypt(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          console.error('Missing username or password');
          return null;
        }

        if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
          console.error('ADMIN_USERNAME or ADMIN_PASSWORD_HASH not configured');
          return null;
        }

        // Verify username
        if (credentials.username !== ADMIN_USERNAME) {
          console.error('Invalid username');
          return null;
        }

        // Verify password
        try {
          const isValid = await compareBcrypt(
            credentials.password as string,
            ADMIN_PASSWORD_HASH
          );

          if (!isValid) {
            console.error('Invalid password');
            return null;
          }

          // Return user object
          return {
            id: '1',
            name: ADMIN_USERNAME,
            email: `${ADMIN_USERNAME}@admin.local`,
          };
        } catch (error) {
          console.error('Bcrypt comparison error:', error);
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
