'use client';

import { poppins } from '@/shared/fonts';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './language-switcher.module.css';

const Language = ({
	isActive,
	onChange,
	language,
}: {
	isActive: boolean;
	language: string;
	onChange: () => void;
}) => {
	const page = usePathname();

	return (
		<button
			className={clsx(styles.button, poppins.className)}
			onClick={onChange}>
			<p
				className={clsx(styles.text, {
					[styles.active]: isActive,
				})}>
				{language}
			</p>
			{isActive && (
				<motion.div
					transition={{ duration: 0.2 }}
					layoutId={`language-background-${page}`}
					className={styles.background}
				/>
			)}
		</button>
	);
};

export const LanguageSwitcher = () => {
	const [language, setLanguage] = useState('pt');

	return (
		<div className={styles.wrapper}>
			<Language
				language="SP"
				isActive={language === 'sp'}
				onChange={() => setLanguage('sp')}
			/>
			<Language
				language="PT"
				isActive={language === 'pt'}
				onChange={() => setLanguage('pt')}
			/>
		</div>
	);
};
