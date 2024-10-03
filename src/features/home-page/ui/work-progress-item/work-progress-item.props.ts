import { IconProps } from '@/shared/types/icon.props';
import { FC } from 'react';

export interface WorkProgressItemProps {
	icon: FC<IconProps>;
	title: string;
	description: string;
}
