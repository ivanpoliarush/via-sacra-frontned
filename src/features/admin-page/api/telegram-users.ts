import { adminApi } from '@/shared/api/admin';
import { TelegramUsersResponse } from '../types/telegram-users';

export const getTelegramUsers = async (page: number) => {
	try {
		const { data } = await adminApi.post<TelegramUsersResponse>(
			'/telegram/users',
			{
				page,
				limit: 10,
			},
		);

		return data;
	} catch (error) {
		console.log('Failed to get telegram users', error);
		return null;
	}
};

export const deleteTelegramUser = async (id: string) => {
	try {
		await adminApi.delete(`/telegram/users/${id}`);
		return true;
	} catch (error) {
		console.log('Failed to delete telegram user', error);
		return false;
	}
};
