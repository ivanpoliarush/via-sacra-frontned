import { api } from '@/shared/api';
import { CandlesOrder } from '../types';

export const submitCandlesOrder = async (order: CandlesOrder) => {
	const { data } = await api.post('/orders', order);
	return data;
};
