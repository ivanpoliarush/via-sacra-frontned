import { Inter, Mea_Culpa, Montserrat, Poppins } from 'next/font/google';

export const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
});
export const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
export const meaCulpa = Mea_Culpa({ subsets: ['latin'], weight: ['400'] });
export const inter = Inter({ subsets: ['latin'] });
