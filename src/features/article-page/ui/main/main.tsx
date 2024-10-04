import { Header } from '@/features/layout/ui/header/header';
import { meaCulpa } from '@/shared/fonts';
import { Content } from '../content/content';
import { DownButton } from '../down-button/down-button';
import styles from './main.module.css';

export const ArticlePage = () => {
	return (
		<>
			<Header />
			<main className={styles.wrapper}>
				<p className={styles.title}>
					<span className={meaCulpa.className}>L</span>
					<span>Luz da Esperança</span>
				</p>
				<Content className={styles.content} />
				<DownButton />
			</main>
		</>
	);
};
