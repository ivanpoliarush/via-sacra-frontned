import { getDictionary } from '@/app/[lang]/dictionaries';
import { montserrat } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import clsx from 'clsx';
import styles from './main.module.css';
import { NewsletterFormProps } from './main.props';

export const NewsletterForm = async ({
	className,
	lang,
	...props
}: NewsletterFormProps) => {
	const texts = await getDictionary(lang);

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<p className={styles.title}>{texts.footer.newsletters.title}</p>
			<div className={styles.inputWrapper}>
				<input
					className={clsx(styles.input, montserrat.className)}
					placeholder={texts.footer.newsletters.placeholder}
				/>
				<Button
					className={styles.button}
					label={texts.footer.newsletters.submit}
				/>
			</div>
		</div>
	);
};
