import { OrderForm } from '@/features/forms/order-form/ui/main/main';
import { meaCulpa } from '@/shared/fonts';
import styles from './order-section.module.css';

export const OrderSection = () => {
	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span className={meaCulpa.className}>P</span>
				<span>eça uma oração</span>
			</p>
			<p className={styles.description}>
				A oração é o caminho para Deus, e oferecemos a você a
				oportunidade de enviar seus pedidos de oração diretamente ao
				Vaticano. Suas intenções serão levadas aos lugares sagrados,
				onde orarão por você.
			</p>
			<div className={styles.formWrapper}>
				<img
					className={styles.formImage}
					src="/prayers-page/form/image.png"
					alt=""
				/>
				<OrderForm type="prayer" className={styles.form} />
			</div>
		</section>
	);
};
