'use client';

import { poppins } from '@/shared/fonts';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './language-switcher.module.css';

const Language = ({
	isActive,
	language,
}: {
	isActive: boolean;
	language: string;
}) => {
	const page = usePathname();
	const currentPage = page.slice(3) || 'home';

	return (
		<Link
			locale={language.toLowerCase()}
			href={`/${language.toLowerCase()}/${page.slice(4)}`}
			className={clsx(styles.button, poppins.className)}>
			<p
				className={clsx(styles.text, {
					[styles.active]: isActive,
				})}>
				{language}
			</p>
			{isActive && (
				<motion.div
					transition={{ duration: 0.2 }}
					className={styles.background}
					layoutId={currentPage}
				/>
			)}
		</Link>
	);
};

export const LanguageSwitcher = () => {
	const pathname = usePathname();

	return (
		<div className={styles.wrapper}>
			<Language language="SP" isActive={pathname.includes('/sp')} />
			<Language language="PT" isActive={pathname.includes('/pt')} />
		</div>
	);
};
