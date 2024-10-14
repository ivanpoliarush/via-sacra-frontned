import { Triangle } from '@/assets/icons/triangle';
import clsx from 'clsx';
import { useState } from 'react';
import { Checkbox } from '../checkbox/checkbox';
import styles from './table-header.module.css';
import { TableHeaderProps } from './table-header.props';

export const TableHeader = ({ columns, pagination }: TableHeaderProps) => {
	const [selected, setSelected] = useState(false);

	return (
		<div className={styles.wrapper}>
			<Checkbox selected={selected} onChange={setSelected} />
			<div className={styles.columns}>
				{columns.map(column => (
					<div
						style={{ width: `${column.widthPercent}%` }}
						className={styles.column}>
						<p className={styles.columnLabel}>{column.label}</p>
					</div>
				))}
			</div>
			<div className={styles.paginationActitions}>
				{!pagination.isFirstPage && (
					<button
						className={styles.paginationButton}
						onClick={pagination.prevPage}>
						<Triangle
							className={clsx(
								styles.triangle,
								styles.leftTriangle,
							)}
						/>
					</button>
				)}
				{!pagination.isLastPage && (
					<button
						className={styles.paginationButton}
						onClick={pagination.nextPage}>
						<Triangle
							className={clsx(
								styles.triangle,
								styles.rightTriangle,
							)}
						/>
					</button>
				)}
			</div>
		</div>
	);
};
