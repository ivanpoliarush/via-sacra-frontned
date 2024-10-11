import { createStore } from '@/shared/lib/create-store';
import { CandlesStore } from '../types/candles-store';

export const useCandlesStore = createStore<CandlesStore>((get, set) => ({
	products: [],

	addProduct: name => {
		const { products } = get();
		const id = new Date().getTime().toString() + Math.random().toString();

		set({ products: [...products, { name, id }] });
	},
	removeProduct: id => {
		const { products } = get();

		set({ products: products.filter(product => product.id !== id) });
	},
	clear: () => {
		set({
			products: [],
		});
	},
}));
