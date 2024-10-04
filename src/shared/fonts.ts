import { Mea_Culpa, Montserrat, Poppins } from 'next/font/google';

export const montserrat = Montserrat({
	subsets: [
		'latin',
		'cyrillic',
		'cyrillic-ext',
		'latin',
		'latin-ext',
		'vietnamese',
	],
	weight: ['400', '700'],
});
export const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
export const meaCulpa = Mea_Culpa({ subsets: ['latin'], weight: ['400'] });
