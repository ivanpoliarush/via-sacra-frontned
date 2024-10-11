export interface CandlesOrder {
	client: {
		name: string;
		email: string;
	};
	options: {
		names: string[];
		candleType: 'health' | 'rest';
	};
	products: {
		type: 'candle';
		name: string;
	}[];
}
