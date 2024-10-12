import { montserrat } from '@/shared/fonts';
import { ReactNode } from 'react';
import './globals.css';

const RootLayout = ({
	children,
	params: { lang },
}: {
	children: ReactNode;
	params: { lang: string };
}) => {
	return (
		<html lang={lang}>
			<body className={montserrat.className}>
				{children}
				{/* <Footer lang={lang} /> */}
			</body>
		</html>
	);
};

export default RootLayout;
