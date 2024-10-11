'use client';

import { OrderButton } from '@/shared/ui/order-button/order-button';
import { useCandlesStore } from '../../hooks/use-candles-store';
import { OrderButtonWrapperProps } from './order-button-wrapper.props';

export const OrderButtonWrapper = ({ label }: OrderButtonWrapperProps) => {
	const { products } = useCandlesStore();

	return <OrderButton productsCount={products.length} label={label} />;
};
