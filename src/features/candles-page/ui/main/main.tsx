import { Header } from '@/features/layout/ui/header/header';
import { GallerySection } from '../gallery-section/gallery-section';
import { OrderSection } from '../order-section/order-section';

export const CandlesPage = ({ lang }: { lang: string }) => {
	return (
		<>
			<Header />
			<main>
				<GallerySection lang={lang} />
				<OrderSection lang={lang} />
			</main>
		</>
	);
};
