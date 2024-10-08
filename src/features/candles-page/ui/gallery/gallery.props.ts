import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface GalleryProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	translateTexts: Awaited<typeof import('../../../../dictionaries/pt.json')>;
}
