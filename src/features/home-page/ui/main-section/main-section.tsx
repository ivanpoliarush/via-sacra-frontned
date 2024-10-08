import { getDictionary } from '@/app/[lang]/dictionaries';
import { Header } from '@/features/layout/ui/header/header';
import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './main-section.module.css';

export const MainSection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<section className={styles.wrapper}>
			<Header lang={lang} logoClassName={styles.logo} />
			<div className={styles.titleWrapper}>
				<p className={clsx(styles.title, styles.firstTitle)}>
					{texts.home.title.firstPart}
				</p>
				<p
					className={clsx(
						styles.largeTitle,
						styles.secondTitle,
						meaCulpa.className,
					)}>
					{texts.home.title.secondPart}
				</p>
				<p className={clsx(styles.title, styles.thirdTitle)}>
					{texts.home.title.thirdPart}
				</p>
			</div>
			<div className={styles.buttons}>
				<Link
					className={styles.link}
					href={`/${lang}/candles`}
					locale={lang}>
					<Button
						className={styles.button}
						label={texts.home.buttons.orderCandle}
						showArrow
					/>
				</Link>
				<Link
					className={styles.link}
					href={`/${lang}/prayers`}
					locale={lang}>
					<Button
						className={styles.button}
						label={texts.home.buttons.orderPrayer}
						showArrow
					/>
				</Link>
			</div>
		</section>
	);
};
