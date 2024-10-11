interface Product {
	name: string;
	id: string;
}

export interface CandlesStore {
	products: Product[];

	addProduct: (name: string) => void;
	removeProduct: (id: string) => void;
	clear: () => void;
}
