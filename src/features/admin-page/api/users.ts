import { adminApi } from '@/shared/api/admin';
import { UsersResponse } from '../types/users';

export const getUsers = async (page: number, emailSearch?: string) => {
	try {
		const { data } = await adminApi.post<UsersResponse>('/user/all', {
			page,
			limit: 10,
			emailSearch,
		});

		return data;
	} catch (error) {
		console.log('Failed to get users', error);
		return null;
	}
};

export const deleteUser = async (id: string) => {
	try {
		await adminApi.delete(`/user/${id}`);
		return true;
	} catch (error) {
		console.log('Failed to delete user', error);
		return false;
	}
};
