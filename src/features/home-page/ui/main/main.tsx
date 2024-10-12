import { InfoSection } from '../info-section/info-section';
import { MainSection } from '../main-section/main-section';
import { ServicesSection } from '../services-section/services-section';

export const HomePage = ({ lang }: { lang: string }) => {
	return (
		<main>
			<MainSection lang={lang} />
			<InfoSection lang={lang} />
			<ServicesSection lang={lang} />
			{/* <WorkProgressSection lang={lang} /> */}
			{/* <ReviewsSection lang={lang} /> */}
		</main>
	);
};
