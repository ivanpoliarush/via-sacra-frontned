'use client';

import { Arrow } from '@/assets/icons/arrow';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './button.module.css';
import { ButtonProps } from './button.props';

const variants = {
	arrow: {
		tap: {
			x: [0, 8, 0],
			y: [0, 8, 0],
		},
		hover: {
			x: 0,
			y: 0,
		},
	},
};

export const Button = ({
	className,
	label,
	showArrow,
	color = 'dark',
	...props
}: ButtonProps) => {
	return (
		<motion.button
			whileHover="hover"
			whileTap="tap"
			className={clsx(styles.wrapper, className, styles[color], {
				[styles.withArrow]: showArrow,
			})}
			{...(props as any)}>
			<p className={styles.label}>{label}</p>
			{showArrow && (
				<motion.div
					variants={variants.arrow}
					transition={{ duration: 0.3 }}>
					<Arrow className={styles.arrow} />
				</motion.div>
			)}
		</motion.button>
	);
};
