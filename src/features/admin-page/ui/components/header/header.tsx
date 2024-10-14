'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

export const AdminHeader = () => {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<Link
				className={clsx(styles.link, {
					[styles.active]: pathname.includes('/admin/orders'),
				})}
				href="/admin/orders">
				Orders
			</Link>
			<Link
				className={clsx(styles.link, {
					[styles.active]: pathname.includes('/admin/users'),
				})}
				href="/admin/users">
				Users
			</Link>
			<Link
				className={clsx(styles.link, {
					[styles.active]: pathname.includes('/admin/telegram-users'),
				})}
				href="/admin/telegram-users">
				Telegram users
			</Link>
		</header>
	);
};
