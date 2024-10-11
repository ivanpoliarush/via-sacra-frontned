import { api } from '@/shared/api';
import { PrayersOrder } from '../types';

export const submitPrayersOrder = async (order: PrayersOrder) => {
	const { data } = await api.post('/orders', order);
	return data;
};
