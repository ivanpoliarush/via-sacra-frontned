import { ChangeEvent, useState } from 'react';

interface Options {
	validate?: (value: string) => boolean;
	initialValue?: string;
}

export const useInput = ({ validate, initialValue = '' }: Options = {}) => {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		setError(false);
	};

	const handleBlur = () => {
		if (validate && !validate(value)) {
			setError(true);
		}
	};

	const reset = () => {
		setValue('');
		setError(false);
	};

	const result = {
		events: {
			onChange: handleChange,
			onBlur: handleBlur,
		},
		values: {
			value,
			error,
		},
		functions: {
			reset,
			setError,
			setValue,
		},
	};

	return result;
};
