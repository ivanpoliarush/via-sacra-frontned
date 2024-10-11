export interface PrayersOrder {
	client: {
		name: string;
		email: string;
	};
	options: {
		names: string[];
	};
	products: {
		type: 'prayer';
		name: string;
	}[];
}
