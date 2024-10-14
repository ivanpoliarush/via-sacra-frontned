import clsx from 'clsx';
import { TableColumn } from '../table-column/table-column';
import styles from './table-body.module.css';
import { TableBodyProps } from './table-body.props';

export const TableBody = ({
	loading,
	error,
	data,
	columns,
}: TableBodyProps) => {
	if (loading) {
		return (
			<div className={clsx(styles.wrapper, styles.center)}>
				<div className={styles.loader} />
			</div>
		);
	}

	if (error || (data && data.type === 'error')) {
		return (
			<div className={clsx(styles.wrapper, styles.center)}>
				<div className={styles.errorForm}>
					<p className={styles.message}>
						Somethign went wrong. Try to reload the page
					</p>
					<button
						className={styles.errorButton}
						onClick={() => window.location.reload()}>
						Reload
					</button>
				</div>
			</div>
		);
	}

	if (!data || !data.items.length) {
		return (
			<div className={clsx(styles.wrapper, styles.center)}>
				<p className={styles.message}>No data found</p>
			</div>
		);
	}

	return (
		<div className={styles.wrapper}>
			{data.items.map((item, index) => (
				<TableColumn item={item} key={index} columns={columns} />
			))}
		</div>
	);
};
