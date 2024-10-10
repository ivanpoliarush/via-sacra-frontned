import { createStore } from '@/shared/lib/create-store';
import { CandlesStore } from '../types/candles-store';

export const useCandlesStore = createStore<CandlesStore>((get, set) => ({
	products: [],
	candleType: 'health',
	names: [],
	clientName: '',
	clientEmail: '',

	addProduct: name => {
		const { products } = get();
		const id = new Date().getTime().toString() + Math.random().toString();

		set({ products: [...products, { name, id }] });
	},
	removeProduct: id => {
		const { products } = get();

		set({ products: products.filter(product => product.id !== id) });
	},
	setCandleType: candleType => set({ candleType }),
	setClientName: clientName => set({ clientName }),
	setClientEmail: clientEmail => set({ clientEmail }),
	setNames: names => set({ names }),
	clear: () => {
		set({
			products: [],
			names: [],
			clientName: '',
			clientEmail: '',
			candleType: 'health',
		});
	},
}));
