import { NextResponse } from 'next/server';
import { parse } from 'cookie';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const { pathname, origin } = req.nextUrl;

  // Extract cookies
  const cookieHeader = req.headers.get('cookie');
  const cookies = parse(cookieHeader || '');
  const userAuthToken = cookies.userAuth;

  // Get NextAuth token (for JWT-based sessions)
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Pages
  const isSignUpPage = pathname === '/admin/signUp';
  const isSignInPage = pathname === '/admin/signIn';
  const isAuthPage = isSignUpPage || isSignInPage;

  // ✅ If already logged in, redirect away from auth pages
  if ((userAuthToken || token) && isAuthPage) {
    return NextResponse.redirect(new URL('/admin/addBlog', origin));
  }

  // ✅ Protect admin routes (e.g., addBlog)
  if (pathname.startsWith('/admin') && !isAuthPage && !(userAuthToken || token)) {
    return NextResponse.redirect(new URL('/admin/signIn', origin));
  }

  // ✅ Allow request to proceed
  return NextResponse.next();
}
