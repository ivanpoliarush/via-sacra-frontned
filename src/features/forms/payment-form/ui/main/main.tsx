'use client';

import {
	ApplePay,
	GooglePay,
	MasterCard,
	Visa,
} from '@/assets/icons/payment-form';
import { ProductsModal } from '@/features/modals/products-modal/ui/main/main';
import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import { Input } from '@/shared/ui/input/input';
import clsx from 'clsx';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './main.module.css';

export const PaymentForm = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className={styles.wrapper}>
			<div className={styles.paymentInfo}>
				<div
					className={styles.totalProductsWrapper}
					onClick={() => setShowModal(true)}>
					<p>Total order</p>
					<div className={styles.totalProductsBadge}>
						<p>5</p>
					</div>
				</div>
				<p className={clsx(styles.price, meaCulpa.className)}>5$</p>
			</div>
			<div className={styles.inputs}>
				<Input
					label="Número do cartão"
					placeholder="0000 0000 0000 0000"
					wrapperClassName={styles.cardNumberInput}
				/>
				<Input
					label="Data de validade"
					placeholder="00 / 00"
					wrapperClassName={styles.dateAvailabilityInput}
				/>
				<Input
					label="CVV"
					placeholder="000"
					wrapperClassName={styles.cvvInput}
				/>
				<Input
					label="Código postal"
					placeholder="01001"
					wrapperClassName={styles.postalCodeInput}
				/>
			</div>
			<div className={styles.buttons}>
				<Button
					className={styles.paymentButton}
					label={
						<div className={styles.paymentButtonContent}>
							<p className={styles.paymentButtonLabel}>
								Pagar com cartão
							</p>
							<div className={styles.paymentButtonIcons}>
								<Visa />
								<MasterCard />
							</div>
						</div>
					}
				/>
				<button className={styles.applePayButton}>
					<p className={styles.serviceButtonLabel}>Pague com</p>
					<ApplePay className={styles.servicePayIcon} />
				</button>
				<button className={styles.googlePayButton}>
					<p className={styles.serviceButtonLabel}>Pague com</p>
					<GooglePay className={styles.servicePayIcon} />
				</button>
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
