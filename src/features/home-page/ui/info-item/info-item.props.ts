export interface InfoItemProps {
	title: string;
	subtitle: string;
	description: string;
	button: {
		label: string;
	};
	image: string;
	imageData?: {
		title: string;
		subtitle: string;
	};
	reverse?: boolean;
}
