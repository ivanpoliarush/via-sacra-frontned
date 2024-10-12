import { MainSection } from '../main-section/main-section';

export const HomePage = ({ lang }: { lang: string }) => {
	return (
		<main>
			<MainSection lang={lang} />
			{/* <InfoSection lang={lang} /> */}
			{/* <ServicesSection lang={lang} /> */}
			{/* <WorkProgressSection lang={lang} /> */}
			{/* <ReviewsSection lang={lang} /> */}
		</main>
	);
};
