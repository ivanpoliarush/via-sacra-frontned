import { getDictionary } from '@/app/[lang]/dictionaries';
import { Instagram, Telegram } from '@/assets/icons/socials';
import { NewsletterForm } from '@/features/forms/newsletter-form/ui/main/main';
import styles from './footer.module.css';

export const Footer = async ({ lang }: { lang: string }) => {
	const texts = await getDictionary(lang);

	return (
		<>
			<footer className={styles.footer}>
				<NewsletterForm translateTexts={texts} />
				<div className={styles.socials}>
					<a href="https://t.me/brazil_ikonka">
						<Telegram />
					</a>
					<a href="https://www.instagram.com/goat_930?igsh=bHcxNHVpaWhiZ3R1">
						<Instagram />
					</a>
				</div>
				<div className={styles.line} />
				<div className={styles.mainInfo}>
					<p
						className={
							styles.text
						}>{`© ${new Date().getFullYear()} ${texts.footer.text}.`}</p>
					<div className={styles.links}>
						<p className={styles.text}>{texts.footer.termsOfUse}</p>
						<p className={styles.text}>
							{texts.footer.privacyPolicy}
						</p>
					</div>
				</div>
				<img
					className={styles.background}
					src="/images/layout/footer-background.png"
					alt=""
				/>
			</footer>
		</>
	);
};
