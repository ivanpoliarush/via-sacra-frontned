import { getDictionary } from '@/app/[lang]/dictionaries';
import { meaCulpa } from '@/shared/fonts';
import { Service } from '../service/service';
import styles from './services-section.module.css';

export const ServicesSection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span>{texts.home.services.title[0]}</span>
				<span className={meaCulpa.className}>
					{texts.home.services.title[1]}
				</span>
				<span>{texts.home.services.title.slice(2)}</span>
			</p>
			<div className={styles.services}>
				<Service
					lang={lang}
					href="/candles"
					title={texts.home.services.candleTitle}
					image="/images/home-page/services-section/candles.png"
				/>
				<Service
					lang={lang}
					href="/prayers"
					title={texts.home.services.prayerTitle}
					image="/images/home-page/services-section/pope.png"
				/>
			</div>
		</section>
	);
};
