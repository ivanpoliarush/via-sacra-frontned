import { useEffect, useState } from 'react';

export const useToastMessage = () => {
	const [toastMessage, setToastMessage] = useState('');

	useEffect(() => {
		if (!toastMessage) {
			return;
		}

		const timeout = setTimeout(() => {
			setToastMessage('');
		}, 3000);

		return () => clearTimeout(timeout);
	}, [toastMessage]);

	return [toastMessage, setToastMessage] as const;
};
