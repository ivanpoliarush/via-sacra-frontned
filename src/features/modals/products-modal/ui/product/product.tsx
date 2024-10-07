import { Bin } from '@/assets/icons/bin';
import styles from './product.module.css';
import { ProductProps } from './product.props';

export const Product = ({ title }: ProductProps) => {
	return (
		<div className={styles.item}>
			<p className={styles.title}>{title}</p>
			<div className={styles.additionalInfo}>
				<button className={styles.deleteButton}>
					<Bin />
				</button>
			</div>
		</div>
	);
};
