import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	label: string;
	color?: 'dark' | 'light';
	showArrow?: boolean;
}
