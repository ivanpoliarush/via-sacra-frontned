import { adminApi } from '@/shared/api/admin';
import { createStore } from '@/shared/lib/create-store';
import { AdminUserState } from '../types/admin-user.state';

export const useAdminUser = createStore<AdminUserState>((get, set) => ({
	password: '',
	loading: true,
	isAuthenticated: false,

	setPassword: password => {
		set({ password });
		localStorage.setItem('admin-password', password);
	},
	login: async () => {
		try {
			const { password } = get();
			if (!password) {
				return false;
			}

			const { data } = await adminApi.post<{ success: boolean }>(
				'/auth/login',
				{
					password,
				},
			);

			if (data && data.success) {
				set({ isAuthenticated: true });
				return true;
			} else {
				return false;
			}
		} catch (error) {
			console.log('Failed to login', error);
			return false;
		}
	},
	logout: () => {
		set({ isAuthenticated: false });
		localStorage.removeItem('admin-password');
	},
	init: async () => {
		const password = localStorage.getItem('admin-password');
		if (password) {
			set({ password });
		}

		set({ loading: true });

		const { login } = get();

		await login();

		set({ loading: false });
	},
}));
