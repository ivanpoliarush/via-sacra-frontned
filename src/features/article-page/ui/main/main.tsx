import { getDictionary } from '@/app/[lang]/dictionaries';
import { Header } from '@/features/layout/ui/header/header';
import { meaCulpa } from '@/shared/fonts';
import { Content } from '../content/content';
import { DownButton } from '../down-button/down-button';
import styles from './main.module.css';

export const ArticlePage = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<>
			<Header lang={lang} />
			<main className={styles.wrapper}>
				<p className={styles.title}>
					<span className={meaCulpa.className}>
						{texts.articles.title[0]}
					</span>
					<span>{texts.articles.title.slice(1)}</span>
				</p>
				<Content lang={lang} className={styles.content} />
				<DownButton label={texts.articles.button} />
			</main>
		</>
	);
};
