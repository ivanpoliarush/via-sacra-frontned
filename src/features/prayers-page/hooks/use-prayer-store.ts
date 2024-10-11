import { createStore } from '@/shared/lib/create-store';
import { PrayerStore } from '../types/prayer-store';

export const usePrayerStore = createStore<PrayerStore>((get, set) => ({
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
