import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import styles from './service.module.css';
import { ServiceProps } from './service.props';

export const Service = ({ image, title }: ServiceProps) => {
	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url('${image}')` }}>
			<p className={styles.title}>
				<span className={meaCulpa.className}>
					{title[0].toUpperCase()}
				</span>
				<span>{title.slice(1)}</span>
			</p>
			<Button className={styles.button} color="light" label="Ordem" />
		</div>
	);
};
