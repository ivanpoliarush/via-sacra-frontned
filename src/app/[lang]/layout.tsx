import { Footer } from '@/features/layout/ui/footer/footer';
import { montserrat } from '@/shared/fonts';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
	title: 'Via Sacra',
	description:
		'The website offers unique spiritual services, such as lighting a candle in the Vatican or requesting a prayer. Users can select the desired rituals and receive confirmation of their fulfillment in one of the holiest places in the world.',
	keywords: [
		'order a candle in the Vatican',
		'request a prayer online',
		'spiritual services Vatican',
		'religious rituals online',
		'custom prayer',
		'light a candle in church',
		'church rituals online',
		'prayer for health',
		'candles and prayers in the Vatican',
		'spiritual support',
	],
};

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
				<Footer lang={lang} />
			</body>
		</html>
	);
};

export default RootLayout;
