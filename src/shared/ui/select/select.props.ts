interface Option {
	value: string;
	label: string;
}

export interface SelectProps {
	options: Option[];
	selectedValue: string;
	onChange?: (value: string) => void;
}
