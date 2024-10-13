import { adminApi } from '@/shared/api/admin';
import { createStore } from '@/shared/lib/create-store';
import { AdminUserState } from '../types/admin-user.state';

export const useAdminUser = createStore<AdminUserState>((get, set) => ({
	password: '',
	loading: false,
	isAuthenticated: false,

	setPassword: password => {
		set({ password });
		localStorage.setItem('admin-password', password);
	},
	login: async () => {
		const { password } = get();
		if (!password) {
			return;
		}

		set({ loading: true });

		const { data } = await adminApi.post<{ success: boolean }>('/login', {
			password,
		});

		if (data && data.success) {
			set({ isAuthenticated: true });
		}

		set({ loading: false });
	},
	logout: () => {
		set({ isAuthenticated: false });
		localStorage.removeItem('admin-password');
	},
	init: () => {
		const password = localStorage.getItem('admin-password');
		if (password) {
			set({ password });
		}
	},
}));
