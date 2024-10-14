export interface AdminUserState {
	loading: boolean;
	password: string;
	isAuthenticated: boolean;

	setPassword: (password: string) => void;
	login: () => Promise<boolean>;
	logout: () => void;
	init: () => Promise<void>;
}
