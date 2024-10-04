import { Bin } from '@/assets/icons/bin';
import { meaCulpa } from '@/shared/fonts';
import clsx from 'clsx';
import styles from './product.module.css';
import { ProductProps } from './product.props';

export const Product = ({ title, price }: ProductProps) => {
	return (
		<div className={styles.item}>
			<p className={styles.title}>{title}</p>
			<div className={styles.additionalInfo}>
				<p
					className={clsx(
						meaCulpa.className,
						styles.price,
					)}>{`${price}$`}</p>
				<button className={styles.deleteButton}>
					<Bin />
				</button>
			</div>
		</div>
	);
};
