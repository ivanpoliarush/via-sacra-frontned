import { inter } from '@/shared/fonts';
import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './page.module.css';

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
