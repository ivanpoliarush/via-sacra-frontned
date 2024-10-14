export interface SelectProps {
	value: string;
	label: string;
	defaultLabel: string;
	options: { value: string; label: string }[];
	onChange: (value: string | undefined) => void;
}
