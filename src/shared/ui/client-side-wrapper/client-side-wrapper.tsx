import { ClientSideWrapperProps } from './client-side-wrapper.props';

export const ClientSideWrapper = ({ children }: ClientSideWrapperProps) => {
	if (typeof window === 'undefined') {
		return null;
	}

	return <>{children}</>;
};
