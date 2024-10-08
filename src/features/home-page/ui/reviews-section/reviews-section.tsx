import { getDictionary } from '@/app/[lang]/dictionaries';
import { meaCulpa } from '@/shared/fonts';
import { Reviews } from '../reviews/reviews';
import styles from './reviews-section.module.css';

export const ReviewsSection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>
				<span className={meaCulpa.className}>
					{texts.home.reviews.title[0]}
				</span>
				<span>{texts.home.reviews.title.slice(1)}</span>
			</p>
			<Reviews translate={texts.home.reviews.reviews} />
		</div>
	);
};
