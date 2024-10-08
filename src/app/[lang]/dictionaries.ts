import 'server-only';

const dictionaries: Record<
	string,
	() => Promise<{
		message: string;
	}>
> = {
	pt: () =>
		import('../../dictionaries/pt.json').then(module => module.default),
	sp: () =>
		import('../../dictionaries/sp.json').then(module => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
