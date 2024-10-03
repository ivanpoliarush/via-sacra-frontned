import { Header } from '@/features/layout/ui/header/header';
import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './main-section.module.css';

export const MainSection = () => {
	return (
		<section className={styles.wrapper}>
			<Header logoClassName={styles.logo} />
			<div className={styles.titleWrapper}>
				<p className={clsx(styles.title, styles.firstTitle)}>
					Enciende una vela en el
				</p>
				<p
					className={clsx(
						styles.largeTitle,
						styles.secondTitle,
						meaCulpa.className,
					)}>
					Vaticano
				</p>
				<p className={clsx(styles.title, styles.thirdTitle)}>
					y envía tus oraciones
				</p>
			</div>
			<div className={styles.buttons}>
				<Link className={styles.link} href="/candles">
					<Button
						className={styles.button}
						label="Acenda uma vela"
						showArrow
					/>
				</Link>
				<Link className={styles.link} href="/candles">
					<Button
						className={styles.button}
						label="Envie uma oração"
						showArrow
					/>
				</Link>
			</div>
		</section>
	);
};
