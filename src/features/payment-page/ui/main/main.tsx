import { PaymentForm } from '@/features/forms/payment-form/ui/main/main';
import { Header } from '@/features/layout/ui/header/header';
import { meaCulpa } from '@/shared/fonts';
import styles from './main.module.css';

export const PaymentPage = () => {
	return (
		<>
			<Header />
			<main className={styles.wrapper}>
				<p className={styles.title}>
					<span className={meaCulpa.className}>P</span>
					<span>agamento</span>
				</p>
				<PaymentForm />
			</main>
		</>
	);
};
