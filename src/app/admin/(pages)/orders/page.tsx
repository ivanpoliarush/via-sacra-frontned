import { AdminLoginGuard } from '@/features/admin-page/ui/components/login-guard/login-guard';
import { OrdersPage } from '@/features/admin-page/ui/pages/orders-page/orders-page';

const OrdersPageWrapper = () => {
	return (
		<AdminLoginGuard isAuth={true}>
			<OrdersPage />
		</AdminLoginGuard>
	);
};

export default OrdersPageWrapper;
