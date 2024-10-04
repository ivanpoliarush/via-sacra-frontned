import { IconProps } from '@/shared/types/icon.props';

export const CloseIcon = (props: IconProps) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none">
		<circle cx="10" cy="10" r="10" fill="#F5EBDA" />
		<path
			d="M6 6L14 14M6 14L14 6"
			stroke="#241B0A"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
