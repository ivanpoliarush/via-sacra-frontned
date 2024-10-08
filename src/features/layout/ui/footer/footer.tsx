import { Instagram, Telegram } from '@/assets/icons/socials';
import { NewsletterForm } from '@/features/forms/newsletter-form/ui/main/main';
import styles from './footer.module.css';

export const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<NewsletterForm />
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
						}>{`© ${new Date().getFullYear()} Lift Media. All rights reserved.`}</p>
					<div className={styles.links}>
						<p className={styles.text}>Terms of Service</p>
						<p className={styles.text}>Privacy Policy</p>
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
