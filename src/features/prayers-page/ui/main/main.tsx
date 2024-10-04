import { Header } from '@/features/layout/ui/header/header';
import { OrderSection } from '../order-section/order-section';
import { PrayersSection } from '../prayers-section/prayers-section';

export const PrayersPage = () => {
	return (
		<>
			<Header />
			<main>
				<PrayersSection />
				<OrderSection />
			</main>
		</>
	);
};
