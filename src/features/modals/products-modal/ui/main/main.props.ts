import { TranslatedTexts } from '@/shared/types/localization';
import { Product } from '@/shared/types/product';

export interface ProductsModalProps {
	isOpen: boolean;
	products: Product[];
	onClose: () => void;
	translatedTexts: TranslatedTexts;
}
