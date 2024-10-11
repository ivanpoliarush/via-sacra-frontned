import { TranslatedTexts } from '@/shared/types/localization';
import { Product } from '@/shared/types/product';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SubmitFormKey = 'names' | 'clientName' | 'clientEmail';

export interface SubmitContext {
	values: {
		candlesType: 'health' | 'rest';
		names: string[];
		clientName: string;
		clientEmail: string;
	};

	setToastMessage: (message: string) => void;
	setErrors: (keys: SubmitFormKey[]) => void;
	setValues: (values: Partial<SubmitContext['values']>) => void;
}

export interface SubmitResult {
	reset?: boolean;
}

export interface OrderFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	disabled?: boolean;
	products?: Product[];
	type: 'candle' | 'prayer';
	translatedTexts: TranslatedTexts;
	handleSubmit?: (ctx: SubmitContext) => Promise<SubmitResult | void>;
}
