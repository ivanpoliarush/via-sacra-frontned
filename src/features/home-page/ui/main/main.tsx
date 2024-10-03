import { InfoSection } from '../info-section/info-section';
import { MainSection } from '../main-section/main-section';
import { ServicesSection } from '../services-section/services-section';

export const HomePage = () => {
	return (
		<main>
			<MainSection />
			<InfoSection />
			<ServicesSection />
		</main>
	);
};
