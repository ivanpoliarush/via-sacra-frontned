import { AdminLoginGuard } from '@/features/admin-page/ui/components/login-guard/login-guard';
import { TelegramUsersPage } from '@/features/admin-page/ui/pages/telegram-users-page/telegram-users-page';
import { Suspense } from 'react';

const TelegramUsersPageWrapper = () => {
	return (
		<Suspense>
			<AdminLoginGuard isAuth={true}>
				<TelegramUsersPage />
			</AdminLoginGuard>
		</Suspense>
	);
};

export default TelegramUsersPageWrapper;
