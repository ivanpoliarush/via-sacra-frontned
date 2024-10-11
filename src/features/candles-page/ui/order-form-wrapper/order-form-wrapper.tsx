'use client';

import { OrderForm } from '@/features/forms/order-form/ui/main/main';
import {
	SubmitContext,
	SubmitFormKey,
} from '@/features/forms/order-form/ui/main/main.props';
import { validateEmail } from '@/shared/lib/validations';
import { submitCandlesOrder } from '../../api';
import { useCandlesStore } from '../../hooks/use-candles-store';
import styles from './order-form-wrapper.module.css';
import { OrderFormWrapperProps } from './order-form-wrapper.props';

export const OrderFormWrapper = ({
	translatedTexts,
}: OrderFormWrapperProps) => {
	const { products, removeProduct, clear } = useCandlesStore();

	const handleSubmit = async (ctx: SubmitContext) => {
		try {
			const errorsKeys: SubmitFormKey[] = [];

			if (!ctx.values.clientName) {
				errorsKeys.push('clientName');
			}

			if (
				!ctx.values.clientEmail ||
				!validateEmail(ctx.values.clientEmail)
			) {
				errorsKeys.push('clientEmail');
			}

			if (!ctx.values.names.length) {
				errorsKeys.push('names');
			}

			if (errorsKeys.length) {
				ctx.setErrors(errorsKeys);
				return;
			}

			await submitCandlesOrder({
				client: {
					name: ctx.values.clientName,
					email: ctx.values.clientEmail,
				},
				options: {
					names: ctx.values.names,
					candleType: ctx.values.candlesType,
				},
				products: useCandlesStore.getStore().products.map(product => ({
					name: product.name,
					type: 'candle',
				})),
			});

			clear();

			ctx.setToastMessage(translatedTexts.common.orderForm.toastMessage);

			return {
				reset: true,
			};
		} catch (error) {
			console.log('Failed to submit order:', error);
			ctx.setErrors(['clientName', 'clientEmail', 'names']);
		}
	};

	return (
		<OrderForm
			type="candle"
			products={products.map(product => ({
				...product,
				handleDelete: () => removeProduct(product.id),
			}))}
			disabled={products.length < 1}
			translatedTexts={translatedTexts}
			className={styles.form}
			handleSubmit={handleSubmit}
		/>
	);
};
