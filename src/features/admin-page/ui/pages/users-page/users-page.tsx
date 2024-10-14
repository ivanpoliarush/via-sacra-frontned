'use client';

import { deleteUser, getUsers } from '@/features/admin-page/api/users';
import { Table } from '../../components/table/table';
import styles from './users-page.module.css';

export const UsersPage = () => {
	const getData = async (
		{ email }: Record<string, string | undefined>,
		page: number,
	) => {
		const response = await getUsers(
			page,
			email && email.trim().length ? email : undefined,
		);

		if (!response) {
			return {
				type: 'error',
				error: 'Failed to get users. Try to reload the page',
			} as const;
		}

		return {
			type: 'success',
			items: response.data,
			pagination: {
				total: response.pagination.total,
				limit: response.pagination.limit,
			},
		} as const;
	};

	const deleteItems = async (items: any[]) => {
		const ids = items.map(item => item.id);
		const promises = ids.map(async id => {
			await deleteUser(id);
		});

		await Promise.all(promises);
	};

	return (
		<main className={styles.wrapper}>
			<Table
				columns={[
					{
						label: 'Email',
						key: 'email',
						widthPercent: 50,
					},
					{
						label: 'Registered at',
						key: 'registeredAt',
						widthPercent: 50,
						changeRender: value =>
							Intl.DateTimeFormat('en-US', {
								year: '2-digit',
								month: 'short',
								day: '2-digit',
							}).format(new Date(value)),
					},
				]}
				filters={[
					{
						type: 'search',
						label: 'Email',
						key: 'email',
						placeholder: 'Search by email',
					},
				]}
				getId={item => item.id}
				getData={getData}
				deleteItems={deleteItems}
			/>
		</main>
	);
};
