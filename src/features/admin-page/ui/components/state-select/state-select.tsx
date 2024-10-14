import { capitalizeFirstLetter } from '@/shared/lib/text';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { STATUSES } from './state-select.constants';
import styles from './state-select.module.css';
import { StateSelectProps } from './state-select.props';

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

export const StateSelect = ({ state }: StateSelectProps) => {
	const [open, setOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);
	const filteredStates = STATUSES.filter(
		stateItem => stateItem.value !== state,
	);

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

	return (
		<div className={styles.wrapper} ref={selectRef}>
			<div
				onClick={() => setOpen(true)}
				className={clsx(styles.item, styles[state])}>
				<p className={styles.label}>
					{capitalizeFirstLetter(state).replace('_', ' ')}
				</p>
			</div>
			<motion.div
				variants={variants}
				initial="hidden"
				animate={open ? 'visible' : 'hidden'}
				className={styles.list}>
				{filteredStates.map(stateItem => (
					<div
						key={stateItem.value}
						onClick={() => setOpen(true)}
						className={clsx(styles.item, styles[stateItem.value])}>
						<p className={styles.label}>
							{capitalizeFirstLetter(stateItem.value).replace(
								'_',
								' ',
							)}
						</p>
					</div>
				))}
			</motion.div>
		</div>
	);
};
