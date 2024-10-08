'use client';

import { Triangle } from '@/assets/icons/triangle';
import { Button } from '@/shared/ui/button/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styles from './prayer-item.module.css';
import { PrayerItemProps } from './prayer-item.props';

const variants = {
	toggleButton: {
		close: {
			rotate: 0,
		},
		open: {
			rotate: 180,
		},
	},
	content: {
		close: {
			opacity: 0,
			height: 0,
			paddingTop: 0,
			paddingBottom: 0,
			paddingLeft: '12px',
			paddingRight: '12px',
		},
		open: {
			opacity: 1,
			height: 'auto',
			paddingTop: '24px',
			paddingBottom: '8px',
			paddingLeft: '12px',
			paddingRight: '12px',
		},
	},
};

export const PrayerItem = ({ title, text, buttonLabel }: PrayerItemProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className={styles.wrapper}>
			<div className={styles.titleWrapper}>
				<p className={styles.title}>{title}</p>
				<div className={styles.actions}>
					<Button
						className={styles.orderButton}
						label={buttonLabel}
					/>
					<motion.button
						transition={{ duration: 0.3 }}
						variants={variants.toggleButton}
						animate={isExpanded ? 'open' : 'close'}
						className={styles.toggleButton}
						onClick={() => setIsExpanded(!isExpanded)}>
						<Triangle />
					</motion.button>
				</div>
			</div>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						transition={{ duration: 0.3 }}
						variants={variants.content}
						animate={isExpanded ? 'open' : 'close'}
						initial="close"
						exit="close"
						className={styles.textWrapper}>
						<p className={styles.text}>{text}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
