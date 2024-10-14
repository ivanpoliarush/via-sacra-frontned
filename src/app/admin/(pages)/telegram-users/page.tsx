import { AdminLoginGuard } from '@/features/admin-page/ui/components/login-guard/login-guard';
import { TelegramUsersPage } from '@/features/admin-page/ui/pages/telegram-users-page/telegram-users-page';

const TelegramUsersPageWrapper = () => {
	return (
		<AdminLoginGuard isAuth={true}>
			<TelegramUsersPage />
		</AdminLoginGuard>
	);
};

export default TelegramUsersPageWrapper;
