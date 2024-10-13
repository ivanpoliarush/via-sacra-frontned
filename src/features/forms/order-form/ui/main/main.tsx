'use client';

import { Cart } from '@/assets/icons/cart';
import { ProductsModal } from '@/features/modals/products-modal/ui/main/main';
import { ToastModal } from '@/features/modals/toast-modal/ui/main/main';
import { useInput } from '@/shared/hooks/use-input';
import { useToastMessage } from '@/shared/hooks/use-toast-message';
import { validateEmail } from '@/shared/lib/validations';
import { Button } from '@/shared/ui/button/button';
import { ClientSideWrapper } from '@/shared/ui/client-side-wrapper/client-side-wrapper';
import { Input } from '@/shared/ui/input/input';
import { Select } from '@/shared/ui/select/select';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './main.module.css';
import { OrderFormProps, SubmitContext } from './main.props';

export const OrderForm = ({
	type,
	products,
	disabled,
	className,
	handleSubmit,
	translatedTexts,
	...props
}: OrderFormProps) => {
	const [loading, setLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [candlesType, setCandlesType] = useState<'health' | 'rest'>('health');
	const [toastMessage, setToastMessage] = useToastMessage();
	const names = useInput({ validate: value => !!value });
	const name = useInput({ validate: value => !!value });
	const email = useInput({
		validate: value => !!value && validateEmail(value),
	});

	useEffect(() => {
		if (!products || !products.length) {
			setShowModal(false);
		}
	}, [products]);

	const onClick = async () => {
		if (!handleSubmit) {
			return;
		}

		try {
			setLoading(true);
			const context: SubmitContext = {
				values: {
					clientName: name.values.value,
					clientEmail: email.values.value,
					candlesType,
					names: names.values.value
						.split(',')
						.map(name => name.trim())
						.filter(Boolean),
				},

				setToastMessage,
				setErrors: keys => {
					if (keys.includes('clientName')) {
						name.functions.setError(true);
					}

					if (keys.includes('clientEmail')) {
						email.functions.setError(true);
					}

					if (keys.includes('names')) {
						names.functions.setError(true);
					}
				},
				setValues: values => {
					Object.entries(values).forEach(([key, value]) => {
						if (key === 'clientName' && typeof value === 'string') {
							name.functions.setValue(value);
						}

						if (
							key === 'clientEmail' &&
							typeof value === 'string'
						) {
							email.functions.setValue(value);
						}

						if (key === 'names' && typeof value === 'string') {
							names.functions.setValue(value);
						}

						if (key === 'candlesType' && Array.isArray(value)) {
							setCandlesType('health');
						}
					});
				},
			};

			const result = await handleSubmit(context);

			if (result?.reset) {
				names.functions.reset();
				name.functions.reset();
				email.functions.reset();
				setCandlesType('health');
			}
		} finally {
			setLoading(false);
		}
	};

	const handleChangeCandleType = (value: string) => {
		if (value !== 'health' && value !== 'rest') {
			return;
		}

		setCandlesType(value);
	};

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<div>
				{products && (
					<button
						className={clsx(styles.cartButton, {
							[styles.disabled]: products.length < 1,
						})}
						onClick={() => setShowModal(true)}>
						<Cart />
						{products.length > 0 && (
							<div className={styles.countBadge}>
								<p>{products.length}</p>
							</div>
						)}
					</button>
				)}
				<div className={styles.inputs}>
					{type === 'candle' && (
						<Select
							onChange={handleChangeCandleType}
							selectedValue={candlesType}
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
						{...names.events}
						{...names.values}
						className={styles.textarea}
						placeholder={translatedTexts.common.orderForm.names}
					/>
					<Input
						{...name.events}
						{...name.values}
						className={styles.input}
						placeholder={translatedTexts.common.orderForm.name}
					/>
					<Input
						{...email.events}
						{...email.values}
						className={styles.input}
						placeholder={translatedTexts.common.orderForm.email}
					/>
				</div>
			</div>
			<Button
				onClick={onClick}
				loading={loading}
				disabled={disabled}
				className={styles.button}
				label={translatedTexts.common.order}
			/>
			<ClientSideWrapper>
				{createPortal(
					<ToastModal
						isOpen={Boolean(toastMessage)}
						message={toastMessage}
					/>,
					window.document.body,
				)}
			</ClientSideWrapper>
			<ClientSideWrapper>
				{createPortal(
					<ProductsModal
						isOpen={showModal}
						products={products || []}
						translatedTexts={translatedTexts}
						onClose={() => setShowModal(false)}
					/>,
					window.document.body,
				)}
			</ClientSideWrapper>
		</div>
	);
};
