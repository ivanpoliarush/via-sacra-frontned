export interface AdminUserState {
	loading: boolean;
	password: string;
	isAuthenticated: boolean;

	setPassword: (password: string) => void;
	login: () => Promise<void>;
	logout: () => void;
	init: () => void;
}
