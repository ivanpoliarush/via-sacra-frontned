import { getDictionary } from '@/app/[lang]/dictionaries';
import { meaCulpa } from '@/shared/fonts';
import { OrderButtonWrapper } from '../order-button-wrapper/order-button-wrapper';
import { PrayerItem } from '../prayer-item/prayer-item';
import styles from './prayers-section.module.css';

export const PrayersSection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span className={meaCulpa.className}>
					{texts.prayers.order.title[0]}
				</span>
				<span>{texts.prayers.order.title.slice(1)}</span>
			</p>
			<p className={styles.description}>{texts.prayers.order.subtitle}</p>
			<div className={styles.prayers}>
				{texts.prayers.list.prayers.map((prayer, index) => (
					<PrayerItem
						{...prayer}
						buttonLabel={texts.common.order}
						key={index}
					/>
				))}
			</div>
			<OrderButtonWrapper label={texts.common.order} />
		</section>
	);
};
