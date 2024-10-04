import { Mea_Culpa, Montserrat, Poppins } from 'next/font/google';

export const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '100', '200'],
});
export const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
export const meaCulpa = Mea_Culpa({ subsets: ['latin'], weight: ['400'] });
