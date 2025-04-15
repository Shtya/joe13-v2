
// import createMiddleware from 'next-intl/middleware';
// import { localePrefix, locales } from '@/navigation';
// import { NextResponse } from 'next/server';

// const intlMiddleware = createMiddleware({
//   locales,
//   localePrefix,
//   defaultLocale: 'ar',
// });

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // Check if the URL includes '/departments/undefined'
//   if (pathname.includes('/departments/undefined')) {
//     const redirectUrl = request.nextUrl.clone();
//     redirectUrl.pathname = '/';
//     return NextResponse.redirect(redirectUrl);
//   }

//   // Call the original next-intl middleware
//   return intlMiddleware(request);
// }

// // Apply middleware to all locale-prefixed routes and root
// export const config = {
//   matcher: [
//     '/((?!api|_next|.*\\..*).*)',
//     '/(ar|en)/:path*',
//     '/',
//   ],
// };


import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from '@/navigation';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'ar',
});

export function middleware(request) {
  const { nextUrl } = request;
  const { protocol, host, pathname, search } = nextUrl;

  // Force HTTPS
  if (protocol === 'http:') {
    const httpsUrl = new URL(`https://${host}${pathname}${search}`);
    return NextResponse.redirect(httpsUrl, 301);
  }

  // Redirect '/departments/undefined' to '/'
  if (pathname.includes('/departments/undefined')) {
    const redirectUrl = nextUrl.clone();
    redirectUrl.pathname = '/';
    return NextResponse.redirect(redirectUrl);
  }

  // Call next-intl middleware
  return intlMiddleware(request);
}

// Apply middleware to all locale-prefixed routes and root
export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
    '/(ar|en)/:path*',
    '/',
  ],
};

