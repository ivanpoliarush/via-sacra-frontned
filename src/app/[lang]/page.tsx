import { HomePage } from '@/features/home-page/ui/main/main';

const Home = ({ params: { lang } }: { params: { lang: string } }) => {
	return <HomePage lang={lang} />;
};

export default Home;
