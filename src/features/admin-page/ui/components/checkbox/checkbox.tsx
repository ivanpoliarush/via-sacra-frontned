import { CheckMark } from '@/assets/icons/check-mark';
import clsx from 'clsx';
import styles from './checkbox.module.css';
import { CheckboxProps } from './checkbox.props';

export const Checkbox = ({ selected, onChange }: CheckboxProps) => {
	return (
		<div
			onClick={() => onChange(!selected)}
			className={clsx(styles.wrapper, {
				[styles.selected]: selected,
			})}>
			{selected && <CheckMark />}
		</div>
	);
};
