'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './input.module.css';
import { InputProps } from './input.props';

const variants = {
	error: {
		x: [0, -10, 10, -10, 10, -10, 10, 0],
	},
};

export const Input = ({ className, manyRows, error, ...props }: InputProps) => {
	if (manyRows) {
		return (
			<motion.textarea
				variants={variants}
				animate={error ? 'error' : undefined}
				transition={{ duration: 0.75 }}
				className={clsx(styles.input, className, {
					[styles.error]: error,
				})}
				{...(props as any)}
			/>
		);
	}

	return (
		<motion.input
			variants={variants}
			animate={error ? 'error' : undefined}
			transition={{ duration: 0.75 }}
			className={clsx(styles.input, className, {
				[styles.error]: error,
			})}
			{...(props as any)}
		/>
	);
};
