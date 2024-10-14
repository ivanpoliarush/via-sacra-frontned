'use client';

import { useAsyncFunction } from '@/features/admin-page/hooks/use-async-function';
import { useEffect, useState } from 'react';
import { TableBody } from '../table-body/table-body';
import { TableFilters } from '../table-fiters/table-fiters';
import { TableHeader } from '../table-header/table-header';
import styles from './table.module.css';
import { TableProps } from './table.props';

export const Table = ({
	filters,
	columns,
	getData,
	getId,
	deleteItems,
}: TableProps) => {
	const [page, setPage] = useState<number>(1);
	const [selectedRows, setSelectedRows] = useState<string[]>([]);
	const [filtersState, setFiltersState] = useState<
		Record<string, string | undefined>
	>({});

	const {
		data,
		error,
		loading,
		execute: refetch,
	} = useAsyncFunction(() => getData(filtersState, page), {
		initialExecute: true,
		initialLoading: true,
	});

	useEffect(() => {
		setSelectedRows([]);
	}, [data, loading]);

	const isSelected = (item: any) => {
		const id = getId(item);
		return selectedRows.includes(id);
	};

	const isAllSelected = () => {
		if (!data || data.type !== 'success') {
			return false;
		}

		const ids = data.items.map(getId);
		return (
			ids.every(id => selectedRows.includes(id)) &&
			selectedRows.length > 0
		);
	};

	const handleSelectAll = () => {
		if (!data || data.type !== 'success') {
			return;
		}

		if (isAllSelected()) {
			setSelectedRows([]);
		} else {
			const ids = data.items.map(getId);
			setSelectedRows(ids);
		}
	};

	const handleSelect = (item: any) => {
		const id = getId(item);
		if (selectedRows.includes(id)) {
			setSelectedRows(selectedRows.filter(rowId => rowId !== id));
		} else {
			setSelectedRows([...selectedRows, id]);
		}
	};

	const handleDelete = async () => {
		if (!data || data.type !== 'success') {
			return false;
		}

		const items = data.items.filter(item =>
			selectedRows.includes(getId(item)),
		);
		setSelectedRows([]);
		await deleteItems(items);
		refetch();
	};

	const handleChangePage = (page: number) => {
		setPage(page);
		refetch();
	};

	return (
		<div className={styles.wrapper}>
			<TableFilters
				selectedRows={selectedRows}
				handleDelete={handleDelete}
				onApply={refetch}
				onChangeFilter={(key, value) =>
					setFiltersState({
						...filtersState,
						[key]: value,
					})
				}
				filtersState={filtersState}
				filters={filters}
			/>
			<TableHeader
				isAllSelected={isAllSelected()}
				handleSelectAll={handleSelectAll}
				columns={columns}
				pagination={{
					isFirstPage: page === 1,
					isLastPage:
						data && data.type === 'success'
							? Math.ceil(
									(data.pagination.total || 1) /
										data.pagination.limit,
								) === page
							: false,

					nextPage: () => handleChangePage(page + 1),
					prevPage: () => handleChangePage(Math.max(1, page - 1)),
				}}
			/>
			<TableBody
				handleSelect={handleSelect}
				isSelected={isSelected}
				columns={columns}
				data={data}
				loading={loading}
				error={error}
			/>
		</div>
	);
};
