import styles from './work-progress-item.module.css';
import { WorkProgressItemProps } from './work-progress-item.props';

export const WorkProgressItem = ({
	icon: Icon,
	title,
	description,
}: WorkProgressItemProps) => {
	return (
		<div>
			<div className={styles.imageWrapper}>
				<div className={styles.iconWrapper}>
					<Icon />
				</div>
			</div>
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{description}</p>
		</div>
	);
};
