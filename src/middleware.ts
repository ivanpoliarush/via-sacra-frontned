import { NextRequest, NextResponse } from 'next/server';

const locales = ['pt', 'sp'];
const defaultLocale = 'pt';

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	if (
		pathname.includes('/images') ||
		pathname.includes('/admin') ||
		pathname.includes('/favicon')
	) {
		return;
	}

	const pathnameHasLocale = locales.some(
		locale =>
			pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) {
		return;
	}

	request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ['/((?!_next).*)'],
};
