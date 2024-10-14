import { AdminLoginGuard } from '@/features/admin-page/ui/components/login-guard/login-guard';
import { UsersPage } from '@/features/admin-page/ui/pages/users-page/users-page';
import { Suspense } from 'react';

const UsersPageWrapper = () => {
	return (
		<Suspense>
			<AdminLoginGuard isAuth={true}>
				<UsersPage />
			</AdminLoginGuard>
		</Suspense>
	);
};

export default UsersPageWrapper;
