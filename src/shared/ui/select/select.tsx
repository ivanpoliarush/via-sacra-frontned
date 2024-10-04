'use client';

import { montserrat } from '@/shared/fonts';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './select.module.css';
import { SelectProps } from './select.props';

const variants = {
	triangle: {
		open: { rotate: 180 },
		closed: { rotate: 0 },
	},
	list: {
		open: {
			height: 'auto',
			clipPath: 'inset(0% 0% 0% 0% round 10px)',
			transition: {
				type: 'spring',
				bounce: 0,
				duration: 0.7,
				delayChildren: 0.3,
				staggerChildren: 0.05,
			},
		},
		closed: {
			height: 0,
			clipPath: 'inset(10% 50% 90% 50% round 10px)',
			transition: {
				type: 'spring',
				bounce: 0,
				duration: 0.3,
			},
		},
	},
	item: {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
		closed: {
			y: 10,
			opacity: 0,
			transition: {
				duration: 0.2,
			},
		},
	},
};

export const Select = ({ options, selectedValue, onChange }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			selectRef.current &&
			!selectRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	const label =
		options.find(option => option.value === selectedValue)?.label ||
		'Select';

	const handleSelect = (value: string) => {
		onChange?.(value);
		setIsOpen(false);
	};

	return (
		<motion.nav
			ref={selectRef}
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			className={styles.wrapper}>
			<motion.button
				className={clsx(styles.button, montserrat.className)}
				whileTap={{ scale: 0.97 }}
				onClick={() => setIsOpen(!isOpen)}>
				{label}
				<motion.div
					variants={variants.triangle}
					transition={{ duration: 0.2 }}
					style={{ originY: 0.55 }}>
					<svg width="15" height="15" viewBox="0 0 20 20">
						<path d="M0 7 L 20 7 L 10 16" />
					</svg>
				</motion.div>
			</motion.button>
			<motion.ul
				className={styles.list}
				variants={variants.list}
				style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
				{options.map(option => (
					<motion.li
						onClick={() => handleSelect(option.value)}
						className={styles.item}
						variants={variants.item}
						key={option.value}>
						{option.label}
					</motion.li>
				))}
			</motion.ul>
		</motion.nav>
	);
};
