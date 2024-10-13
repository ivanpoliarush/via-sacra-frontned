import axios from 'axios';

export const adminApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

adminApi.interceptors.request.use(config => {
	const password = localStorage.getItem('admin-password');
	if (password) {
		config.headers.Authorization = `Bearer ${password}`;
	}

	return config;
});
