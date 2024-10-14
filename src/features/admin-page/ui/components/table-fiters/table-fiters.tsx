'use client';

import { Bin } from '@/assets/icons/bin';
import { CheckMarkFill } from '@/assets/icons/check-mark';
import { Filters } from '@/assets/icons/filters';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Input } from '../input/input';
import { Select } from '../select/select';
import styles from './table-fiters.module.css';
import { TableFiltersProps } from './table-fiters.props';

export const TableFilters = ({
	onApply,
	filters,
	filtersState,
	onChangeFilter,
}: TableFiltersProps) => {
	const [filtersOpen, setFiltersOpen] = useState(false);
	const filtersRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOurside);

		return () => {
			document.removeEventListener('mousedown', handleClickOurside);
		};
	}, []);

	const handleClickOurside = (event: MouseEvent) => {
		if (
			filtersRef.current &&
			!filtersRef.current.contains(event.target as Node)
		) {
			setFiltersOpen(false);
		}
	};

	const handleAplly = () => {
		onApply();
		setFiltersOpen(false);
	};

	return (
		<div className={styles.wrapper}>
			<div
				className={clsx(styles.button, {
					[styles.disabled]: true,
				})}>
				<Bin className={styles.icon} />
				<p className={styles.buttonLabel}>Delete</p>
			</div>
			{filters && filters.length > 0 && (
				<div
					className={styles.button}
					onClick={() => setFiltersOpen(true)}>
					<Filters className={styles.icon} />
					<p className={styles.buttonLabel}>Filters</p>
				</div>
			)}
			<AnimatePresence>
				{filtersOpen && (
					<motion.div
						ref={filtersRef}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={styles.filters}>
						<div className={styles.filtersHeader}>
							<p className={styles.filtersTitle}>Filters</p>
							<button
								className={styles.applyButton}
								onClick={handleAplly}>
								<CheckMarkFill
									className={styles.checkMarkIcon}
								/>
							</button>
						</div>
						<div className={styles.filtersBody}>
							{filters?.map(filter => (
								<>
									{filter.type === 'search' && (
										<Input
											key={filter.key}
											label={filter.label}
											value={
												filtersState[filter.key] || ''
											}
											placeholder={filter.placeholder}
											onChange={value =>
												onChangeFilter(
													filter.key,
													value,
												)
											}
										/>
									)}
									{filter.type === 'select' && (
										<Select
											key={filter.key}
											label={filter.label}
											value={
												filtersState[filter.key] || ''
											}
											options={filter.options}
											defaultLabel={filter.defaultLabel}
											onChange={value =>
												onChangeFilter(
													filter.key,
													value,
												)
											}
										/>
									)}
								</>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
