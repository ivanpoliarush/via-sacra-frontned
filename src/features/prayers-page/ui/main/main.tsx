import { Header } from '@/features/layout/ui/header/header';
import { OrderSection } from '../order-section/order-section';
import { PrayersSection } from '../prayers-section/prayers-section';

export const PrayersPage = ({ lang }: { lang: string }) => {
	return (
		<>
			<Header lang={lang} />
			<main>
				<PrayersSection lang={lang} />
				<OrderSection lang={lang} />
			</main>
		</>
	);
};
