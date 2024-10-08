import { getDictionary } from '@/app/[lang]/dictionaries';
import { montserrat } from '@/shared/fonts';
import clsx from 'clsx';
import { Button } from '../button/button';
import styles from './order-button.module.css';
import { OrderButtonProps } from './order-button.props';

export const OrderButton = async ({
	productsCount,
	lang,
}: OrderButtonProps) => {
	const texts = await getDictionary(lang);

	return (
		<Button
			className={styles.button}
			label={
				<div className={styles.labelWrapper}>
					<p className={clsx(styles.label, montserrat.className)}>
						{texts.common.order}
					</p>
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
