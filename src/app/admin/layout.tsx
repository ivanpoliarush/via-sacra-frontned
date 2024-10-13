import { ReactNode } from 'react';
import styles from './page.module.css';

const AdminLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body className={styles.body}>{children}</body>
		</html>
	);
};

export default AdminLayout;
