import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	label: string | ReactNode;
	loading?: boolean;
	color?: 'dark' | 'light';
	showArrow?: boolean;
	laderClassName?: string;
}
