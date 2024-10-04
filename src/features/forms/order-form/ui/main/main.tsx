'use client';

import { Cart } from '@/assets/icons/cart';
import { ProductsModal } from '@/features/modals/products-modal/ui/main/main';
import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import { Input } from '@/shared/ui/input/input';
import { Select } from '@/shared/ui/select/select';
import clsx from 'clsx';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './main.module.css';
import { OrderFormProps } from './main.props';

export const OrderForm = ({ className, type, ...props }: OrderFormProps) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedValue, setSelectedValue] = useState('Velas pela Saúde');

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
									value: 'Velas pela Saúde',
									label: 'Velas pela Saúde',
								},
								{
									value: 'Velas para o repouso',
									label: 'Velas para o repouso',
								},
							]}
						/>
					)}
					<Input
						manyRows
						className={styles.textarea}
						placeholder="Escreva aqui os nomes daqueles por quem você precisa orar (escreva de 1 a 5 nomes separados por vírgulas)"
					/>
					<Input placeholder="Nome, Sobrenome" />
					<Input placeholder="Seu e-mail" />
				</div>
			</div>
			<div>
				<div className={styles.priceWrapper}>
					<p className={styles.priceTitle}>no total</p>
					<p className={clsx(styles.price, meaCulpa.className)}>5$</p>
				</div>
				<Button className={styles.button} label="Ordem" />
			</div>
			{typeof window !== 'undefined' &&
				createPortal(
					<ProductsModal
						isOpen={showModal}
						onClose={() => setShowModal(false)}
					/>,
					window.document.body,
				)}
		</div>
	);
};
