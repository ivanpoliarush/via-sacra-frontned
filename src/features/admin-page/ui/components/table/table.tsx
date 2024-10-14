'use client';

import { useState } from 'react';
import { TableFilters } from '../table-fiters/table-fiters';
import { TableHeader } from '../table-header/table-header';
import styles from './table.module.css';
import { TableProps } from './table.props';

export const Table = ({ filters, columns }: TableProps) => {
	const [filtersState, setFiltersState] = useState<
		Record<string, string | undefined>
	>({});

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
			<TableHeader columns={columns} />
		</div>
	);
};
