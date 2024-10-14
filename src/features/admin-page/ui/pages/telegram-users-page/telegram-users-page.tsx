'use client';

import {
	deleteTelegramUser,
	getTelegramUsers,
} from '@/features/admin-page/api/telegram-users';
import { Table } from '../../components/table/table';
import styles from './telegram-users-page.module.css';

export const TelegramUsersPage = () => {
	const getData = async (
		_: Record<string, string | undefined>,
		page: number,
	) => {
		const response = await getTelegramUsers(page);

		if (!response) {
			return {
				type: 'error',
				error: 'Failed to get telehram users. Try to reload the page',
			} as const;
		}

		return {
			type: 'success',
			items: response.users,
			pagination: {
				total: response.pagination.total,
				limit: response.pagination.limit,
			},
		} as const;
	};

	const deleteItems = async (items: any[]) => {
		const ids = items.map(item => item.id);
		const promises = ids.map(async id => {
			await deleteTelegramUser(id);
		});

		await Promise.all(promises);
	};

	return (
		<main className={styles.wrapper}>
			<Table
				columns={[
					{
						label: 'User name',
						key: 'name',
						widthPercent: 60,
					},
					{
						label: 'User ID',
						key: 'telegramUserId',
						widthPercent: 20,
					},
					{
						label: 'Chat ID',
						key: 'telegramChatId',
						widthPercent: 20,
					},
				]}
				getId={item => item.id}
				getData={getData}
				deleteItems={deleteItems}
			/>
		</main>
	);
};
