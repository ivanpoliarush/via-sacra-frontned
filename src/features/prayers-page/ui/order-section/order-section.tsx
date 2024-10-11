import { getDictionary } from '@/app/[lang]/dictionaries';
import { meaCulpa } from '@/shared/fonts';
import { OrderFormWrapper } from '../order-form-wrapper/order-form-wrapper';
import styles from './order-section.module.css';

export const OrderSection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<section className={styles.wrapper} id="order">
			<p className={styles.title}>
				<span className={meaCulpa.className}>
					{texts.prayers.order.title[0]}
				</span>
				<span>{texts.prayers.order.title.slice(1)}</span>
			</p>
			<p className={styles.description}>{texts.prayers.order.subtitle}</p>
			<div className={styles.formWrapper}>
				<img
					className={styles.formImage}
					src="/images/prayers-page/form/image.png"
					alt=""
				/>
				<OrderFormWrapper lang={lang} translatedTexts={texts} />
			</div>
		</section>
	);
};
