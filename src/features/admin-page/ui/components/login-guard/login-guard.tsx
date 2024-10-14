'use client';

import { useAdminUser } from '@/features/admin-page/hooks/use-admin-user';
import { redirect } from 'next/navigation';
import { AdminLoginGuardProps } from './login-guard.props';

export const AdminLoginGuard = ({ isAuth, children }: AdminLoginGuardProps) => {
	const { isAuthenticated } = useAdminUser();

	if (!isAuthenticated && isAuth) {
		return redirect('/admin');
	}

	if (isAuthenticated && !isAuth) {
		return redirect('/admin/orders');
	}

	return <>{children}</>;
};
