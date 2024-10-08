import { getDictionary } from '@/app/[lang]/dictionaries';
import { OrderForm } from '@/features/forms/order-form/ui/main/main';
import { meaCulpa } from '@/shared/fonts';
import styles from './order-section.module.css';

export const OrderSection = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<section className={styles.wrapper}>
			<p className={styles.title}>
				<span className={meaCulpa.className}>
					{texts.prayers.order.title[0]}
				</span>
				<span>{texts.prayers.order.title.slice(1)}</span>
			</p>
			<p className={styles.description}>{texts.prayers.order.subtitle}</p>
			<div className={styles.formWrapper}>
				<img
					className={styles.formImage}
					src="/images/prayers-page/form/image.png"
					alt=""
				/>
				<OrderForm
					type="prayer"
					translatedTexts={texts}
					className={styles.form}
				/>
			</div>
		</section>
	);
};
