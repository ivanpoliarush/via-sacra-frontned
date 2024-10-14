'use client';

import { deleteOrder, getOrders } from '@/features/admin-page/api/orders';
import { capitalizeFirstLetter } from '@/shared/lib/text';
import { StateSelect } from '../../components/state-select/state-select';
import { Table } from '../../components/table/table';
import styles from './orders-page.module.css';

export const OrdersPage = () => {
	const getData = async (
		filters: Record<string, string | undefined>,
		page: number,
	) => {
		const response = await getOrders(page, filters);

		if (!response) {
			return {
				type: 'error',
				error: 'Failed to get telehram users. Try to reload the page',
			} as const;
		}

		return {
			type: 'success',
			items: response.data.map(order => ({
				id: order.id,
				clientName: order.client.name,
				clientEmail: order.client.email,
				names: order.options.names,
				cnaldeType: order.options.candleType,
				productType: order.products[0].type,
				state: order.status,
				products: order.products
					.map(product => product.name)
					.join(', '),
			})),
			pagination: {
				total: response.pagination.total,
				limit: response.pagination.limit,
			},
		} as const;
	};

	const deleteItems = async (items: any[]) => {
		const ids = items.map(item => item.id);
		const promises = ids.map(async id => {
			await deleteOrder(id);
		});

		await Promise.all(promises);
	};

	return (
		<main className={styles.wrapper}>
			<Table
				columns={[
					{
						label: 'Client name',
						key: 'clientName',
						widthPercent: 14,
					},
					{
						label: 'Client email',
						key: 'clientEmail',
						widthPercent: 14,
					},
					{
						label: 'Names',
						key: 'names',
						widthPercent: 14,
					},
					{
						label: 'Candle type',
						key: 'cnaldeType',
						widthPercent: 14,
						changeRender: value =>
							value ? capitalizeFirstLetter(value) : '—',
					},
					{
						label: 'Product type',
						key: 'productType',
						widthPercent: 14,
						changeRender: value => capitalizeFirstLetter(value),
					},
					{
						label: 'Products',
						key: 'products',
						widthPercent: 16,
					},
					{
						label: 'State',
						key: 'state',
						widthPercent: 14,
						changeRender: value => <StateSelect state={value} />,
					},
				]}
				filters={[
					{
						type: 'search',
						label: 'Client name',
						key: 'clientNameSearch',
						placeholder: 'Search by client name',
					},
					{
						type: 'search',
						label: 'Client email',
						key: 'clientEmailSearch',
						placeholder: 'Search by client email',
					},
					{
						type: 'select',
						label: 'State',
						key: 'state',
						defaultLabel: 'Select state',
						options: [
							{
								label: 'Pending',
								value: 'pending',
							},
							{
								label: 'In progress',
								value: 'in_progress',
							},
							{
								label: 'Completed',
								value: 'completed',
							},
						],
					},
					{
						type: 'select',
						label: 'Product type',
						key: 'productTypeSearch',
						defaultLabel: 'Select product type',
						options: [
							{
								label: 'Candle',
								value: 'candle',
							},
							{
								label: 'Prayer',
								value: 'prayer',
							},
						],
					},
				]}
				getId={item => item.id}
				getData={getData}
				deleteItems={deleteItems}
			/>
		</main>
	);
};
