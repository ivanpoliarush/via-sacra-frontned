import { getDictionary } from '@/app/[lang]/dictionaries';
import { InfoItem } from '../info-item/info-item';
import styles from './info-section.module.css';

export const InfoSection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<section className={styles.wrapper}>
			<InfoItem
				title={texts.home.articles.prayer.title}
				subtitle={texts.home.articles.prayer.subtitle}
				description={texts.home.articles.prayer.text}
				button={{
					label: texts.home.buttons.orderPrayer,
					href: `/${lang}/prayers`,
				}}
				image="/images/home-page/info-section/pope.png"
				imageData={{
					title: texts.home.articles.prayer.imageData.title,
					subtitle: texts.home.articles.prayer.imageData.subtitle,
				}}
			/>
			<InfoItem
				reverse
				title={texts.home.articles.candle.title}
				subtitle={texts.home.articles.candle.subtitle}
				description={texts.home.articles.candle.text}
				button={{
					label: texts.home.buttons.orderCandle,
					href: `/${lang}/candles`,
				}}
				image="/images/home-page/info-section/candles.png"
			/>
		</section>
	);
};
