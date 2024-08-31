
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  const protectedRoutes = ['/dashboard', '/profile'];
  const { pathname } = request.nextUrl;

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const res = await fetch('http://localhost:3001/verify-token', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!res.ok) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}
