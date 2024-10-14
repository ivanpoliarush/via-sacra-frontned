export interface OrderFilters {
	state?: string;
	clientNameSearch?: string;
	clientEmailSearch?: string;
	productTypeSearch?: string;
}

interface Order {
	id: string;
	client: {
		name: string;
		email: string;
	};
	options: {
		names: string[];
		candleType?: 'health' | 'rest';
	};
	products: {
		type: string;
		name: string;
	}[];
	status: string;
	createdAt: string;
}

export interface OrdersResponse {
	data: Order[];
	pagination: {
		total: number;
		page: number;
		limit: number;
	};
}
