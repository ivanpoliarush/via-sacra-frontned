import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import styles from './candle.module.css';
import { CandleProps } from './candle.props';

export const Candle = ({
	lang,
	title,
	price,
	image,
	style,
	active,
	className,
	translateTexts,
	...props
}: CandleProps) => {
	return (
		<div
			className={clsx(styles.wrapper, className, {
				[styles.active]: active,
			})}
			style={{
				backgroundImage: `url(${image})`,
				...style,
			}}
			{...props}>
			<AnimatePresence>
				{active && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={styles.data}>
						<div className={styles.blur} />
						<div className={styles.header}>
							<p className={styles.title}>
								<span className={meaCulpa.className}>
									{title[0]}
								</span>
								<span>{title.slice(1)}</span>
							</p>
						</div>
						<div className={styles.buttons}>
							<Button
								className={styles.button}
								label={translateTexts.common.order}
								color="light"
							/>
							<Link
								href={`/${lang}/article`}
								className={styles.link}>
								<Button
									className={styles.button}
									label={translateTexts.common.more}
									color="dark"
								/>
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
