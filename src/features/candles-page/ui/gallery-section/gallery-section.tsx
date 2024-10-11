import { getDictionary } from '@/app/[lang]/dictionaries';
import { meaCulpa } from '@/shared/fonts';
import { Gallery } from '../gallery/gallery';
import { OrderButtonWrapper } from '../order-button-wrapper/order-button-wrapper';
import styles from './gallery-section.module.css';

export const GallerySection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span className={meaCulpa.className}>
					{texts.candles.gallery.title[0]}
				</span>
				<span>{texts.candles.gallery.title.slice(1)}</span>
			</p>
			<Gallery
				lang={lang}
				translateTexts={texts}
				className={styles.gallery}
			/>
			<OrderButtonWrapper label={texts.common.order} />
		</section>
	);
};
