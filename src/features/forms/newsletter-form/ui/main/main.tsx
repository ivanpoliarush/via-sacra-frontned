'use client';

import { ToastModal } from '@/features/modals/toast-modal/ui/main/main';
import { montserrat } from '@/shared/fonts';
import { useToastMessage } from '@/shared/hooks/use-toast-message';
import { validateEmail } from '@/shared/lib/validations';
import { Button } from '@/shared/ui/button/button';
import { Input } from '@/shared/ui/input/input';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { subscribeNewsletter } from '../../api';
import styles from './main.module.css';
import { NewsletterFormProps } from './main.props';

export const NewsletterForm = ({
	translateTexts,
	className,
	...props
}: NewsletterFormProps) => {
	const [toastMessage, setToastMessage] = useToastMessage();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [email, setEmail] = useState('');

	useEffect(() => {
		setError(false);
	}, [email]);

	const handleSubmit = async () => {
		if (!email || !validateEmail(email)) {
			setError(true);
			return;
		}

		try {
			setLoading(true);
			await subscribeNewsletter(email);
		} finally {
			setLoading(false);
			setEmail('');
			setToastMessage(translateTexts.footer.newsletters.toastMessage);
		}
	};

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<p className={styles.title}>
				{translateTexts.footer.newsletters.title}
			</p>
			<div className={styles.inputWrapper}>
				<Input
					value={email}
					error={error}
					animation={false}
					wrapperClassName={styles.input}
					onChange={event => setEmail(event.target.value)}
					className={clsx(styles.input, montserrat.className)}
					placeholder={translateTexts.footer.newsletters.placeholder}
				/>
				<Button
					loading={loading}
					onClick={handleSubmit}
					className={styles.button}
					label={translateTexts.footer.newsletters.submit}
				/>
			</div>
			<ToastModal isOpen={Boolean(toastMessage)} message={toastMessage} />
		</div>
	);
};
