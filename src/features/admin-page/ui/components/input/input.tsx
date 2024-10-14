import styles from './input.module.css';
import { InputProps } from './input.props';

export const Input = ({ label, placeholder, value, onChange }: InputProps) => {
	return (
		<label className={styles.label}>
			<input
				value={value}
				onChange={event => onChange(event.target.value)}
				className={styles.input}
				placeholder={placeholder}
			/>
			<span>{label}</span>
		</label>
	);
};
