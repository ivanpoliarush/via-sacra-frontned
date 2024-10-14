import { adminApi } from '@/shared/api/admin';
import { OrderFilters, OrdersResponse } from '../types/orders';

export const getOrders = async (page: number, filters: OrderFilters) => {
	try {
		const { data } = await adminApi.post<OrdersResponse>('/orders/all', {
			page,
			limit: 10,
			...filters,
		});

		return data;
	} catch (error) {
		console.log('Failed to get orders', error);
		return null;
	}
};

export const deleteOrder = async (id: string) => {
	try {
		await adminApi.delete(`/orders/${id}`);
		return true;
	} catch (error) {
		console.log('Failed to delete order', error);
		return false;
	}
};
