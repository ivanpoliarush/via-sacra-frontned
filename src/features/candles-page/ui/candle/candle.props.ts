import { CandleType } from '@/shared/types/candle';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CandleProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean;
	type: CandleType;
	title: string;
	price: number;
	image: string;
}
