import { Triangle } from '@/assets/icons/triangle';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './select.module.css';
import { SelectProps } from './select.props';

const variants = {
	hidden: {
		opacity: 0,
		height: 0,
	},
	visible: {
		opacity: 1,
		height: 'auto',
	},
};

export const Select = ({
	label,
	value,
	options,
	onChange,
	defaultLabel,
}: SelectProps) => {
	const [open, setOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	const activeOption = options.find(option => option.value === value);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOurside);

		return () => {
			document.removeEventListener('mousedown', handleClickOurside);
		};
	}, []);

	const handleClickOurside = (event: MouseEvent) => {
		if (
			selectRef.current &&
			!selectRef.current.contains(event.target as Node)
		) {
			setOpen(false);
		}
	};

	const handleSelect = (newValue: string) => {
		onChange(newValue === value ? undefined : newValue);
		setOpen(false);
	};

	return (
		<div className={styles.wrapper} ref={selectRef}>
			<p className={styles.title}>{label}</p>
			<div
				onClick={() => setOpen(!open)}
				className={clsx(styles.header, {
					[styles.open]: open,
				})}>
				<p
					className={clsx(styles.label, {
						[styles.active]: activeOption,
					})}>
					{activeOption?.label || defaultLabel}
				</p>
				<Triangle
					className={clsx(styles.triangle, {
						[styles.open]: open,
					})}
				/>
			</div>
			<motion.div
				variants={variants}
				initial="hidden"
				animate={open ? 'visible' : 'hidden'}
				className={clsx(styles.options, {
					[styles.open]: open,
				})}>
				{options.map(option => (
					<div
						key={option.value}
						className={styles.option}
						onClick={() => handleSelect(option.value)}>
						<p className={styles.optionLabel}>{option.label}</p>
					</div>
				))}
			</motion.div>
		</div>
	);
};
