interface Product {
	name: string;
	id: string;
}

export interface CandlesStore {
	products: Product[];
	candleType: string;
	names: string[];
	clientName: string;
	clientEmail: string;

	addProduct: (name: string) => void;
	removeProduct: (id: string) => void;
	setCandleType: (candleType: string) => void;
	setClientName: (clientName: string) => void;
	setClientEmail: (clientEmail: string) => void;
	setNames: (names: string[]) => void;
	clear: () => void;
}
