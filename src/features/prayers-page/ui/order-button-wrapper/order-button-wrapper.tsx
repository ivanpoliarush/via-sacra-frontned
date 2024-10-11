'use client';

import { OrderButton } from '@/shared/ui/order-button/order-button';
import { usePrayerStore } from '../../hooks/use-prayer-store';
import { OrderButtonProps } from './order-button-wrapper.props';

export const OrderButtonWrapper = ({ label }: OrderButtonProps) => {
	const { products } = usePrayerStore();

	return <OrderButton label={label} productsCount={products.length} />;
};
