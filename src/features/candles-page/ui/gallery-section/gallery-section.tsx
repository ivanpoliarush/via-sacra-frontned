import { meaCulpa } from '@/shared/fonts';
import { OrderButton } from '@/shared/ui/order-button/order-button';
import { Gallery } from '../gallery/gallery';
import styles from './gallery-section.module.css';

export const GallerySection = () => {
	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span className={meaCulpa.className}>G</span>
				<span>aleria de velas</span>
			</p>
			<Gallery className={styles.gallery} />
			<OrderButton productsCount={2} />
		</section>
	);
};
