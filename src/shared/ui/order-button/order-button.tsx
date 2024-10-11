import { montserrat } from '@/shared/fonts';
import clsx from 'clsx';
import Link from 'next/link';
import { Button } from '../button/button';
import styles from './order-button.module.css';
import { OrderButtonProps } from './order-button.props';

export const OrderButton = ({ productsCount, label }: OrderButtonProps) => {
	return (
		<Link href="#order" className={styles.link}>
			<Button
				className={styles.button}
				label={
					<div className={styles.labelWrapper}>
						<p className={clsx(styles.label, montserrat.className)}>
							{label}
						</p>
						{productsCount > 0 && (
							<div className={styles.badge}>
								<p>{productsCount}</p>
							</div>
						)}
					</div>
				}
			/>
		</Link>
	);
};
