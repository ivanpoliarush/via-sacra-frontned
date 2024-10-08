import { getDictionary } from '@/app/[lang]/dictionaries';
import { Church } from '@/assets/icons/church';
import { Images } from '@/assets/icons/images';
import { Payment } from '@/assets/icons/payment';
import { Request } from '@/assets/icons/request';
import { meaCulpa } from '@/shared/fonts';
import { WorkProgressItem } from '../work-progress-item/work-progress-item';
import styles from './work-progress-section.module.css';

export const WorkProgressSection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span>{texts.home.workProgress.title.slice(0, 6)}</span>
				<span className={meaCulpa.className}>
					{texts.home.workProgress.title[6]}
				</span>
				<span>{texts.home.workProgress.title.slice(7)}</span>
			</p>
			<div className={styles.items}>
				<WorkProgressItem
					icon={Request}
					title={texts.home.workProgress.request.title}
					description={texts.home.workProgress.request.description}
				/>
				<WorkProgressItem
					icon={Payment}
					title={texts.home.workProgress.payment.title}
					description={texts.home.workProgress.payment.description}
				/>
				<WorkProgressItem
					icon={Church}
					title={texts.home.workProgress.church.title}
					description={texts.home.workProgress.church.description}
				/>
				<WorkProgressItem
					icon={Images}
					title={texts.home.workProgress.images.title}
					description={texts.home.workProgress.images.description}
				/>
			</div>
		</section>
	);
};
