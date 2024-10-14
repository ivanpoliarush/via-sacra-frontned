'use client';

import { useAdminUser } from '@/features/admin-page/hooks/use-admin-user';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { AdminLoginGuardProps } from './login-guard.props';

export const AdminLoginGuard = ({ isAuth, children }: AdminLoginGuardProps) => {
	const { isAuthenticated } = useAdminUser();
	const pathname = usePathname();
	const params = useSearchParams();

	if (!isAuthenticated && isAuth) {
		return redirect(`/admin?redirect=${pathname}`);
	}

	if (isAuthenticated && !isAuth) {
		const redirectUrl = params.get('redirect') || '/admin/orders';
		return redirect(redirectUrl);
	}

	return <>{children}</>;
};
