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

export const StateSelect = ({ initialState, onChange }: StateSelectProps) => {
	const [state, setState] = useState(initialState);

	const [open, setOpen] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	const displayState = STATUSES.find(stateItem => stateItem.value === state);
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

	const handleChange = (state: string) => {
		setState(state);
		setOpen(false);
		onChange(state);
	};

	return (
		<div className={styles.wrapper} ref={selectRef}>
			<div
				onClick={() => setOpen(!open)}
				className={clsx(styles.item, styles[state])}>
				<p className={styles.label}>{displayState?.label || state}</p>
			</div>
			<motion.div
				variants={variants}
				initial="hidden"
				animate={open ? 'visible' : 'hidden'}
				className={styles.list}>
				{filteredStates.map(stateItem => (
					<div
						onClick={() => handleChange(stateItem.value)}
						key={stateItem.value}
						className={clsx(styles.item, styles[stateItem.value])}>
						<p className={styles.label}>{stateItem.label}</p>
					</div>
				))}
			</motion.div>
		</div>
	);
};
