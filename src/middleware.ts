import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const response = NextResponse.next();

  // Set no-cache headers for admin, auth, and login routes
  // This ensures Netlify CDN doesn't cache authenticated pages
  if (
    req.nextUrl.pathname.startsWith('/admin') ||
    req.nextUrl.pathname.startsWith('/api/auth') ||
    req.nextUrl.pathname === '/login'
  ) {
    response.headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  return response;
});

export const config = {
  // Match all paths except:
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - public folder assets
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
