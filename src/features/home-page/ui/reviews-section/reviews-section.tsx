import { meaCulpa } from '@/shared/fonts';
import { Reviews } from '../reviews/reviews';
import styles from './reviews-section.module.css';

export const ReviewsSection = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>
				<span className={meaCulpa.className}>T</span>
				<span>estemunhos</span>
			</p>
			<Reviews />
		</div>
	);
};
