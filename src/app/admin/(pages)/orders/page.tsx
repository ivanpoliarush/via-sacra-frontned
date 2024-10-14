import { AdminLoginGuard } from '@/features/admin-page/ui/components/login-guard/login-guard';
import { OrdersPage } from '@/features/admin-page/ui/pages/orders-page/orders-page';
import { Suspense } from 'react';

const OrdersPageWrapper = () => {
	return (
		<Suspense>
			<AdminLoginGuard isAuth={true}>
				<OrdersPage />
			</AdminLoginGuard>
		</Suspense>
	);
};

export default OrdersPageWrapper;
