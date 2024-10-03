export interface InfoItemProps {
	title: string;
	subtitle: string;
	description: string;
	button: {
		label: string;
		href: string;
	};
	image: string;
	imageData?: {
		title: string;
		subtitle: string;
	};
	reverse?: boolean;
}
