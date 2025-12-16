import { handlers } from '@/auth';

// Force Node.js runtime (not Edge) for bcryptjs compatibility
export const runtime = 'nodejs';

export const { GET, POST } = handlers;
