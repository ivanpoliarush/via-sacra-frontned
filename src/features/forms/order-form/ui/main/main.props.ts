import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface OrderFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'candle' | 'prayer';
	translatedTexts: Awaited<
		typeof import('../../../../../dictionaries/pt.json')
	>;
}
