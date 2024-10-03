import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import Link from 'next/link';
import styles from './service.module.css';
import { ServiceProps } from './service.props';

export const Service = ({ image, title, href }: ServiceProps) => {
	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url('${image}')` }}>
			<div className={styles.blur} />
			<p className={styles.title}>
				<span className={meaCulpa.className}>
					{title[0].toUpperCase()}
				</span>
				<span>{title.slice(1)}</span>
			</p>
			<Link className={styles.link} href={href}>
				<Button className={styles.button} color="light" label="Ordem" />
			</Link>
		</div>
	);
};
