export interface User {
	id: string;
	email: string;
	registeredAt: string;
}

export interface UsersResponse {
	data: User[];
	pagination: {
		total: number;
		page: number;
		limit: number;
	};
}
