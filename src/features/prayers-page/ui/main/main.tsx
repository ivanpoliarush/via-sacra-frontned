import { Header } from '@/features/layout/ui/header/header';
import { PrayersSection } from '../prayers-section/prayers-section';

export const PrayersPage = () => {
	return (
		<>
			<Header />
			<main>
				<PrayersSection />
			</main>
		</>
	);
};
