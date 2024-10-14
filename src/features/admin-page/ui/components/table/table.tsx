'use client';

import { useAsyncFunction } from '@/features/admin-page/hooks/use-async-function';
import { useState } from 'react';
import { TableBody } from '../table-body/table-body';
import { TableFilters } from '../table-fiters/table-fiters';
import { TableHeader } from '../table-header/table-header';
import styles from './table.module.css';
import { TableProps } from './table.props';

export const Table = ({ filters, columns, getData }: TableProps) => {
	const [page, setPage] = useState<number>(1);
	const [filtersState, setFiltersState] = useState<
		Record<string, string | undefined>
	>({});

	const { data, loading, error } = useAsyncFunction(
		() => getData(filtersState, page),
		{ initialExecute: true, initialLoading: true },
	);

	return (
		<div className={styles.wrapper}>
			<TableFilters
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
				columns={columns}
				pagination={{
					isFirstPage: page === 1,
					isLastPage: false,

					nextPage: () => setPage(page + 1),
					prevPage: () => setPage(Math.max(1, page - 1)),
				}}
			/>
			<TableBody
				columns={columns}
				data={data}
				loading={loading}
				error={error}
			/>
		</div>
	);
};
