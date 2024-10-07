import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import styles from './candle.module.css';
import { CandleProps } from './candle.props';

export const Candle = ({
	title,
	price,
	image,
	className,
	style,
	active,
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
								label="Ordem"
								color="light"
							/>
							<Link href="/article" className={styles.link}>
								<Button
									className={styles.button}
									label="Mais"
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
