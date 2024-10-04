import { meaCulpa } from '@/shared/fonts';
import { Service } from '../service/service';
import styles from './services-section.module.css';

export const ServicesSection = () => {
	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span>S</span>
				<span className={meaCulpa.className}>e</span>
				<span>rvices</span>
			</p>
			<div className={styles.services}>
				<Service
					href="/candles"
					title="acenda uma vela"
					image="/home-page/services-section/candles.png"
				/>
				<Service
					href="/prayers"
					title="peça uma oração"
					image="/home-page/services-section/pope.png"
				/>
			</div>
		</section>
	);
};
