import { getDictionary } from '@/app/[lang]/dictionaries';
import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import Link from 'next/link';
import styles from './service.module.css';
import { ServiceProps } from './service.props';

export const Service = async ({ image, title, href, lang }: ServiceProps) => {
	const texts = await getDictionary(lang);

	return (
		<div className={styles.wrapper}>
			<img className={styles.image} src={image} alt="" />
			<div className={styles.blur} />
			<p className={styles.title}>
				<span className={meaCulpa.className}>
					{title[0].toUpperCase()}
				</span>
				<span>{title.slice(1)}</span>
			</p>
			<Link className={styles.link} href={href}>
				<Button
					className={styles.button}
					color="light"
					label={texts.common.order}
				/>
			</Link>
		</div>
	);
};
