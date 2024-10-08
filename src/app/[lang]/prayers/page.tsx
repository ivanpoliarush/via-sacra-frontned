import { PrayersPage } from '@/features/prayers-page/ui/main/main';

const Prayers = ({ params: { lang } }: { params: { lang: string } }) => {
	return <PrayersPage lang={lang} />;
};

export default Prayers;
