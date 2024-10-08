import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NewsletterFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	lang: string;
}
