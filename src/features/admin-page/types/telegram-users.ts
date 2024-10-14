export interface TelegramUser {
	id: string;
	name: string;
	telegramUserId: number;
	telegramChatId: number;
	authorized: boolean;
}

export interface TelegramUsersResponse {
	users: TelegramUser[];
	pagination: {
		total: number;
		page: number;
		limit: number;
	};
}
