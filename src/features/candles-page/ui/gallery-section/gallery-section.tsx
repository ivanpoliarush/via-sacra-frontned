import { getDictionary } from '@/app/[lang]/dictionaries';
import { meaCulpa } from '@/shared/fonts';
import { OrderButton } from '@/shared/ui/order-button/order-button';
import { Gallery } from '../gallery/gallery';
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
			<Gallery translateTexts={texts} className={styles.gallery} />
			<OrderButton productsCount={2} lang={lang} />
		</section>
	);
};
