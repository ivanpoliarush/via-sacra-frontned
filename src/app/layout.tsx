import { montserrat } from '@/shared/fonts';
import { ReactNode } from 'react';
import './globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
