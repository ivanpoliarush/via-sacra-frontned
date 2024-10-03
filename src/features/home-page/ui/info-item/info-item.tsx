import { meaCulpa } from '@/shared/fonts';
import { Button } from '@/shared/ui/button/button';
import clsx from 'clsx';
import styles from './info-item.module.css';
import { InfoItemProps } from './info-item.props';

export const InfoItem = ({
	reverse,
	image,
	imageData,
	title,
	button,
	subtitle,
	description,
}: InfoItemProps) => {
	return (
		<div
			className={clsx(styles.wrapper, {
				[styles.reverse]: reverse,
			})}>
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.subtitle}>{subtitle}</p>
				<p className={styles.description}>{description}</p>
				<Button
					className={styles.button}
					label={button.label}
					showArrow
				/>
			</div>
			<div className={styles.imageWrapper}>
				<img className={styles.image} src={image} alt={title} />
				{imageData && (
					<div className={styles.imageData}>
						<p className={styles.imageDataTitle}>
							<span className={meaCulpa.className}>
								{imageData.title.slice(0, 1)}
							</span>
							<span>{imageData.title.slice(1)}</span>
						</p>
						<p className={styles.imageDataSubtitle}>
							{imageData.subtitle}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
