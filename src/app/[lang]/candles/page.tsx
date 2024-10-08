import { CandlesPage } from '@/features/candles-page/ui/main/main';

const Candles = ({ params: { lang } }: { params: { lang: string } }) => {
	return <CandlesPage lang={lang} />;
};

export default Candles;
