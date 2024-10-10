import { api } from '@/shared/api';

export const subscribeNewsletter = async (email: string) => {
	const { data } = await api.post('/user/register', { email });
	return data;
};
