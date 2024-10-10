'use client';

import { montserrat } from '@/shared/fonts';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './input.module.css';
import { InputProps } from './input.props';

const variants = {
	error: {
		x: [0, -10, 10, -10, 10, -10, 10, 0],
	},
};

export const Input = ({
	wrapperClassName,
	animation = true,
	className,
	manyRows,
	error,
	label,
	...props
}: InputProps) => {
	if (manyRows) {
		return (
			<motion.textarea
				variants={variants}
				animate={error ? 'error' : undefined}
				transition={{ duration: 0.75 }}
				className={clsx(styles.input, className, montserrat.className, {
					[styles.error]: error,
				})}
				{...(props as any)}
			/>
		);
	}

	return (
		<motion.div
			className={clsx(styles.wrapper, wrapperClassName)}
			variants={variants}
			animate={error && animation ? 'error' : undefined}
			transition={{ duration: 0.75 }}>
			{label && <p className={styles.label}>{label}</p>}
			<input
				className={clsx(styles.input, className, montserrat.className, {
					[styles.error]: error,
				})}
				{...(props as any)}
			/>
		</motion.div>
	);
};
