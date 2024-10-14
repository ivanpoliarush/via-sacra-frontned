import { IconProps } from '@/shared/types/icon.props';

export const CheckMark = (props: IconProps) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none">
		<path
			d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
			fill="#2867E8"
		/>
		<path
			d="M8 12.3333L10.4615 15L16 9"
			stroke="#323741"
			stroke-width="0.666667"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
