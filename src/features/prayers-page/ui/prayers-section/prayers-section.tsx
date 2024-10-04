import { PRAYERS } from '@/shared/constants/prayers';
import { meaCulpa } from '@/shared/fonts';
import { OrderButton } from '@/shared/ui/order-button/order-button';
import { PrayerItem } from '../prayer-item/prayer-item';
import styles from './prayers-section.module.css';

export const PrayersSection = () => {
	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span className={meaCulpa.className}>L</span>
				<span>ivro de orações</span>
			</p>
			<p className={styles.subtitle}>
				Em momentos difíceis, a oração ajuda a encontrar apoio e paz
				interior. Aqui você pode encontrar a oração que melhor se adapta
				à sua situação de vida. Você pode escolher uma oração para cada
				dia ou utilizá-la em um pedido enviado ao Vaticano, onde orarão
				por você nos lugares sagrados
			</p>
			<div className={styles.prayers}>
				{PRAYERS.map((prayer, index) => (
					<PrayerItem {...prayer} key={index} />
				))}
			</div>
			<OrderButton productsCount={2} />
		</section>
	);
};
