import { Church } from '@/assets/icons/church';
import { Images } from '@/assets/icons/images';
import { Payment } from '@/assets/icons/payment';
import { Request } from '@/assets/icons/request';
import { meaCulpa } from '@/shared/fonts';
import { WorkProgressItem } from '../work-progress-item/work-progress-item';
import styles from './work-progress-section.module.css';

export const WorkProgressSection = () => {
	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span>Como t</span>
				<span className={meaCulpa.className}>R</span>
				<span>abalhamos</span>
			</p>
			<div className={styles.items}>
				<WorkProgressItem
					icon={Request}
					title="Encomende on-line"
					description="Envie uma oração Ou acenda uma vela em qualquer lugar"
				/>
				<WorkProgressItem
					icon={Payment}
					title="Pague on-line"
					description="Pague online com cartãoGooglePay ou ApplePay"
				/>
				<WorkProgressItem
					icon={Church}
					title="Nós entregamos"
					description="Entregamos sua oraçãoOu acendemos uma vela no Vaticano"
				/>
				<WorkProgressItem
					icon={Images}
					title="Reportagem fotográfica"
					description="Fazemos uma foto de uma vela ou oração no Vaticano"
				/>
			</div>
		</section>
	);
};
