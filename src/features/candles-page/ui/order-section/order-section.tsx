import { OrderForm } from '@/features/forms/order-form/ui/main/main';
import { meaCulpa } from '@/shared/fonts';
import styles from './order-section.module.css';

export const OrderSection = () => {
	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span>Acender uma </span>
				<span className={meaCulpa.className}>V</span>
				<span>ela</span>
			</p>
			<p className={styles.description}>
				Acender uma vela é um símbolo de fé e esperança. Através do
				nosso serviço, você pode acender uma vela no Vaticano, pedindo
				saúde para você ou seus entes queridos. Que sua luz brilhe
				diante de Deus, no coração da fé católica.
			</p>
			<div className={styles.formWrapper}>
				<img
					className={styles.formImage}
					src="/candles-page/form/image.png"
					alt=""
				/>
				<OrderForm className={styles.form} />
			</div>
		</section>
	);
};
