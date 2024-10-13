import { useEffect, useState } from 'react';

interface Options {
	recalculateInterval?: number;
}

export const useWindowDimensions = ({ recalculateInterval }: Options = {}) => {
	const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
	const initialHeight =
		typeof window !== 'undefined' ? window.innerHeight : 0;

	const [width, setWidth] = useState<number>(initialWidth);
	const [height, setHeight] = useState<number>(initialHeight);

	useEffect(() => {
		setWidth(window?.innerWidth || 0);

		window.addEventListener('resize', setWindowDimensions);

		return () => {
			window.removeEventListener('resize', setWindowDimensions);
		};
	}, []);

	useEffect(() => {
		if (!recalculateInterval) {
			return;
		}

		const interval = setInterval(() => {
			setWindowDimensions();
		}, recalculateInterval);

		return () => {
			clearInterval(interval);
		};
	}, [recalculateInterval]);

	const setWindowDimensions = () => {
		setWidth(window?.outerWidth || 0);
		setHeight(document?.body?.getBoundingClientRect?.()?.height || 0);
	};

	return { width, height };
};
