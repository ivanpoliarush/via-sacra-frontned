import { AdminLoginGuard } from '@/features/admin-page/ui/components/login-guard/login-guard';
import { LoginPage } from '@/features/admin-page/ui/pages/login-page/login-page';

const LoginPageWrapper = () => {
	return (
		<AdminLoginGuard isAuth={false}>
			<LoginPage />
		</AdminLoginGuard>
	);
};

export default LoginPageWrapper;
