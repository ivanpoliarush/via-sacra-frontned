import { Footer } from '@/features/layout/ui/footer/footer';
import { montserrat } from '@/shared/fonts';
import { ReactNode } from 'react';
import './globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
