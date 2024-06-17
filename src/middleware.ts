import { getToken } from 'next-auth/jwt';
import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Extract the requested URL
  const url = req.nextUrl;

  // Get the session token from the request using next-auth/jwt
  const token = await getToken({ req });

  // Check if the session token exists
  if (!token) {
    // If no token and trying to access '/profile/:name', redirect to the 404 page
    if (url.pathname.startsWith('/profile/')) {
      return NextResponse.redirect(`${req.nextUrl.origin}/404`);
    }
  } else {
    // If token exists, allow access to '/profile/:name'
    if (url.pathname.startsWith('/profile/')) {
      return NextResponse.next();
    }
  }

  // Default response: continue as normal
  return NextResponse.next();
}

// Apply middleware to the paths you want
export const config = {
  matcher: ['/profile/:name*']
};
