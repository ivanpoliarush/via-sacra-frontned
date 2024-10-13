import { montserrat } from '@/shared/fonts';
import { ReactNode } from 'react';

const AdminPagesLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
};

export default AdminPagesLayout;
