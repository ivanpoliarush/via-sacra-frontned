import { useEffect, useState } from 'react';

interface Options {
	initialExecute?: boolean;
	initialLoading?: boolean;
}

export const useAsyncFunction = <T>(
	fn: () => Promise<T>,
	{ initialExecute, initialLoading }: Options = {},
) => {
	const [loading, setLoading] = useState(initialLoading ?? false);
	const [error, setError] = useState<boolean>(false);
	const [data, setData] = useState<T | null>(null);

	useEffect(() => {
		if (initialExecute) {
			execute();
		}
	}, []);

	const execute = async () => {
		setLoading(true);
		setError(false);

		try {
			const result = await fn();
			setData(result);
		} catch (error) {
			setError(true);
		}

		setLoading(false);
	};

	return {
		loading,
		error,
		data,
		execute,
	};
};
