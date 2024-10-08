import { getDictionary } from '@/app/[lang]/dictionaries';
import clsx from 'clsx';
import styles from './content.module.css';
import { ContentProps } from './content.props';

export const Content = async ({ className, lang, ...props }: ContentProps) => {
	const texts = await getDictionary(lang);

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<div className={styles.flex}>
				<p>{texts.articles.articles[0]}</p>
				<img src="/images/article-page/candle.png" alt="" />
			</div>
			<p>{texts.articles.articles[1]}</p>
			<div className={styles.flex}>
				<img src="/images/article-page/sky.png" alt="" />
				<p>{texts.articles.articles[2]}</p>
			</div>
			<p>{texts.articles.articles[3]}</p>
		</div>
	);
};
