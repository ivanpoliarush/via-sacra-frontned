import { getDictionary } from '@/app/[lang]/dictionaries';
import { meaCulpa } from '@/shared/fonts';
import { OrderFormWrapper } from '../order-form-wrapper/order-form-wrapper';
import styles from './order-section.module.css';

export const OrderSection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);
	const titleWords = texts.candles.order.title.split(' ');

	return (
		<section className={styles.wrapper} id="order">
			<p className={styles.title}>
				<span>
					{titleWords.slice(0, titleWords.length - 1).join(' ') + ' '}
				</span>
				<span className={meaCulpa.className}>
					{titleWords[titleWords.length - 1][0].toUpperCase()}
				</span>
				<span>{titleWords[titleWords.length - 1].slice(1)}</span>
			</p>
			<p className={styles.description}>{texts.candles.order.subtitle}</p>
			<div className={styles.formWrapper}>
				<img
					className={styles.formImage}
					src="/images/candles-page/form/image.png"
					alt=""
				/>
				<OrderFormWrapper translatedTexts={texts} />
			</div>
		</section>
	);
};
