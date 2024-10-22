import { inter } from '@/shared/fonts';
import clsx from 'clsx';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'Via Sacra | Admin Page',
	description: 'Admin page for the Via Sacra website',
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body className={clsx(styles.body, inter.className)}>
				{children}
			</body>
		</html>
	);
};

export default AdminLayout;
