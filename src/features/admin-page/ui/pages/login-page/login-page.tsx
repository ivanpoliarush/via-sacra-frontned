'use client';

import { useAdminUser } from '@/features/admin-page/hooks/use-admin-user';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './login-page.module.css';
import { LoginPageProps } from './login-page.props';

const variants = {
	error: {
		x: [0, -10, 10, -10, 10, -10, 10, 0],
	},
};

const {
	init,
	login,
	logout,
	setPassword: setGlobalPassword,
} = useAdminUser.getStore();

export const LoginPage = ({}: LoginPageProps) => {
	const { loading: loginLoading } = useAdminUser();
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		init();
	}, []);

	useEffect(() => {
		setError(false);
	}, [password]);

	const handleSubmit = async () => {
		if (!password.trim()) {
			setError(true);
			return;
		}

		setLoading(true);

		setGlobalPassword(password);
		const success = await login();

		setLoading(false);

		if (!success) {
			setError(true);
			logout();
		}
	};

	if (loginLoading) {
		return (
			<main className={styles.wrapper}>
				<div className={styles.loader} />
			</main>
		);
	}

	return (
		<main className={styles.wrapper}>
			<div className={styles.form}>
				<p className={styles.title}>Login</p>
				<motion.input
					value={password}
					onChange={e => setPassword(e.target.value)}
					variants={variants}
					animate={error ? 'error' : undefined}
					transition={{ duration: 0.75 }}
					placeholder="Enter password"
					className={clsx(styles.input, {
						[styles.error]: error,
					})}
					type="password"
				/>
				<button
					onClick={handleSubmit}
					className={clsx(styles.button, {
						[styles.loading]: loading,
					})}>
					Login
				</button>
			</div>
		</main>
	);
};
