import { Button } from '../button/button';
import styles from './order-button.module.css';
import { OrderButtonProps } from './order-button.props';

export const OrderButton = ({ productsCount }: OrderButtonProps) => {
	return (
		<Button
			className={styles.button}
			label={
				<div className={styles.labelWrapper}>
					<p className={styles.label}>Ordem</p>
					{productsCount && (
						<div className={styles.badge}>
							<p>{productsCount}</p>
						</div>
					)}
				</div>
			}
		/>
	);
};
