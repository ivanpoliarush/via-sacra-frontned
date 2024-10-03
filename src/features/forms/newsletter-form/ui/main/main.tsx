import { Button } from '@/shared/ui/button/button';
import clsx from 'clsx';
import styles from './main.module.css';
import { NewsletterFormProps } from './main.props';

export const NewsletterForm = ({
	className,
	...props
}: NewsletterFormProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<p className={styles.title}>Assinar Newsletters</p>
			<div className={styles.inputWrapper}>
				<input
					className={styles.input}
					placeholder="Digite seu e-mail"
				/>
				<Button className={styles.button} label="Assine agora" />
			</div>
		</div>
	);
};
