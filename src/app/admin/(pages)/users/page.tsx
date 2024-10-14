import { AdminLoginGuard } from '@/features/admin-page/ui/components/login-guard/login-guard';
import { UsersPage } from '@/features/admin-page/ui/pages/users-page/users-page';

const UsersPageWrapper = () => {
	return (
		<AdminLoginGuard isAuth={true}>
			<UsersPage />
		</AdminLoginGuard>
	);
};

export default UsersPageWrapper;
