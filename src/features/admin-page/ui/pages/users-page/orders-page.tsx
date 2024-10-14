import { deleteUser, getUsers } from '@/features/admin-page/api/users';
import { Table } from '../../components/table/table';

export const OrdersPage = () => {
	const getData = async ({ email }: Record<string, string>, page: number) => {
		const response = await getUsers(
			page,
			email.trim().length ? email : undefined,
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
				isLastPage:
					response.pagination.page * response.pagination.limit >=
					response.pagination.total,
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
		<main>
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
						changeRender: value => new Date(value).toLocaleString(),
					},
				]}
				filters={[
					{
						type: 'search',
						label: 'Email',
						key: 'email',
					},
				]}
				getData={getData}
				deleteItems={deleteItems}
			/>
		</main>
	);
};
