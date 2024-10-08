'use client';

import { Cart } from '@/assets/icons/cart';
import { ProductsModal } from '@/features/modals/products-modal/ui/main/main';
import { Button } from '@/shared/ui/button/button';
import { Input } from '@/shared/ui/input/input';
import { Select } from '@/shared/ui/select/select';
import clsx from 'clsx';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './main.module.css';
import { OrderFormProps } from './main.props';

export const OrderForm = ({
	type,
	className,
	translatedTexts,
	...props
}: OrderFormProps) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedValue, setSelectedValue] = useState('health');

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<div>
				<button
					className={styles.cartButton}
					onClick={() => setShowModal(true)}>
					<Cart />
					<div className={styles.countBadge}>
						<p>2</p>
					</div>
				</button>
				<div className={styles.inputs}>
					{type === 'candle' && (
						<Select
							onChange={setSelectedValue}
							selectedValue={selectedValue}
							options={[
								{
									value: 'health',
									label: translatedTexts.common.orderForm
										.candleType.health,
								},
								{
									value: 'rest',
									label: translatedTexts.common.orderForm
										.candleType.rest,
								},
							]}
						/>
					)}
					<Input
						manyRows
						className={styles.textarea}
						placeholder={translatedTexts.common.orderForm.names}
					/>
					<Input
						placeholder={translatedTexts.common.orderForm.name}
					/>
					<Input
						placeholder={translatedTexts.common.orderForm.email}
					/>
				</div>
			</div>
			<Button
				className={styles.button}
				label={translatedTexts.common.order}
			/>
			{typeof window !== 'undefined' &&
				createPortal(
					<ProductsModal
						isOpen={showModal}
						translatedTexts={translatedTexts}
						onClose={() => setShowModal(false)}
					/>,
					window.document.body,
				)}
		</div>
	);
};
