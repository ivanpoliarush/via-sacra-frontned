import { AdminLoginGuard } from '@/features/admin-page/ui/components/login-guard/login-guard';
import { LoginPage } from '@/features/admin-page/ui/pages/login-page/login-page';
import { Suspense } from 'react';

const LoginPageWrapper = () => {
	return (
		<Suspense>
			<AdminLoginGuard isAuth={false}>
				<LoginPage />
			</AdminLoginGuard>
		</Suspense>
	);
};

export default LoginPageWrapper;
