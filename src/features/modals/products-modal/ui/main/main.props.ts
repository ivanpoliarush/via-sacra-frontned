export interface ProductsModalProps {
	isOpen: boolean;
	onClose: () => void;
	translatedTexts: Awaited<
		typeof import('../../../../../dictionaries/pt.json')
	>;
}
