import { isValidElement } from 'react';
import { Checkbox } from '../checkbox/checkbox';
import styles from './table-column.module.css';
import { TableColumnProps } from './table-column.props';

export const TableColumn = ({
	columns,
	item,
	isSelected,
	handleSelect,
}: TableColumnProps) => {
	return (
		<div className={styles.wrapper}>
			<Checkbox
				selected={isSelected(item)}
				onChange={() => handleSelect(item)}
			/>
			<div className={styles.columns}>
				{columns.map((column, index) => (
					<div
						style={{ width: `${column.widthPercent}%` }}
						key={index}
						className={styles.column}>
						{column.changeRender ? (
							<>
								{isValidElement(
									column.changeRender(item[column.key]),
								) ? (
									column.changeRender(item[column.key])
								) : (
									<p className={styles.columnLabel}>
										{column.changeRender(item[column.key])}
									</p>
								)}
							</>
						) : (
							<p className={styles.columnLabel}>
								{item[column.key]}
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
