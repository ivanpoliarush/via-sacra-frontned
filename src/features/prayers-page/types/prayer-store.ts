interface Products {
	id: string;
	name: string;
}

export interface PrayerStore {
	products: Products[];

	addProduct: (name: string) => void;
	removeProduct: (id: string) => void;
	clear: () => void;
}
