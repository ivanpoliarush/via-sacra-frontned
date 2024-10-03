import { InfoSection } from '../info-section/info-section';
import { MainSection } from '../main-section/main-section';
import { ReviewsSection } from '../reviews-section/reviews-section';
import { ServicesSection } from '../services-section/services-section';
import { WorkProgressSection } from '../work-progress-section/work-progress-section';

export const HomePage = () => {
	return (
		<main>
			<MainSection />
			<InfoSection />
			<ServicesSection />
			<WorkProgressSection />
			<ReviewsSection />
		</main>
	);
};
