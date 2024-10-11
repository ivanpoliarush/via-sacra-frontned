'use client';

import { OrderForm } from '@/features/forms/order-form/ui/main/main';
import {
	SubmitContext,
	SubmitFormKey,
} from '@/features/forms/order-form/ui/main/main.props';
import { validateEmail } from '@/shared/lib/validations';
import { submitPrayersOrder } from '../../api';
import { usePrayerStore } from '../../hooks/use-prayer-store';
import styles from './order-form-wrapper.module.css';
import { OrderFormWrapperProps } from './order-form-wrapper.props';

export const OrderFormWrapper = ({
	translatedTexts,
	lang,
}: OrderFormWrapperProps) => {
	const { products, removeProduct, clear } = usePrayerStore();

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

			await submitPrayersOrder({
				client: {
					name: ctx.values.clientName,
					email: ctx.values.clientEmail,
				},
				options: {
					names: ctx.values.names,
				},
				products: products.map(product => ({
					name: `${product.name} (${lang.toUpperCase()})`,
					type: 'prayer',
				})),
			});

			clear();

			ctx.setToastMessage(translatedTexts.common.orderForm.toastMessage);

			return {
				reset: true,
			};
		} catch (error) {
			console.log('Failed to submit order', error);
			ctx.setErrors(['clientEmail', 'clientName', 'names']);
		}
	};

	return (
		<OrderForm
			type="prayer"
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
